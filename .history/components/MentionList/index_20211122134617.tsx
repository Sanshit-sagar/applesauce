import { styled } from '../../stitches.config'
import * as Radix from '@radix-ui/react-primitive'
import React, {
    Fragment,
    useState,
    useEffect,
    forwardRef,
    useImperativeHandle,
} from 'react'

const ItemsList = styled('div', {
    position: 'relative',
    padding: '$1',
    br: '$1',
    background: '#fff',
    overflowY: 'hidden',
    overflowX: 'hidden',
    color: 'rgba(0,0,0,0.8)',
    fontSize: '0.9rem',
    border: '1px solid rgba(0,0,0,1.0)',
    display: 'flex',
    fd: 'column',
    jc: 'space-between',
    ai: 'center',
    gap: '$1'
});

const Item = styled('button', {
    display: 'block',
    margin: 0,
    width: '100%',
    textAlign: 'left',
    background: 'transparent',
    br: '$2',
    border: '1px solid transparent',
    padding: '1px 2px',
    fontSize: 14
}); 

const ExtendedItem = React.forwardRef<
React.ElementRef<typeof Item>,
Radix.ComponentPropsWithoutRef<typeof Item> & { 
    key: number; 
    isSelected: boolean; 
    handleClick: () => void;
    children: React.ReactNode; 
}>(({ key, isSelected, children, handleClick, ...otherProps }, forwardedRef) => (
    <Item 
        {...otherProps} 
        key={key}
        ref={forwardedRef} 
        onClick={handleClick}
        css={{ borderColor: isSelected ? 'black' : 'transparent'}}
    >
        {children}
    </Item>
))
const MentionListItem = ExtendedItem
  
export const MentionList = forwardRef((props: { command: (id) => void; items: string[]; }, ref) => {
    const [selectedIndex, setSelectedIndex] = useState(0)
  
    const selectItem = (index: number) => {
      const item = props.items[index]
  
      if (item) {
        props.command({ id: item })
      }
    }
  
    const upHandler = () => {
      setSelectedIndex(((selectedIndex + props.items.length) - 1) % props.items.length)
    }
  
    const downHandler = () => {
      setSelectedIndex((selectedIndex + 1) % props.items.length)
    }
  
    const enterHandler = () => {
      selectItem(selectedIndex)
    }
  
    useEffect(() => setSelectedIndex(0), [props.items])
  
    useImperativeHandle(ref, () => ({
      onKeyDown: ({ event }) => {
        if (event.key === 'ArrowUp') {
          upHandler()
          return true
        }
  
        if (event.key === 'ArrowDown') {
          downHandler()
          return true
        }
  
        if (event.key === 'Enter') {
          enterHandler()
          return true
        }
  
        return false
      },
    }))
  
    return (
      <ItemsList>
        {props.items.map((item, index) => (
          <MentionListItem 
            key={index}
            isSelected={index===selectedIndex}
            handleClick={() => selectItem(index)}
          >
            {item}
          </MentionListItem>
        ))}
      </ItemsList>
    )
  })