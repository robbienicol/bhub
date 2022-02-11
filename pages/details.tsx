import Link from "next/link"
import {useRouter} from "next/router"
import React from "react"

const Details = () => {
  const router = useRouter()
  console.log(router.query)

  return (
    <div className="flex items-center justify-center min-h-screen from-blue-100 via-blue-300 to-blue-500 bg-gradient-to-br">
      <div className="h-100 w-full flex items-center justify-center bg-teal-lightest font-sans">
        <div className="bg-white rounded shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-lg">
          <Link href="/">
            <a className="cursor-pointer text-blue-300">Back to List</a>
          </Link>
          <div className="mb-4">
            <h2 className="text-lg text-grey-darkest text-center">Details</h2>
            <p className="text-left "> ID: {router.query.id}</p>
            <p className="text-left"> Title: {router.query.title}</p>
            <p className="text-left"> Completed: {router.query.completed}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Details
