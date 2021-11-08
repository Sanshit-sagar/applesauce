import React, { Fragment } from 'react'
import { MenuItem } from '../MenuItem'
import {
    EditorHeader,
    Divider
} from './styles' 

export const MenuBar = ({ editor }) => {
    if(!editor) return null

    const setLink = () => {
        const previousUrl = editor.getAttributes('link').href
        const url = window.prompt('URL', previousUrl)

        if(url!==null) {
            if(url==='') {
                editor.chain().focus().extendMarkRange('link').unsetLink().run()
            } else {
                editor.chain().focus().extendMarkRange('link').setLink({ href: url }).run()
            }
        }
    }

    const items = [{
        icon: 'h-1',
        title: 'Heading 1',
        action: () => editor.chain().focus().toggleHeading({ level: 1 }).run(),
        isActive: () => editor.isActive('heading', { level: 1 }),
    }, {
        icon: 'h-2',
        title: 'Heading 2',
        action: () => editor.chain().focus().toggleHeading({ level: 2 }).run(),
        isActive: () => editor.isActive('heading', { level: 2 }),
    }, {
        icon: 'h-3',
        title: 'Heading 3',
        action: () => editor.chain().focus().toggleHeading({ level: 3 }).run(),
        isActive: () => editor.isActive('heading', { level: 3 }),
    }, {
        icon: 'paragraph',
        title: 'Paragraph',
        action: () => editor.chain().focus().setParagraph().run(),
        isActive: () => editor.isActive('paragraph'),
    }, {
        type: 'divider',
    }, {
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
    }, {
        type: 'divider',
    }, {
        icon: 'color',
        title: 'Color',
        action: () => (event) => editor.chain().focus().setColor(event.currentTarget.value).run(),
        isActive: () => editor.getAttributes('textStyle').color,
        isDisabled: () => editor
    }, {
        icon: 'list-unordered',
        title: 'Bullet List',
        action: () => editor.chain().focus().toggleBulletList().run(),
        isActive: () => editor.isActive('bulletList'),
    }, {
        icon: 'list-ordered',
        title: 'Ordered List',
        action: () => editor.chain().focus().toggleOrderedList().run(),
        isActive: () => editor.isActive('orderedList'),
    }, {
        icon: 'list-check-2',
        title: 'Task List',
        action: () => editor.chain().focus().toggleTaskList().run(),
        isActive: () => editor.isActive('taskList'),
    }, {
        type: 'divider',
    }, {
        icon: 'align-left',
        title: 'Align Left',
        action: () => editor.chain().focus().setTextAlign('left').run(),
        isActive: editor.isActive({ textAlign: 'left' }),
    }, {
        icon: 'align-center',
        title: 'Align Center',
        action: () => editor.chain().focus().setTextAlign('center').run(),
        isActive: editor.isActive({ textAlign: 'center' }),
    }, {
        icon: 'align-right',
        title: 'Align Right',
        action: () => editor.chain().focus().setTextAlign('right').run(),
        isActive: editor.isActive({ textAlign: 'right' }),
    }, {
        icon: 'align-justify',
        title: 'Align Justify',
        action: () => editor.chain().focus().setTextAlign('justify').run(),
        isActive: editor.isActive({ textAlign: 'justify' }),
    }, {
        type: 'divider',
    }, {
        icon: 'link',
        title: 'Link',
        action: () => setLink(),
        isActive: () => editor.isActive('link'),
        isDisabled: () => editor.can().setLink(),
    }, {
        icon: 'unlink',
        title: 'Unlink',
        action: () => editor.chain().focus().unsetLink().run(),
        isActive: () => editor.isActive('link'),
        isDisabled: () => !editor.isActive('link'),
    }, {
        icon: 'mark-pen-line',
        title: 'Highlight',
        action: () => editor.chain().focus().toggleHighlight().run(),
        isActive: () => editor.isActive('highlight'),
    }, {
        icon: 'double-quotes-l',
        title: 'Blockquote',
        action: () => editor.chain().focus().toggleBlockquote().run(),
        isActive: () => editor.isActive('blockquote'),
    },  {
        icon: 'code-view',
        title: 'Code',
        action: () => editor.chain().focus().toggleCode().run(),
        isActive: () => editor.isActive('code'),
    },{
        icon: 'code-box-line',
        title: 'Code Block',
        action: () => editor.chain().focus().toggleCodeBlock().run(),
        isActive: () => editor.isActive('codeBlock'),
    }, {
        type: 'divider',
    }, {
        icon: 'separator',
        title: 'Horizontal Rule',
        action: () => editor.chain().focus().setHorizontalRule().run(),
    }, {
        icon: 'text-wrap',
        title: 'Hard Break',
        action: () => editor.chain().focus().setHardBreak().run(),
    }, {
        icon: 'format-clear',
        title: 'Clear Format',
        action: () => editor.chain().focus().clearNodes().unsetAllMarks().run(),
    }, {
        type: 'divider',
    }, {
        icon: 'arrow-go-back-line',
        title: 'Undo',
        action: () => editor.chain().focus().undo().run(),
    }, {
        icon: 'arrow-go-forward-line',
        title: 'Redo',
        action: () => editor.chain().focus().redo().run(),
    }]

    return (
        <EditorHeader>
            {items.map((item, index) => (
                <Fragment key={index}>
                    {item.type==='divider' ? <Divider /> : <MenuItem {...item} />}
                </Fragment>
            ))} 
        </EditorHeader>
    );

}