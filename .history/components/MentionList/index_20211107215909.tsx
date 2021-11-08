import { styled } from '../../stitches.config'
import * as Radix from '@radix-ui/react-primitive'
import React, {
    useState,
    useEffect,
    forwardRef,
    useImperativeHandle,
} from 'react'

const ItemsList = styled('div', {
    padding: '0.2rem',
    position: 'relative',
    borderRadius: '$2',
    backgroundColor: '#fff',
    color: 'rgba(0,0,0,0.8)',
    overflow: 'hidden',
    fontSize: '0.9rem',
    boxShadow: 'inset 0 0 0 1px rgba(0,0,0,0.5), 0 0 0 1px rgba(0,0,0,0.5)',
});

const Item = styled('button', {
    display: 'block',
    margin: 0,
    width: '100%',
    textAlign: 'left',
    backgroundColor: 'transparent',
    br: '$1',
    border: '1px solid transparent',
    padding: '0.2rem 04rem'
}); 

const ExtendedItem = React.forwardRef<
React.ElementRef<typeof Item>,
Radix.ComponentPropsWithoutRef<typeof Item> & { 
    isSelected: boolean; 
    onClick: () => void;
    children: React.ReactNode; 
}>(({ isSelected, children, onClick, ...otherProps }, forwardedRef) => (
    <Item 
        {...otherProps} 
        ref={forwardedRef} 
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
            onClick={() => selectItem(index)}
          >
            {item}
          </Item>
        ))}
      </ItemsList>
    )
  })