import React from 'react'
import { useSelector } from 'react-redux'
import style from './SerchInput.module.css'
import { useDispatch } from 'react-redux'
import { serchByName } from '../../../../redux/user-reducer'

export const SerchInput = () => {

    const dispatch = useDispatch()
    const users = useSelector(state => state.mainPage.users)
    const serchName = useSelector(state => state.mainPage.serchName)
    const userSerchByName = users.filter(el => el.name.first === serchName || el.name.last === serchName)

    return (
        <input className={style.serch}
            type='text' placeholder="Search by name"
            value={serchName}
            onChange={(e) => dispatch(serchByName(e.target.value, userSerchByName))}
        />
    )
}
