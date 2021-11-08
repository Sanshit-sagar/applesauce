import { styled } from '../../stitches.config'
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
const Item = styled('div', {
    display: 'block',
    margin: 0,
    width: '100%',
    textAlign: 'left',
    backgroundColor: 'transparent',
    br: '$1',
    border: '1px solid transparent',
    padding: '0.2rem 04rem',

    '&:isSelected'
})
  
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
      <div className="items">
        {props.items.map((item, index) => (
          <button
            className={`item ${index === selectedIndex ? 'is-selected' : ''}`}
            key={index}
            onClick={() => selectItem(index)}
          >
            {item}
          </button>
        ))}
      </div>
    )
  })