import { styled } from '../../stitches.config'

export const TiptapEditor = styled('div', {
    backgroundColor: '#fff',
    border: '3px solid #0d0d0d',
    br: '0.75rem',
    color: '#0d0d0d',
    display: 'flex',
    fd: 'column',
    height: '35rem',
    width: '75rem'
}); 

export const EditorFooter = styled('div', {
    display: 'flex',
    fd: 'row',
    ai: 'center',
    justifyContent: 'space-between',
    color: '#0d0d0d',
    flex: '0 0 auto',
    flexWrap: 'wrap',
    fontWeight: 600,
    padding: '0.25rem 0.75rem',
    whiteSpace: 'nowrap',

})