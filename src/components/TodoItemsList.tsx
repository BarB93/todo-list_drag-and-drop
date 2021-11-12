import React from 'react'
import { DragDropContext, Droppable, DropResult } from 'react-beautiful-dnd'

import DoneTodo from './Todo/DoneTodo'
import ActiveTodo from './Todo/ActiveTodo'
import { useTodoContext } from '../hooks/useTodoContext'

import { TodoActionTypes } from '../types/todoTypes'
import { reorder, sortItems } from '../utils/todoUtils'

import { makeStyles } from '@material-ui/core/styles'

const useTodoItemListStyles = makeStyles({
  root: {
    listStyle: 'none',
    padding: 0,
  },
})

export const TodoItemsList = function () {
  let {
    state: { todos, doneTodos },
    dispatch,
  } = useTodoContext()

  const classes = useTodoItemListStyles()

  const onDragEnd = (result: DropResult): void => {
    if (!result.destination) {
      return
    }
    todos = reorder(todos, result.source.index, result.destination.index)
    todos = sortItems(todos)
    dispatch({
      type: TodoActionTypes.Update,
      data: { todos },
    })
  }

  const getListStyle = (isDraggingOver: boolean): React.CSSProperties => ({
    background: isDraggingOver ? 'rgba(174, 183, 194, 0.07)' : 'transparent',
    transition: 'background-color 200ms linear',
    padding: '20px 0',
    borderRadius: '4px',
  })

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId='todo'>
        {(provided, snapshot): JSX.Element => (
          <ul
            className={classes.root}
            {...provided.droppableProps}
            ref={provided.innerRef}
            style={getListStyle(snapshot.isDraggingOver)}
          >
            {todos.map((item, index) => (
              <ActiveTodo key={item.id} item={item} index={index} />
            ))}
            {provided.placeholder}
            {doneTodos.map((item) => (
              <DoneTodo key={item.id} item={item} />
            ))}
          </ul>
        )}
      </Droppable>
    </DragDropContext>
  )
}
