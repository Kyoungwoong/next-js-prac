import React from 'react'

interface User {
  id: number;
  name: string;
}

const page = async () => {

  const res = await fetch("https://jsonplaceholder.typicode.com/users", {
    cache: "no-store",
    // next: {revalidate: 10},
  })
  const users: User[] = await res.json();

  return (
    <div>
      <h1> This is User page</h1>
      <p>{new Date().toLocaleTimeString()}</p>
      <ul>
        {users.map((user) => <li key={user.id}>{user.name}</li>)}
      </ul>
    </div>
  )
}

export default page

// localhost:3000/users
