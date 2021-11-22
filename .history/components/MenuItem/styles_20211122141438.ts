import { styled } from '../../stitches.config'

import * as Radix from '@radix-ui/react-primitive'

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
>(( { children, ...otherProps }, forwardedRef) => (
    <StyledButtonGroup {...otherProps} ref={forwardedRef}>
        {children}
    </StyledButtonGroup>
)); 