import React, { Fragment } from 'react'

import { MenuButton } from './styles'


interface MenuItemProps {
    action?: () => any;
    title?: string;
    icon?: string;
    isActive?: () => boolean | boolean | null;
}

export const MenuItem = ({ action, title, icon, isActive = null }: MenuItemProps) => {

    return (
        <MenuButton 
            onClick={action}
            title={title}
        >
            <MappedIcon iconName={icon} /> 
        </MenuButton>
    )
}