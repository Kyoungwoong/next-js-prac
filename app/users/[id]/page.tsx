import React from 'react'
import { notFound } from 'next/navigation'

interface Props {
    params: { id: number};
}

const UserDetailPage = ({params: {id}}: Props) => {

  if (id > 10) // Not Found 호출
    notFound();

  return (
    <div>
      UserDetailPage{id}
    </div>
  )
}

export default UserDetailPage
