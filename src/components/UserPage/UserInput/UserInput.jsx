import React from 'react'

export const UserInput = (props) => {
  return (
    <div>
        <input type="text" value={props.value} />
        <button onClick={props.func}></button>
    </div>
  )
}
