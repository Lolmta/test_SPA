import React from 'react'
import List from './ListUsers.jsx/List'
import style from './MainPage.module.css'
import Filter from './Filter/Filter';




const MainPage = () => {

  return (
    <div className={style.main}>
      <Filter/>
      <List/>
     
    </div>
  )
}

export default MainPage