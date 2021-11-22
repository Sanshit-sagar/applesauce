import { styled } from '../../stitches.config'

export const MenuButton = styled('button', {
    height: '1.25rem',
    width: '1.75rem', 
    bc: 'transparent',
    color: '#0d0d0d',
    border: 'none',
    br: '0.4rem',
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