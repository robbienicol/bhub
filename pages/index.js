import React from "react"
import List from "../components/List.tsx"
import axios from "axios"
import TodoInputs from "../components/TodoInputs.tsx"
import LoadMore from "../components/LoadMore.tsx"

export default function Home() {
  const [filteredList, setFilteredList] = React.useState([])
  const [todoItem, setTodoItem] = React.useState([])
  const [loadMore, setLoadMore] = React.useState(10)
  const paginate = todoItem.slice(0, loadMore)
  const paginateFiltered = filteredList.slice(0, loadMore)

  React.useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos/")
      .then((res) => {
        setTodoItem(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
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
              todoItem={todoItem}
              setTodoItem={setTodoItem}
            />
          </div>
          <List
            paginateFiltered={paginateFiltered}
            paginate={paginate}
            setFilteredList={setFilteredList}
            filteredList={filteredList}
            setTodoItem={setTodoItem}
            todoItem={todoItem}
          />
          <LoadMore
            loadMore={loadMore}
            setLoadMore={setLoadMore}
            todoItem={todoItem}
          />
        </div>
      </div>
    </div>
  )
}
