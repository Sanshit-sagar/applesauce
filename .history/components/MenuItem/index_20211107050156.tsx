import React from 'react'

import { MenuButton } from './styles'

interface MenuItemProps {
    action?: () => any;
    title?: string;
    icon?: string;
    isActive?: () => boolean | boolean | null;
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
const OrderedListIcon = () => <i class="ri-list-ordered"></i>
const BlockquoteIcon = () => <i class="ri-double-quotes-l"></i>
const TextWrapIcon = () => <i class="ri-text-wrap"></i>
const ClearFormattingIcon = () => <i class="ri-format-clear"></i>
const UndoIcon = () => <i class="ri-arrow-go-back-line"></i>
const RedoIcon = () => <i class="ri-arrow-go-forward-line"></i>


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