import Link from "next/link"
import React from "react"

const ListItem = ({e, StrikeTodo, DelTodo}) => {
  return (
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
  )
}

export default ListItem
