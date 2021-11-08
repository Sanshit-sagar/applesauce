import React from 'react'

import { MenuButton } from './styles'

interface MenuItemProps {
    action?: () => any;
    title?: string;
    icon?: string;
    isActive?: () => boolean | boolean | null;
}

const Heading1Icon = () => <i class="ri-h-1"></i>
const Heading2Icon = () => 


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