import React, { useState, useEffect, forwardRef, useImperativeHandle } from 'react';
import { styled } from '../../stitches.config'

import * as Radix from '@radix-ui/react-primitive'
import Image from 'next/image';

const Items = styled('div', {
    position: 'relative',
    padding: '$1',
    br: '$1',
    background: '#fff',
    overflowY: 'hidden',
    overflowX: 'hidden',
    color: 'rgba(0,0,0,0.8)',
    fontSize: '0.9rem',
    boxShadow: 'inset 0 0 0 0.1rem rgba(0,0,0,0.05), 0 0 0 0.1rem rgba(0,0,0,0.1)'
});

const Item = styled('button', {
    display: 'block',
    margin: 0,
    width: '100%',
    textAlign: 'left',
    background: 'transparent',
    br: '$2',
    border: '1px solid transparent',
    padding: '1px 2px'
}); 

type ExtendedButtonProps = Radix.ComponentPropsWithoutRef<typeof Item> & { 
    isSelected: boolean; 
    onClick: () => void;
    key: string; 
}; 

const ExtendedButton = forwardRef<
    React.ElementRef<typeof Item>,
    ExtendedButtonProps
>(({ key, children, onClick, isSelected, ...otherProps }, forwardedRef) => (
    <Item 
        key={key} 
        {...otherProps} 
        onClick={onClick} 
        ref={forwardedRef}
        css={{
            backgroundColor: isSelected ? 'blue' : 'white',
            color: isSelected ? 'white' : 'navy',
            border: '1px solid',
            borderColor: 'transparent',
            '&:hover': {
                backgroundColor: isSelected ? 'navy' : 'gray',
                color: isSelected ? 'silver' : 'black'
            }
        }}
    >
        {children} 
    </Item>
)); 

type EmojiListItem = { 
    name: string; 
    emoji?: string; 
    fallbackImage?: string;  
};

type EmojiListProps = {
    items?: EmojiListItem[]; 
    command: ({ name }: { name: string; }) => void; 
}

export const EmojiList = forwardRef((props: EmojiListProps, ref) => {
    const [selectedIndex, setSelectedIndex] = useState<number>(0);

    const upHandler = () => (
        setSelectedIndex(((selectedIndex + props.items.length) - 1) % props.items.length)
    );
    const downHandler = () => (
        setSelectedIndex((selectedIndex + 1) % props.items.length)
    ); 
    const enterHandler = () => selectItem(selectedIndex);

    const selectItem = (index: number) => {
        const item = props.items[index];
        if(item) props.command({ name: item.name });
    }

    useEffect(() => (
        setSelectedIndex(0)
    ), [props.items]); 

    useImperativeHandle((ref), () => ({
        onKeyDown: ({ event }) => {
            if (event.key === 'ArrowUp') {
                upHandler()
                return true
            }

            if (event.key === 'ArrowDown') {
                downHandler()
                return true
            }

            if (event.key === 'Enter') {
                enterHandler()
                return true
            }

            return false
        },
    }));
    
    return (
        <Items>
            {props.items.map((item, index: number) => (
                <ExtendedButton 
                    key={`emoji-${index}`}
                    onClick={() => selectItem(index)} 
                    isSelected={index===selectedIndex}
                >
                    {item.fallbackImage ? (
                        <img 
                            height={'1em'} 
                            width={'1em'} 
                            alt={`emoji-${index}`} 
                            src={item.fallbackImage} 
                        />) : item.emoji}
                    :{item.name}: 
                </ExtendedButton>  
            ))}

        </Items> 
    );
})
