import Head from 'next/head'
import { getCssText } from '../../stitches.config'

import React, { useState, useEffect, useCallback } from 'react' 

import * as Y from 'yjs'
import { WebsocketProvider } from 'y-websocket'
import { IndexeddbPersistence } from 'y-indexeddb'

import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import TaskList from '@tiptap/extension-task-list'
import TaskItem from '@tiptap/extension-task-item'
import Highlight from '@tiptap/extension-highlight'
import CharacterCount from '@tiptap/extension-character-count'
import Collaboration from '@tiptap/extension-collaboration'
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

const numActiveUsers = (editor: Editor) => {
    return editor?.storage?.collaborationCursor?.users?.length ?? 0;
}

const sanitizedStatusSuffix = (editor: Editor) => {
    return `user${(editor?.storage?.collaborationCursor?.users?.length ?? 0) === 1 ? '' : 's'} online in ${room}`;
}

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
            Highlight,
            TaskList,
            TaskItem,
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
        if (editor) {
            if(!currentUser) {
                let userWithCredentials = getInitialUser()
                setCurrentUser(userWithCredentials)
            } else {
                localStorage.setItem('currentUser', JSON.stringify(currentUser))
                // editor.chain().focus().updateUser(currentUser).run()
            }
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
                <Status> 
                    {userActivityStatus()}
                </Status>
                <ActiveUser onClick={setName}> 
                    {currentUser ? currentUser.name : ''} 
                </ActiveUser>
            </EditorFooter>

        </TiptapEditor>
    );
}

export default Tiptap 