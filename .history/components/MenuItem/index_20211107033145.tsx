import React from 'react'

interface MenuItemProps {
    action?: () => any;
    title?: string;
    icon?: string;
    isActive?: () => boolean | boolean | null;
}

export const MenuItem = ({ action, title, icon, isActive = null }: MenuItemProps) => {

    return (
        <button 
            onClick={action}
            title={title}
        >
           {String(icon)}
        </button>
    )
}