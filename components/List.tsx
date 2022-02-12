import Link from "next/link"
import React from "react"
import ListItem from "./ListItem"

const List = ({
  todoItem,
  setTodoItem,
  filteredList,
  setFilteredList,
  paginate,
  paginateFiltered,
}) => {
  //this checks the todoItem array & the filtered array for the selected ID & filters (deletes) it.
  const DelTodo = (f: {title?: string; id?: number}) => {
    const filtered = todoItem.filter((ids: {id: number}) => f.id !== ids.id)
    setTodoItem(filtered)
    const delFromSearch = filteredList.filter(
      (ids: {id: number}) => f.id !== ids.id
    )
    setFilteredList(delFromSearch)
  }
  //this is a loop that checks for the selected ID and mutates the object by flipping the completed boolean onClick.
  const StrikeTodo = (f: {
    title?: string
    id?: number
    completed?: boolean
  }) => {
    for (const obj of todoItem) {
      if (obj.id === f.id) {
        obj.completed = !obj.completed
        break
      }
    }
    setTodoItem([...todoItem])
  }
  return (
    <div>
      {filteredList.length < 1
        ? paginate.map(
            (
              e: {id: number; title: string; completed?: boolean},
              i: number
            ) => {
              return (
                <div key={i}>
                  <ListItem e={e} DelTodo={DelTodo} StrikeTodo={StrikeTodo} />
                </div>
              )
            }
          )
        : paginateFiltered.map(
            (
              e: {id: number; title: string; completed?: boolean},
              i: number
            ) => (
              <div key={i}>
                <ListItem e={e} DelTodo={DelTodo} StrikeTodo={StrikeTodo} />
              </div>
            )
          )}
    </div>
  )
}

export default List
