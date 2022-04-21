import React, { useEffect, useState } from 'react'
import UserCard from './UserCard/UserCard';
import { useDispatch , useSelector } from 'react-redux';
import { getUsers } from './../../../redux/actions/users';
import Pagination from './../Pagination/Pagination';
import style from './List.module.css';


const List = () => {

  const dispatch = useDispatch()

  const users = useSelector(state => state.mainPage.users)
  const isFetching = useSelector(state => state.mainPage.isFetching)
  const page = useSelector(state => state.mainPage.page)
  const usersPerPage = useSelector(state => state.mainPage.usersPerPage)
  const gender = useSelector(state => state.mainPage.gender)

  useEffect(()=>{
      dispatch(getUsers(page,usersPerPage,gender))
  }, [page,usersPerPage,gender])

  return (
    <div>
      <h1>List of users</h1>
      {isFetching === false?users.map(user =><UserCard user={user} 
      key = {user.login.salt}/>)
      :<div className={style.loading}>Loading...</div>}
     <Pagination/>
    </div>
  )
}

export default List