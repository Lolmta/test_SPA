import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import style from './UserPage.module.css'

const UserPage = () => {
    const navigate = useNavigate();

    const user = useSelector(state => state.userPage.user)
    console.log(user)



    return (
        <div>UserPage

            <button onClick={() => navigate('/')}>back</button>

            <div className={style.info}>
                <img className={style.card_img}
                    src={user.picture.large} alt={user.email} />
                <h2 className={style.name}>
                    {user.name.first}
                    {user.name.last}
                </h2>
                <div className={style.dob}>
                    {user.dob.date}
                </div>
            </div>





            <div className={style.changeable_info}>

                <input type="text" value= {user.name.first } />
                <button >Update</button>

                <input type="text" value={user.email} />
                <button >Update</button>

                <input type="text" value={user.cell} />
                <button >Update</button>

                <input type="text" value={user.location.city} />
                <button >Update</button>

                <input type="text" value={user.location.street.name} />
                <button >Update</button>

                <input type="text" value={user.dob.date} />
                <button >Update</button>

            </div>

        </div>
    )
}

export default UserPage