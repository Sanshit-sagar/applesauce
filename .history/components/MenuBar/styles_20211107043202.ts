import { styled } from '../../stitches.config'

export const EditorHeader = styled('div', {
    display: 'flex',
    flex: '0 0 auto',
    flexWrap: 'wrap',
    fd: 'row',
    ai: 'center',
    borderBottom: '3px solid #0d0d0d',
    padding: '0.25rem'
});

export const Divider = styled('div', {
    backgroundColor: 'rgba(0,0,0,1)',
    height: '1.25rem',
    ml: '0.5rem',
    mr: '0.75rem',
    width: '2px',
}); 