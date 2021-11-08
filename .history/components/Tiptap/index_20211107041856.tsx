import { styled } from '../../stitches.config'

import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import TaskList from '@tiptap/extension-task-list'
import TaskItem from '@tiptap/extension-task-item'
import Highlight from '@tiptap/extension-highlight'

import { MenuBar } from '../MenuBar'

const TiptapEditor = styled('div', {
    backgroundColor: '#fff',
    border: '3px solid #0d0d0d',
    
})

const Tiptap = () => {

    const editor = useEditor({
        extensions: [
            StarterKit.configure({
                history: false,
            }),
            Highlight,
            TaskList,
            TaskItem,
        ]
    })

    return (
        <div className="editor">
            {editor && <MenuBar editor={editor} />}
            <EditorContent editor={editor} /> 
        </div>
    );
}

export default Tiptap 