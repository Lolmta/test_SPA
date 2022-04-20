import React from 'react'
import style from './UserCard.module.css'

const UserCard = (props) => {

  let user = props.user;

  return (
    <div className={style.card}>



      <div className={style.info}>
        <div>
          <img className={style.card_img}
            src={user.picture.large} alt={user.email} />
        </div>
        <div className={style.card_body}>
          <h2 className={style.name}>
            {user.name.title}
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
      <button className={style.btn}>Edit</button>
    </div>
  )
}

export default UserCard