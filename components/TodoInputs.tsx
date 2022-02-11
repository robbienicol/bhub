import React from "react"

const TodoInputs = ({setTodoItem, todoItem, setFilteredList, filteredList}) => {
  const [search, setSearch] = React.useState<string>("")
  const [todo, setTodo] = React.useState<string>("")
  //this button handles sorting from A to Z
  const AtoZ = () => {
    setTodoItem([...todoItem].sort((a, b) => a.title.localeCompare(b.title)))
    setFilteredList(
      [...filteredList].sort((a, b) => a.title.localeCompare(b.title))
    )
  }
  //this button handles sorting from Z to A
  const ZtoA = () => {
    setTodoItem([...todoItem].sort((a, b) => b.title.localeCompare(a.title)))
    setFilteredList(
      [...filteredList].sort((a, b) => b.title.localeCompare(a.title))
    )
  }
  const addTodo = () => {
    setTodoItem([
      {title: todo, id: todoItem.length, completed: false},
      ...todoItem,
    ])
    setFilteredList([
      {title: todo, id: todoItem.length, completed: false},
      ...filteredList,
    ])
  }
  const searchItems = (searchValue: React.SetStateAction<string>) => {
    setSearch(searchValue)
    const filtered = todoItem.filter(
      (item: {[s: string]: unknown} | ArrayLike<unknown>) => {
        return Object.values(item)
          .join("")
          .toLowerCase()
          .includes(search.toLowerCase())
      }
    )

    setFilteredList(filtered)
  }

  return (
    <div>
      <button
        onClick={AtoZ}
        className="flex-no-shrink p-2 border-2 rounded text-teal border-teal hover:text-white hover:bg-teal mr-2"
      >
        A-Z
      </button>
      <button
        onClick={ZtoA}
        className="flex-no-shrink p-2 border-2 rounded text-teal border-teal hover:text-white hover:bg-teal"
      >
        Z-A
      </button>

      <div className="flex mt-4">
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker"
          placeholder="Add Todo"
          onChange={(e) => setTodo(e.target.value)}
        />
        <button
          onClick={addTodo}
          className="flex-no-shrink p-2 border-2 rounded text-teal border-teal hover:text-white hover:bg-teal"
        >
          Add
        </button>
      </div>
      <div className="flex mt-4">
        <input
          value={search}
          onChange={(e) => searchItems(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker"
          placeholder="Search Todo"
        />
        <button
          onClick={() => {
            setFilteredList([])
            setSearch("")
          }}
          className="flex-no-shrink p-2 border-2 rounded text-teal border-teal hover:text-white hover:bg-teal"
        >
          clear
        </button>
      </div>
    </div>
  )
}

export default TodoInputs
