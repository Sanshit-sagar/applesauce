import { styled } from '../../stitches.config'
import React, { forwardRef, ElementRef } from 'react'
import * as Radix from '@radix-ui/react-primitive'


const StyledButton = styled('button', {
    bc: '#fff',
    color: '#000',
    height: 30,
    width: 30, 
    p: '$1',
    mr: '$1',
    border: '1px solid',
    borderColor: '#000',
    br: '$1',
    lineHeight: 1,
    fontSize: '$1',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    '&:hover': {
        bc: '#000',
        color: '#fff',
    },
    '&:focus': {
        bc: '#000',
        color: '#fff',
        borderColor: 'rgba(255,0,0,1.0)'
    }
});

const StyledButtonGroup = styled('div', {
    display: 'inline-flex',
    jc: 'flex-start', 
    ai: 'center',
    border: 'none',
    gap: '$1',
    pt: '$2',
});

const ExtendedButton = forwardRef<
    ElementRef<typeof StyledButton>,
    Radix.ComponentPropsWithoutRef<typeof StyledButton> & {
        onClick: () => void; 
        title: string;
    }
>(({ children, ...otherProps }, forwardedRef) => (
    <StyledButton
        {...otherProps}
        ref={forwardedRef}
    >
        {children}
    </StyledButton>
)); 


const ExtendedButtonGroup = forwardRef<
    ElementRef<typeof StyledButtonGroup>,
    Radix.ComponentPropsWithoutRef<typeof StyledButtonGroup>
>(({ children, ...otherProps }, forwardedRef) => (
    <StyledButtonGroup 
        {...otherProps} 
        ref={forwardedRef}
    >
        {children}
    </StyledButtonGroup>
)); 

export const MenuButton = ExtendedButton
export const MenuButtonGroup = ExtendedButtonGroup