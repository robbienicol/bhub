import Link from "next/link"
import React from "react"

const List = ({todoItem, setTodoItem, filteredList, setFilteredList}: any) => {
  const [loadMore, setLoadMore] = React.useState(10)
  const [selectedData, setSelectedData] = React.useState()
  const DelTodo = (f: {title?: string; id?: number}) => {
    const filtered = todoItem.filter((ids: any) => f.id !== ids.id)
    setTodoItem(filtered)
    const delFromSearch = filteredList.filter((ids: any) => f.id !== ids.id)
    setFilteredList(delFromSearch)
  }
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
  const paginate = todoItem.slice(0, loadMore)
  return (
    <div>
      {filteredList.length <= 1
        ? paginate.map((e: any, i: number) => {
            return (
              <div key={i}>
                <div className="flex mb-4 items-center">
                  <Link
                    href={{
                      pathname: "/details",
                      query: {
                        id: e.id,
                        title: e.title,
                        completed: e.completed,
                      },
                    }}
                  >
                    <a
                      className={`${
                        e.completed && `line-through`
                      } w-full text-grey-darkest cursor-pointer`}
                    >
                      {e.title}
                    </a>
                  </Link>
                  <button
                    onClick={() => StrikeTodo(e)}
                    className="flex-no-shrink p-2 ml-4 mr-2 border-2 rounded hover:text-white text-green-500 border-green-500 hover:bg-green-100"
                  >
                    Done
                  </button>
                  <button
                    onClick={() => DelTodo(e)}
                    className="flex-no-shrink p-2 ml-2 border-2 rounded text-red-500 border-red-500 hover:text-white hover:bg-red-100"
                  >
                    Remove
                  </button>
                </div>
              </div>
            )
          })
        : filteredList.map((e: any, i: number) => (
            <div key={i}>
              <div className="flex mb-4 items-center">
                <Link
                  href={{
                    pathname: "/details",
                    query: {
                      id: e.id,
                      title: e.title,
                      completed: e.completed,
                    },
                  }}
                >
                  <a
                    className={`${
                      e.completed && `line-through`
                    } w-full text-grey-darkest cursor-pointer`}
                  >
                    {e.title}
                  </a>
                </Link>
                <button
                  onClick={() => StrikeTodo(e)}
                  className="flex-no-shrink p-2 ml-4 mr-2 border-2 rounded hover:text-white text-green-500 border-green-500 hover:bg-green-100"
                >
                  Done
                </button>
                <button
                  onClick={() => DelTodo(e)}
                  className="flex-no-shrink p-2 ml-2 border-2 rounded text-red-500 border-red-500 hover:text-white hover:bg-red-100"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
      <div className="flex items-center justify-center">
        <button
          className="flex-no-shrink flex  p-2  border-2 rounded hover:text-white text-blue-500 border-blue-500 hover:bg-blue-100"
          onClick={() => setLoadMore(loadMore + 10)}
        >
          LoadMore
        </button>
      </div>
    </div>
  )
}

export default List
