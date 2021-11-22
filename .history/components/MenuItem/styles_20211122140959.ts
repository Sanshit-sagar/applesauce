import { styled } from '../../stitches.config'

export const MenuButton = styled('button', {
    height: '1.5rem',
    width: '1.5rem', 
    bc: 'transparent',
    color: '#0d0d0d',
    border: '1px solid',
    borderColor: '$accentBorder',
    px: '$1',
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