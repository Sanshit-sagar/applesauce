import { Fragment } from 'react' 
import { Editor, FloatingMenu } from '@tiptap/react' 

import { MenuItem } from '../MenuItem'

export const FormattingFloatingMenu = ({ editor }: { editor: Editor }) => {
    let formattingOptions = [
        {
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
        },
    ];

    return (
        <div style={{ marginTop: '200px'}}>
            {editor && (
                <FloatingMenu 
                    className="floating-menu" 
                    tippyOptions={{ duration: 100 }} 
                    editor={editor}
                >
                   {formattingOptions.map((option, index) => (
                       <MenuItem key={index} {...option} />
                   ))}
                </FloatingMenu>
            )}
        </div>
    );
}