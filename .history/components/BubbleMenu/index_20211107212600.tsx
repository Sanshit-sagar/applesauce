import { Fragment } from 'react' 
import {
    Editor,
    BubbleMenu
} from '@tiptap/react'

export const StylesBubbleMenu = ({ editor }: { editor: Editor; }) => {
    const stylingOptions = [
        
    ]

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