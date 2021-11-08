import { Fragment } from 'react' 
import {
    Editor,
    BubbleMenu
} from '@tiptap/react'

export const StylesBubbleMenu = ({ editor }: { editor: Editor; }) => {
    const stylingOptions = [{
        icon: 'bold',
        title: 'Bold',
        action: () => editor.chain().focus().toggleBold().run(),
        isActive: () => editor.isActive('bold'),
    }, {
        icon: 'italic',
        title: 'Italic',
        action: () => editor.chain().focus().toggleItalic().run(),
        isActive: () => editor.isActive('italic'),
    }, {
        icon: 'underline',
        title: 'Underline',
        action: () => editor.chain().focus().toggleUnderline().run(),
        isActive: () => editor.isActive('underline'),
        isDisabled: () => editor.can().toggleUnderline(),
    }, {
        icon: 'strikethrough',
        title: 'Strike',
        action: () => editor.chain().focus().toggleStrike().run(),
        isActive: () => editor.isActive('strike'),
    }, { 
        icon: 'subscript', 
        title: 'Subscript',
        action: () => editor.chain().focus().toggleSubscript().run(),
        isActive: () => editor.isActive('subscript'),
        isDisabled: () => editor.can().toggleSubscript(),
    }, { 
        icon: 'superscript', 
        title: 'Superscript',
        action: () => editor.chain().focus().toggleSuperscript().run(),
        isActive: () => editor.isActive('superscript'),
        isDisabled: () => editor.can().toggleSuperscript(),
    }]

    return (
        <Fragment>
            {editor && 
                <BubbleMenu 
                    className="bubble-menu" 
                    tippyOptions={{ duration: 100 }} 
                    editor={editor}
                >
                    {stylingOptions.map((option, index) => (
                        <MenuItem key={index} {...option} />
                    ))}
                </BubbleMenu>
            }
        </Fragment>
    );
} 