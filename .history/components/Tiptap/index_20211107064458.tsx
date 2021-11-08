import React, { useState, useEffect, useCallback } from 'react' 
import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import TaskList from '@tiptap/extension-task-list'
import TaskItem from '@tiptap/extension-task-item'
import Highlight from '@tiptap/extension-highlight'

import { MenuBar } from '../MenuBar'
import { 
    TiptapEditor, 
    EditorFooter,
    StyledContent
} from './styles'

const colors = ['#958DF1', '#F98181', '#FBBC88', '#FAF594', '#70CFF8', '#94FADB', '#B9F18D']
const names = ['Lea Thompson', 'Cyndi Lauper', 'Tom Cruise', 'Madonna', 'Jerry Hall', 'Joan Collins', 'Winona Ryder', 'Christina Applegate']

const getRandomElement = (list: string[]) => list[Math.floor(Math.random() * list.length)]
const getRandomColor = () => getRandomElement(colors)
const getRandomName = () => getRandomElement(names)

const getInitialUser = () => {
    return JSON.parse(localStorage.getItem('currentUser')) || {
      name: getRandomName(),
      color: getRandomColor(),
    }
}

const Tiptap = () => {
    // const [status, setStatus] = useState('connecting')
    const [currentUser, setCurrentUser] = useState('')

    const editor = useEditor({
        extensions: [
            StarterKit.configure({
                history: false,
            }),
            Highlight,
            TaskList,
            TaskItem,
        ],
    });

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
            <StyledContent editor={editor} /> 
            <EditorFooter>
                <ActiveUser onClick={setName}> {currentUser ? currentUser.name : ''} </ActiveUser>
            </EditorFooter>
        </TiptapEditor>
    );
}

export default Tiptap 