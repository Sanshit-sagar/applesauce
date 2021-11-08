import React from 'react'
import { styled } from '../../stitches.config'
import { EditorContent } from '@tiptap/react'
import * as Radix from '@radix-ui/react-primitive'

export const TiptapEditor = styled('div', {
    backgroundColor: '#fff',
    border: '3px solid #0d0d0d',
    br: '0.5rem',
    color: '#0d0d0d',
    display: 'flex',
    fd: 'column',
    height: '35rem',
    width: '75rem',
    margin: '1rem'
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
    whiteSpace: 'nowrap',
    borderTop: '3px solid #0d0d0d'
});

export const Status = styled('div', {
    display: 'flex',
    fd: 'row',
    ai: 'center',
    br: '5px',

    '&::before': {
        backgroundColor: 'rgba(#0d0d0d, 0.5)',
        borderRadius: '50%',
        content: " ",
        display: 'inline-block',
        flex: '0 0 auto',
        height: '0.5rem',
        width: '0.5rem',
        mr: '0.5rem',
    }
});

export const ActiveUser = styled('button', {
    background: 'none',
    border: '2px solid black',
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

export const StyledContent = styled('div', {
    width: '100%',
    height: '45rem',
    display: 'flex',
    fd: 'column',
    jc: 'flex-start',
    ai: 'stretch',   
    backgroundColor: 'silk',
    color: 'black',
    cursor: 'text',
    fontSize: '$2',
    lineHeight: 1,
    overflowY: 'auto',
    overflowX: 'hidden',
    padding: '0.25rem 0.5rem',
    scrollBehavior: 'smooth',
    '-webkit-overflow-scrolling': 'touch'
});