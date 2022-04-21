import React from 'react'

import List from './ListUsers.jsx/List'
import Filter from './Filter/Filter';

import style from './MainPage.module.css'

const MainPage = () => {

  return (
    <div className={style.main}>
      <Filter/>
      <List/>
    </div>
  )
}

export default MainPage