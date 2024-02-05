import React from 'react'
import UserTable from './UserTable'

const page = () => {

  return (
    <div>
      <h1> This is User page</h1>
      <p>{new Date().toLocaleTimeString()}</p>
      <UserTable/>
    </div>
  )
}

export default page

// localhost:3000/users
