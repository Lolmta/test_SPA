import React from 'react'

const UserCard = (props) => {

  let user = props.user;

  return (
    <div>
      {user.gender}
    </div>
  )
}

export default UserCard