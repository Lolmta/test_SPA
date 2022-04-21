import React from 'react'
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import style from './UserInput.module.css'

export const UserInput = (props) => {

  const dispatch = useDispatch()

  const [text, changeText] = useState('Edit')
  const [inputText, changeInputText] = useState(props.value)

  return (
    <div>
      <input 
        className={style.input}
        type="text"
        placeholder={props.value}
        onChange={(e) => {
          changeText('Update')
          changeInputText(e.target.value)
        }}
      />
      <button
        className={style.btn}
        onClick={() =>{
        dispatch(props.func(inputText))
        changeText('Edit')
      }}>
        {text}
      </button>
    </div>
  )
}
