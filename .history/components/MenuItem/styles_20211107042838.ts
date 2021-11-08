import { styled } from '../../stitches.config'

export const MenuButton = styled('button', {
    height: '1.75rem',
    width: '1.75rem', 
    bc: 'transparent',
    border: 'none',
    br: '0.4rem',
    color: '#0d0d0d',
    mr: '0.25rem',
    padding: '0.25rem',

    '&:hover': {
        bc: '#0d0d0d',
        color: '#fff',
    },
    '&:focus': {
        bc: '#0d0d0d',
        color: '#fff'
    }
});