import React from 'react'
import { Draggable, DraggingStyle, NotDraggingStyle } from 'react-beautiful-dnd'

import TodoItemCard from '../TodoItemCard'
import { TodoItem } from '../../types/todoTypes'

interface Props {
  item: TodoItem;
  index: number;
}

const grid = 24
const getItemStyle = (
  isDragging: boolean,
  draggableStyle: DraggingStyle | NotDraggingStyle | undefined
): React.CSSProperties => ({
  // some basic styles to make the items look a bit nicer
  userSelect: 'none',
  padding: `${grid * 2} px 0`,
  margin: `0 0 ${grid}px 0`,

  // change background colour if dragging
  background: '#fff',
  transition: 'opacity 100ms linear',

  // styles we need to apply on draggables
  ...draggableStyle,
  opacity: isDragging ? 0.5 : 1,
})

const ActiveTodo: React.FC<Props> = ({ item, index }) => {
  return (
    <Draggable key={item.id} draggableId={item.id} index={index}>
      {(provided, snapshot): JSX.Element => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          style={getItemStyle(
            snapshot.isDragging,
            provided.draggableProps.style
          )}
        >
          <TodoItemCard item={item} />
        </div>
      )}
    </Draggable>
  )
}

export default ActiveTodo
