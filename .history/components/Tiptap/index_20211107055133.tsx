import React, { useState, useEffect, useCallback } from 'react' 
import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import TaskList from '@tiptap/extension-task-list'
import TaskItem from '@tiptap/extension-task-item'
import Highlight from '@tiptap/extension-highlight'

import { TiptapEditor } from './styles'
import { MenuBar } from '../MenuBar'


const getRandomElement = list => list[Math.floor(Math.random() * list.length)]



const getInitialUser = () => {
    return JSON.parse(localStorage.getItem('currentUser')) || {
      name: getRandomName(),
      color: getRandomColor(),
    }
}

const Tiptap = () => {
    const [status, setStatus] = useState('connecting')
    const [currentUser, setCurrentUser] = useState(getInitialUser)
  
    const editor = useEditor({
        extensions: [
            StarterKit.configure({
                history: false,
            }),
            Highlight,
            TaskList,
            TaskItem,
        ]
    });

    return (
        <TiptapEditor>
            <MenuBar editor={editor} />
            <EditorContent editor={editor} /> 
        </TiptapEditor>
    );
}

export default Tiptap 