import React from "react"

const TodoInputs = ({
  setTodoItem,
  todoItems,
  setFilteredList,
  filteredList,
}) => {
  const [search, setSearch] = React.useState<string>("")
  const [todo, setTodo] = React.useState<string>("")
  //this handles sorting from A to Z
  const sortFromAToZ = () => {
    setTodoItem([...todoItems].sort((a, b) => a.title.localeCompare(b.title)))
    setFilteredList(
      [...filteredList].sort((a, b) => a.title.localeCompare(b.title))
    )
  }
  //this handles sorting from Z to A
  const sortFromZToA = () => {
    setTodoItem([...todoItems].sort((a, b) => b.title.localeCompare(a.title)))
    setFilteredList(
      [...filteredList].sort((a, b) => b.title.localeCompare(a.title))
    )
  }
  const addTodo = () => {
    //this adds a new object to the array
    setTodoItem([
      {title: todo, id: todoItems.length, completed: false},
      ...todoItems,
    ])
  }
  const searchTodos = (searchValue: React.SetStateAction<string>) => {
    setSearch(searchValue)
    //this filters the todoItems and filters the objects that are not similar onChange
    const filtered = todoItems?.filter(
      (item: {[s: string]: unknown} | ArrayLike<unknown>) => {
        return Object.values(item)
          .join("")
          .toLowerCase()
          .includes(search.toLowerCase())
      }
    )
    setFilteredList(filtered)
    searchValue?.length > 0 && filtered?.length === 0
      ? setSearch("No results found !")
      : null
  }

  return (
    <div>
      <button
        onClick={sortFromAToZ}
        className="flex-no-shrink p-2 border-2 rounded text-teal border-teal hover:text-white hover:bg-teal mr-2"
      >
        A-Z
      </button>
      <button
        onClick={sortFromZToA}
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
          onChange={(e) => searchTodos(e.target.value)}
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
          Clear
        </button>
      </div>
    </div>
  )
}

export default TodoInputs
