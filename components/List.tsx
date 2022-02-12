import React from "react"
import ListItem from "./ListItem"

const List = ({
  todoItems,
  setTodoItem,
  filteredList,
  setFilteredList,
  paginateTodoItems,
  paginateFilteredList,
}) => {
  //this checks the todoItems array & the filtered array for the selected ID & filters (deletes) it.
  const deleteTodo = (f: {title?: string; id?: number}) => {
    const filter = todoItems?.filter((ids: {id: number}) => f.id !== ids.id)
    setTodoItem(filter)
    const deleteFromSearch = filteredList?.filter(
      (ids: {id: number}) => f?.id !== ids?.id
    )
    setFilteredList(deleteFromSearch)
  }
  //this is a loop that checks for the selected ID and mutates the object by flipping the completed boolean onClick.
  const strikeTodo = (f: {
    title?: string
    id?: number
    completed?: boolean
  }) => {
    for (const obj of todoItems) {
      if (obj?.id === f?.id) {
        obj.completed = !obj.completed
        break
      }
    }
    setTodoItem([...todoItems])
  }
  return (
    <div>
      {filteredList?.length < 1
        ? paginateTodoItems?.map(
            (
              e: {id?: number; title?: string; completed?: boolean},
              i: number
            ) => {
              return (
                <div key={i}>
                  <ListItem
                    e={e}
                    deleteTodo={deleteTodo}
                    strikeTodo={strikeTodo}
                  />
                </div>
              )
            }
          )
        : paginateFilteredList.map(
            (
              e: {id?: number; title?: string; completed?: boolean},
              i: number
            ) => (
              <div key={i}>
                <ListItem
                  e={e}
                  deleteTodo={deleteTodo}
                  strikeTodo={strikeTodo}
                />
              </div>
            )
          )}
    </div>
  )
}

export default List
