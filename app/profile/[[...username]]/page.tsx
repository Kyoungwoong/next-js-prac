import React from 'react'

interface Props {
    params: {
        username: String[];
    };
}

const ProfilePage = (props: Props) => {
    console.log(props);

  return (
    <div>
      ProfilePage
    </div>
  )
}

export default ProfilePage
