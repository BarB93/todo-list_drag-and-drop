import { useCallback } from 'react'
import classnames from 'classnames'
import { TodoActionTypes, TodoItem } from '../types/todoTypes'
import { useTodoContext } from '../hooks/useTodoContext'

import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardContent from '@material-ui/core/CardContent'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import DeleteIcon from '@material-ui/icons/Delete'

const useTodoItemCardStyles = makeStyles({
  doneRoot: {
    textDecoration: 'line-through',
    color: '#888888',
  },
})

const TodoItemCard = function ({ item }: { item: TodoItem }) {
  const classes = useTodoItemCardStyles()
  const { dispatch } = useTodoContext()

  const handleDelete = useCallback(
    () => dispatch({ type: TodoActionTypes.Delete, data: { id: item.id } }),
    [item.id, dispatch]
  )

  const handleToggleDone = useCallback(
    () =>
      dispatch({
        type: TodoActionTypes.ToggleDone,
        data: { id: item.id },
      }),
    [item.id, dispatch]
  )

  return (
    <Card
      className={classnames({
        [classes.doneRoot]: item.done,
      })}
    >
      <CardHeader
        action={
          <IconButton aria-label='delete' onClick={handleDelete}>
            <DeleteIcon />
          </IconButton>
        }
        title={
          <FormControlLabel
            control={
              <Checkbox
                checked={item.done}
                onChange={handleToggleDone}
                name={`checked-${item.id}`}
                color='primary'
              />
            }
            label={item.title}
          />
        }
      />
      {item.details ? (
        <CardContent>
          <Typography variant='body2' component='p'>
            {item.details}
          </Typography>
        </CardContent>
      ) : null}
    </Card>
  )
}

export default TodoItemCard
