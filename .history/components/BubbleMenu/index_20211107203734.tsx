import { Fragment } from 'react' 
import {
    Editor,
    BubbleMenu
} from '@tiptap/react'

export const StylesBubbleMenu = ({ editor }: { editor: Editor; }) => (
    <Fragment>
        {editor && 
            <BubbleMenu 
                    className="bubble-menu" 
                    tippyOptions={{ duration: 100 }} 
                    editor={editor}
                >
                <button
                    onClick={() => editor.chain().focus().toggleBold().run()}
                    className={editor.isActive('bold') ? 'is-active' : ''}
                >
                    Bold
                </button>
                <button
                    onClick={() => editor.chain().focus().toggleItalic().run()}
                    className={editor.isActive('italic') ? 'is-active' : ''}
                >
                    Italic
                </button>
                <button
                    onClick={() => editor.chain().focus().toggleStrike().run()}
                    className={editor.isActive('strike') ? 'is-active' : ''}
                >
                    Strike
                </button>
            </BubbleMenu>
        }
    </Fragment>
)