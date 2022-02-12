import React from "react"
import List from "../components/List.tsx"
import axios from "axios"
import TodoInputs from "../components/TodoInputs.tsx"
import LoadMoreTodosButton from "../components/LoadMoreTodosButton.tsx"

export default function Home() {
  const [filteredList, setFilteredList] = React.useState([])
  const [todoItems, setTodoItem] = React.useState([])
  const [loadMore, setLoadMore] = React.useState(10)
  const [loading, setLoading] = React.useState(false)
  const paginateTodoItems = todoItems.slice(0, loadMore)
  const paginateFilteredList = filteredList.slice(0, loadMore)

  async function fetchListofTodos() {
    try {
      setLoading(true)
      const todosResponse = await axios.get(
        "https://jsonplaceholder.typicode.com/todos/"
      )
      if (todosResponse) {
        setLoading(false)
        setTodoItem(todosResponse.data)
      }
    } catch (error) {
      alert(error)
    }
  }
  React.useEffect(() => {
    fetchListofTodos()
  }, [])

  return (
    <div className="flex items-center justify-center min-h-screen from-blue-100 via-blue-300 to-blue-500 bg-gradient-to-br">
      <div className="h-100 w-full flex items-center justify-center bg-teal-lightest font-sans">
        <div className="bg-white rounded shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-lg">
          <div className="mb-4">
            <p className="flex items-center justify-center text-2xl	 text-grey-darkest">
              Todo List
            </p>
            <TodoInputs
              filteredList={filteredList}
              setFilteredList={setFilteredList}
              todoItems={todoItems}
              setTodoItem={setTodoItem}
            />
          </div>
          {loading === true ? (
            <p>Loading! </p>
          ) : (
            <List
              paginateFilteredList={paginateFilteredList}
              paginateTodoItems={paginateTodoItems}
              setFilteredList={setFilteredList}
              filteredList={filteredList}
              setTodoItem={setTodoItem}
              todoItems={todoItems}
            />
          )}
          <LoadMoreTodosButton loadMore={loadMore} setLoadMore={setLoadMore} />
        </div>
      </div>
    </div>
  )
}
