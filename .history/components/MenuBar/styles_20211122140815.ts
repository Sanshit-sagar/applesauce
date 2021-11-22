import { styled } from '../../stitches.config'

export const EditorHeader = styled('div', {
    display: 'flex',
    flex: '0 0 auto',
    flexWrap: 'wrap',
    fd: 'row',
    ai: 'center',
    borderBottom: '3px solid #0d0d0d'
});

export const Divider = styled('div', {
    backgroundColor: 'rgba(0,0,0,1)',
    height: '100%',
    mx: '0.5rem',
    mr: '0.5rem',
    width: '2px',
}); 