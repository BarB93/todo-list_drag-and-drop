import { TodoItem } from '../types/todoTypes'

// a little function to help us with reordering the result
export function reorder(
  list: TodoItem[],
  startIndex: number,
  endIndex: number
): TodoItem[] {
  const result = Array.from(list)
  const [removed] = result.splice(startIndex, 1)
  result.splice(endIndex, 0, removed)

  return result
}

export function sortItems(items: TodoItem[]): TodoItem[] {
  return items.slice().sort((a, b) => {
    if (a.done && !b.done) {
      return 1
    }

    if (!a.done && b.done) {
      return -1
    }

    return 0
  })
}
