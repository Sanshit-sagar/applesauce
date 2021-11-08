import React from 'react'

import { MenuButton } from './styles'

interface MenuItemProps {
    action?: () => any;
    title?: string;
    icon?: string;
    isActive?: () => boolean | boolean | null;
}

const iconMapping = {
    'h-1': <Heading1Icon />,
    'h-2': <Heading2Icon />,
    'bold': <BoldIcon />,
    'italic': <ItalicIcon />,
    'underline': <UnderlineIcon />,
    'strikethrough': <StrikethroughIcon />,
    'mark-pen-line': <HighlightIcon />,
    'code-s-slash-line': <CodeIcon />,
    'paragraph': <ParagraphIcon />,
    'separator': <SeparatorIcon />,
    'list-check': <UnorderedListIcon />,
    'list-check-2': <TodoListIcon />,
    ''
}

const Heading1Icon = () => <i className="ri-h-1"></i>
const Heading2Icon = () => <i className="ri-h-2"></i>
const BoldIcon = () => <i className="ri-bold"></i>
const ItalicIcon = () => <i className="ri-italic"></i>
const UnderlineIcon = () => <i className="ri-underline"></i>
const StrikethroughIcon = () => <i className="ri-strikethrough"></i>
const HighlightIcon = () => <i className="ri-mark-pen-line"></i>
const CodeIcon = () => <i className="ri-code-s-slash-line"></i>
const ParagraphIcon = () => <i className="ri-paragraph"></i>
const SeparatorIcon = () => <i className="ri-separator"></i>
const UnorderedListIcon = () => <i className="ri-list-check"></i>
const TodoListIcon = () => <i className="ri-list-check-2"></i>
const OrderedListIcon = () => <i className="ri-list-ordered"></i>
const BlockquoteIcon = () => <i className="ri-double-quotes-l"></i>
const TextWrapIcon = () => <i className="ri-text-wrap"></i>
const ClearFormattingIcon = () => <i className="ri-format-clear"></i>
const UndoIcon = () => <i className="ri-arrow-go-back-line"></i>
const RedoIcon = () => <i className="ri-arrow-go-forward-line"></i>


export const MenuItem = ({ action, title, icon, isActive = null }: MenuItemProps) => {

    return (
        <MenuButton 
            onClick={action}
            title={title}
        >
           <BoxIcon1 /> 
        </MenuButton>
    )
}