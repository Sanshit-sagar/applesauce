import { styled } from '../../stitches.config'

export const MenuButton = styled('button', {
    height: '1.5rem',
    width: '1.5rem', 
    bc: 'transparent',
    color: '#0d0d0d',
    border: '1px solid',
    borderColor: '$accentBorder',
    p: '$1',
    br: '$1',
    mx: '$1',
    '&:hover': {
        bc: '#0d0d0d',
        color: '#fff',
    },
    '&:focus': {
        bc: '#0d0d0d',
        color: '#fff'
    }
});