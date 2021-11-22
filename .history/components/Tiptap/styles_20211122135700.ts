import { styled } from '../../stitches.config'

export const TiptapEditor = styled('div', {
    backgroundColor: '#fff',
    border: '3px solid #0d0d0d',
    br: '$2',
    color: '#0d0d0d',
    display: 'flex',
    fd: 'column',
    height: '650px',
    width: '92.5%',
    margin: '3.75%'
}); 

export const EditorFooter = styled('div', {
    display: 'flex',
    fd: 'row',
    ai: 'center',
    jc: 'space-between',
    flex: '0 0 auto',
    flexWrap: 'wrap',
    color: '#0d0d0d',
    fontWeight: 500,
    fontSize: '$2',
    padding: '$1',
    whiteSpace: 'nowrap',
    borderTop: '3px solid #0d0d0d'
});

export const Status = styled('div', {
    display: 'flex',
    fd: 'row',
    ai: 'center',
    br: '$1',

    '&::before': {
        backgroundColor: 'rgba(#0d0d0d, 0.5)',
        borderRadius: '50%',
        content: " ",
        display: 'inline-block',
        flex: '0 0 auto',
        height: '0.5rem',
        width: '0.5rem'
    }
});

export const ActiveUser = styled('button', {
    background: 'none',
    border: '2px solid black',
    br: '$1',
    color: '#0d0d0d',
    font: 'inherit',
    fontSize: '$2',
    fontWeight: 500,
    padding: '0.2rem',
    
    '&:hover': {
        bc: '#0d0d0d',
        color: '#fff'
    }
});

export const StyledContent = styled('div', {
    width: '100%',
    height: '45rem',
    display: 'flex',
    fd: 'column',
    jc: 'flex-start',
    ai: 'stretch',   
    bc: 'silk',
    color: 'black',
    cursor: 'text',
    fontSize: '$3',
    lineHeight: 0.33,
    overflowY: 'auto',
    overflowX: 'hidden',
    padding: '0.25rem 0.5rem',
    scrollBehavior: 'smooth',
    '-webkit-overflow-scrolling': 'touch',
    outline: 'none',
    border: 'none',
    boxShadow: 'none',
});