import Link from "next/link"
import React from "react"

const Details = () => {
  return (
    <div className="flex items-center justify-center min-h-screen from-blue-100 via-blue-300 to-blue-500 bg-gradient-to-br">
      <div className="h-100 w-full flex items-center justify-center bg-teal-lightest font-sans">
        <div className="bg-white rounded shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-lg">
          <Link href="/">
            <a className="cursor-pointer text-blue-300">Back to List</a>
          </Link>
          <div className="mb-4">
            <h1 className="text-grey-darkest text-center">Details</h1>
            <p className="text-center"> hey</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Details
