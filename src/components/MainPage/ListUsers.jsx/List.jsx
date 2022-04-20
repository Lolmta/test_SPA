import React, { useEffect, useState } from 'react'
 import UserCard from './UserCard/UserCard';
import { useDispatch , useSelector } from 'react-redux';
import { getUsers } from './../../../redux/actions/users';


const List = () => {

  const dispatch = useDispatch()
  const users = useSelector(state => state.mainPage.users)
  const isFetching = useSelector(state => state.mainPage.isFetching)

  useEffect(()=>{
      dispatch(getUsers())
  }, [])
  

  return (
    <div>
     {isFetching === false?users.map(user =><UserCard user={user}/>):<div className="fetching">Loading...</div>}
    </div>
  )
}

export default List