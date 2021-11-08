import React from 'react'

import { MenuButton } from './styles'

interface MenuItemProps {
    action?: () => any;
    title?: string;
    icon?: string;
    isActive?: () => boolean | boolean | null;
}

const Heading1Icon = () => <i class="ri-h-1"></i>
const Heading2Icon = () => <i class="ri-h-2"></i>
const BoldIcon = () => <i class="ri-bold"></i>
const ItalicIcon = () => <i class="ri-italic"></i>
const UnderlineIcon = () => <i class="ri-underline"></i>
const StrikethroughIcon = () => <i class="ri-strikethrough"></i>
const HighlightIcon = () => <i class="ri-mark-pen-line"></i>
const CodeIcon = () => <i class="ri-code-s-slash-line"></i>
const ParagraphIcon = () => <i class="ri-paragraph"></i>
const SeparatorIcon = () => <i class="ri-separator"></i>
const UnorderedListIcon = () => <i class="ri-list-check"></i>
const TodoListIcon = () => <i class="ri-list-check-2"></i>
const OrderedListIcon = () => <i class="ri-list-ordered"></i>


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