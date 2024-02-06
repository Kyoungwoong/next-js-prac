import React from 'react'
import UserTable from './UserTable'

interface Props {
  searchParams: {sortorder: string};
}

const UserPage = ({searchParams: {sortorder}}: Props) => {
  return (
    <div>
      <h1> This is User page</h1>
      <p>{new Date().toLocaleTimeString()}</p>
      <UserTable sortOrder={sortorder}/>
    </div>
  )
}

export default UserPage

// localhost:3000/users
