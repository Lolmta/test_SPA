import React from 'react'
import { useSelector } from 'react-redux'
import style from './SerchInput.module.css'
import { useDispatch } from 'react-redux'
import { serchByName } from '../../../../redux/user-reducer'
import { useState } from 'react'


export const SerchInput = () => {

    const dispatch = useDispatch()
    const users = useSelector(state => state.mainPage.users)

    const [serchName, setSerchName] = useState('')
   
    const handleSearch = () => {
        const userSerchByName = users.filter(el => el.name.first === serchName || el.name.last === serchName)
        dispatch(serchByName(userSerchByName))
    }

    return (
        <input className={style.serch}
            type='text' placeholder="Search by name"
            value={serchName}
            onChange={(e) => setSerchName(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
        />
    )
}
