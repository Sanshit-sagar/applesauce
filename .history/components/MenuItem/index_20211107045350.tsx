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
const HighlightIcon = () => <i class="ri-highlight"></i>



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