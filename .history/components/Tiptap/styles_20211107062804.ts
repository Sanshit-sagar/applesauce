import React from 'react'
import { styled } from '../../stitches.config'
import { EditorContent } from '@tiptap/react'
import * as Radix from '@radix-ui/react-primitive'

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
    jc: 'space-between',
    flex: '0 0 auto',
    flexWrap: 'wrap',
    color: '#0d0d0d',
    fontWeight: 600,
    fontSize: '12px',
    padding: '0.25rem 0.75rem',
    whiteSpace: 'nowrap'
});

export const ActiveUser = styled('button', {
    background: 'none',
    border: 'none',
    br: '0.4rem',
    color: '#0d0d0d',
    font: 'inherit',
    fontSize: '12px',
    fontWeight: 600,
    padding: '0.25rem 0.5rem',
    
    '&:hover': {
        bc: '#0d0d0d',
        color: '#fff'
    }
});

export const StyledContent = styled(EditorContent, {
    display: 'flex',
    flex: '1 1 auto',
    overflowY: 'hidden',
    overflowX: 'hidden',
    padding: '1.25rem 1rem',
    '-webkit-overflow-scrolling': 'touch'
}); 

const ExtendedContent = React.forwardRef<
    React.ElementRef<typeof EditorContent>,
    Radix.ComponentPropsWithoutRef<typeof EditorContent> & { children: React.ReactNode; editor: EditorContent; }
>(({ children, editor, ...otherProps }, forwardedRef) => (
  <EditorContent {...otherProps} editor={editor} ref={forwardedRef}>
    {children}
  </StyledContent>
))