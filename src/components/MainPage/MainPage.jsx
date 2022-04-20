import React from 'react'
import List from './ListUsers.jsx/List'
import style from './MainPage.module.css'



const MainPage = () => {

  return (
    <div className={style.main}>
      <List/>
    </div>
  )
}

export default MainPage