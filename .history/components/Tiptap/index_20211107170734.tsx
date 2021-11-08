import React, { useState, useEffect, useCallback } from 'react' 

import * as Y from 'yjs'
import { WebsocketProvider } from 'y-websocket'
import { IndexeddbPersistence } from 'y-indexeddb'
import { useEditor, EditorContent, Editor } from '@tiptap/react'

import StarterKit from '@tiptap/starter-kit'

import Text from '@tiptap/extension-text'
import Link from '@tiptap/extension-link'
import { Color } from '@tiptap/extension-color'

import TaskList from '@tiptap/extension-task-list'
import TaskItem from '@tiptap/extension-task-item'
import Highlight from '@tiptap/extension-highlight'
import Subscript from '@tiptap/extension-subscript'
import Underline from '@tiptap/extension-underline'
import TextAlign from '@tiptap/extension-text-align'
import TextStyle from '@tiptap/extension-text-style'
import Superscript from '@tiptap/extension-superscript'
import Collaboration from '@tiptap/extension-collaboration'
import CharacterCount from '@tiptap/extension-character-count'
import CollaborationCursor from '@tiptap/extension-collaboration-cursor'


import { MenuBar } from '../MenuBar'
import { 
    Status,
    ActiveUser,
    TiptapEditor, 
    EditorFooter,
    StyledContent
} from './styles'

const colors = ['#958DF1', '#F98181', '#FBBC88', '#FAF594', '#70CFF8', '#94FADB', '#B9F18D']
const rooms = ['rooms.10', 'rooms.11', 'rooms.12']
const names = ['Lea Thompson', 'Cyndi Lauper', 'Tom Cruise', 'Madonna', 'Jerry Hall', 'Joan Collins', 'Winona Ryder', 'Christina Applegate']

const getRandomElement = (list: string[]) => list[Math.floor(Math.random() * list.length)]

const getRandomName = () => getRandomElement(names)
const getRandomRoom = () => getRandomElement(rooms)
const getRandomColor = () => getRandomElement(colors)

const numActiveUsers = (editor: Editor) => editor?.storage?.collaborationCursor?.users?.length ?? 0
const userActivityStatus = (editor: Editor, room: string) => `${numActiveUsers(editor)} ${statusSuffix(editor, room)}`
const statusSuffix = (editor: Editor, room: string) => `user${(editor?.storage?.collaborationCursor?.users?.length ?? 0) === 1 ? '' : 's'} online in ${room}`

const room = getRandomRoom()

const ydoc = new Y.Doc()
const websocketProvider = new WebsocketProvider('ws://127.0.0.1:1234', room, ydoc)

const getInitialUser = () => {
    return JSON.parse(localStorage.getItem('currentUser')) || {
        name: getRandomName(),
        color: getRandomColor(),
    }
}

const Tiptap = () => {
    const [status, setStatus] = useState('connecting')
    const [currentUser, setCurrentUser] = useState({
        name: getRandomName(),
        color: getRandomColor()
    })

    const editor = useEditor({
        extensions: [
            StarterKit.configure({
                history: false,
            }),
            Text,
            Color,
            Image,
            Dropcursor,
            Document,
            Highlight,
            TaskList,
            TaskItem,
            Subscript,
            Superscript,
            Underline,
            TextStyle,
            TextAlign.configure({
                types: ['heading', 'paragraph'],
            }),
            Link.configure({
                openOnClick: true,
            }),
            CharacterCount.configure({
                limit: 10000,
            }),
            Collaboration.configure({
                document: ydoc,
            }),
            CollaborationCursor.configure({
                provider: websocketProvider,
            }),
        ],
    });

    useEffect(() => {
        const indexeddbProvider = new IndexeddbPersistence(room, ydoc)
    
        indexeddbProvider.on('synced', () => {
            console.log('Loaded content from database …')
            setStatus('connected :)')
        });

        websocketProvider.on('status', event => {
            setStatus(event.status)
        });
    }, [])

    useEffect(() => {
        if (!editor) return

        if (!currentUser) {
            setCurrentUser(getInitialUser())
        } else {
            localStorage.setItem('currentUser', JSON.stringify(currentUser))
        }
    }, [editor, currentUser])

    const setName = useCallback(() => {
        const name = (window.prompt('Name') || '').trim().substring(0, 32)
    
        if (name) {
          return setCurrentUser({ ...currentUser, name })
        }
    }, [currentUser])

    return (
        <TiptapEditor>
            <MenuBar editor={editor} />

            <StyledContent>
                <EditorContent editor={editor} /> 
            </StyledContent>

            <EditorFooter>
                <Status> {userActivityStatus(editor, room)} </Status>
                <ActiveUser onClick={setName}> {currentUser?.name ?? ''}  </ActiveUser>
            </EditorFooter>

        </TiptapEditor>
    );
}

export default Tiptap 