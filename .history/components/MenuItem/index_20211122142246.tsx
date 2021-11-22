import React from 'react'

import { MenuButton } from './styles'
import { MappedIcon } from '../MappedIcon'

interface MenuItemProps {
    action?: () => any;
    title?: string;
    icon?: string;
    isActive?: () => boolean | boolean | null;
}

export const MenuItem = ({ action, title, icon, isActive = null }: MenuItemProps) => (
        <MenuButton 
            onClick={action}
            title={title}
        >
            <MappedIcon iconName={icon} /> 
        </MenuButton>
    )
}