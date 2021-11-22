import { styled } from '../../stitches.config'
import React, { forwardRef, ElementRef } from 'react'
import * as Radix from '@radix-ui/react-primitive'

const itemStyles = {
    all: 'unset',
    flex: '0 0 auto',
    bc: 'transparent',
    color:  'white',
    height: 30,
    padding: '0 $1',
    br: '$1',
    fontSize: '$1',
    lineHeight: 1,
    display: 'inline-flex',
    ai: 'center',
    jc: 'center',
    '&:hover': { 
        backgroundColor: '$accentBgHover', 
        color: `$accentSolidHover`,
        borderColor: '$accentBorderHover',
    },
    '&:focus': { 
        position: 'relative', 
        boxShadow: `0 0 0 2px $shadow`,
        bc: '$accentBgActive', 
        borderColor: '$accentFocusRing',
        br: '$2'
    }
}

export const MenuButton = styled('button', {
    height: '1.5rem',
    width: '1.5rem', 
    bc: 'transparent',
    color: '#0d0d0d',
    border: '1px solid',
    borderColor: '$accentBorder',
    p: '$1',
    br: '$1',
    mr: '$1',
    '&:hover': {
        bc: '#0d0d0d',
        color: '#fff',
    },
    '&:focus': {
        bc: '#0d0d0d',
        color: '#fff'
    }
});

export const StyledButton = styled('button', {
    all: 'unset',
    flex: '0 0 auto',
    backgroundColor: 'transparent',
    paddingLeft: '$3',
    paddingRight: '$3',
    height: 27.5,
    padding: '0 $2',
    borderRadius: '$1',
    display: 'inline-flex',
    fontSize: '$1',
    lineHeight: 1,
    alignItems: 'center',
    justifyContent: 'center',
    border: '1px solid $accentBg',
    '&:hover': { 
        color: '$accentTextHover', 
        bc: '$accentBgHover',
    } 
});

export const StyledButtonGroup = styled('div', {
    display: 'inline-flex',
    jc: 'flex-start', 
    ai: 'center',
    border: 'none',
    gap: '$1',
    pt: '$2',
})

export const ExtendedStyledButtonGroup = React.forwardRef<
    React.ElementRef<typeof StyledButtonGroup>,
    Radix.ComponentPropsWithoutRef<typeof StyledButtonGroup>
>(({ children, ...otherProps }, forwardedRef) => (
    <StyledButtonGroup 
        {...otherProps} 
        ref={forwardedRef}
    >
        {children}
    </StyledButtonGroup>
)); 

