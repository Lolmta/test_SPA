import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { UserInput } from './UserInput/UserInput';

import style from './UserPage.module.css'

import {
    updateName,
    updateEmail,
    updatePhone,
    updateCity,
    updateAddress,
    updateDOB,
    deleteUser
} from '../../redux/current-user-resucer';

const UserPage = () => {

    const user = useSelector(state => state.userPage)
    const userExist = useSelector(state => state.userPage.userExist)
    console.log(user)

    const navigate = useNavigate();
    const dispatch = useDispatch()

    return (
        <div className={style.main}>
            <div>
            <button onClick={() => navigate('/')}
            className={[style.btn,style.back].join(' ')}>
            Back</button>
            {userExist === true ? (
                <div className={style.content}>
                    <div className={style.img_card}>
                        <div className={style.info}>
                            <img className={style.card_img}
                                src={user.img} alt={user.email} />
                            <h2 className={style.name}>
                                {user.username}
                            </h2>
                            <div className={style.dob}>
                                {user.dob}
                            </div>
                        </div>
                        <button onClick={() => dispatch(deleteUser())}
                        className={[style.btn,style.del].join(' ')}>
                        Delete</button>
                    </div>
                    <div className={style.changeable_info}>
                        <UserInput value={user.username} func={updateName} />
                        <UserInput value={user.email} func={updateEmail} />
                        <UserInput value={user.phone} func={updatePhone} />
                        <UserInput value={user.city} func={updateCity} />
                        <UserInput value={user.address} func={updateAddress} />
                        <UserInput value={user.dob} func={updateDOB} />
                    </div>
                </div>
            ) : <div>
                    <h3>User has been deleted</h3>
                </div>}
            </div>
        </div>
    )
}

export default UserPage