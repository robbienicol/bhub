import React from "react"

const LoadMore = ({setLoadMore, loadMore}) => {
  return (
    <div className="flex items-center justify-center">
      {loadMore <= 200 && (
        <button
          className="flex-no-shrink flex  p-2  border-2 rounded hover:text-white text-blue-500 border-blue-500 hover:bg-blue-100"
          onClick={() => setLoadMore(loadMore + 10)}
        >
          LoadMore
        </button>
      )}
    </div>
  )
}

export default LoadMore
