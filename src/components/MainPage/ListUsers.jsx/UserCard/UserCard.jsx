import React from 'react'
import style from './UserCard.module.css'
import { NavLink } from 'react-router-dom';
import { setCurrentUser } from '../../../../redux/current-user-resucer';
import { useDispatch } from 'react-redux';


const UserCard = (props) => {

  let user = props.user;


  // const userItem = useSelector(state => state.userPage.user)
  // console.log(userItem)
  const dispatch = useDispatch()



  return (
    <div className={style.card}>

      <div className={style.info}>
        <div>
          <img className={style.card_img}
            src={user.picture.large} alt={user.email} />
        </div>
        <div className={style.card_body}>
          <h2 className={style.name}>
            {user.name.first}
            {user.name.last}
          </h2>
          <div className={style.dob}>
            {user.dob.date}
          </div>
          <div className={style.adress}>
            {user.location.city}
            STREEET



          </div>
          <div className={style.email}>
            {user.email}
          </div>
        </div>
      </div>


      <NavLink to='/user'>
        <button className={style.btn} onClick={() => dispatch(setCurrentUser(user))}>Edit</button>
      </NavLink>
      
    </div>
  )
}

export default UserCard