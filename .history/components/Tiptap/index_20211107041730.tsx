

import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import TaskList from '@tiptap/extension-task-list'
import TaskItem from '@tiptap/extension-task-item'
import Highlight from '@tiptap/extension-highlight'

import { MenuBar } from '../MenuBar'

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