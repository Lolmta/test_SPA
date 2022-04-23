import React from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { useState } from 'react'
import {
    sortByAgeUp,
    sortByAgeDown,
    sortByCityUp,
    sortByCityDown,
    sortByNameUp,
    sortByNameDown
} from '../../../../redux/user-reducer'
import style from './Select.module.css'

const Select = () => {
    const dispatch = useDispatch()
    const users = useSelector(state => state.mainPage.users)
    const filtredUsers = useSelector(state => state.mainPage.filtredUsers)

    const [value, setValue] = useState('')

    let whoNeedToSort = filtredUsers.length === 0 ? users : filtredUsers;
    let newUsers = []

    if (value === 'ageUp') {
        newUsers = (whoNeedToSort).sort((a, b) => a.dob.age - b.dob.age)
        dispatch(sortByAgeUp(newUsers, value))
    }

    if (value === 'ageDown') {
        newUsers = (whoNeedToSort).sort((a, b) => b.dob.age - a.dob.age)
        dispatch(sortByAgeDown(newUsers, value))
    }

    if (value === 'nameABC') {
        newUsers = (whoNeedToSort).sort((a, b) => a.name.first > b.name.first ? 1 : -1)
        dispatch(sortByNameUp(newUsers, value))
    }

    if (value === 'nameCBA') {
        newUsers = (whoNeedToSort).sort((a, b) => a.name.first > b.name.first ? -1 : 1)
        dispatch(sortByNameDown(newUsers, value))
    }

    if (value === 'cityABC') {
        newUsers = (whoNeedToSort).sort((a, b) => a.location.city > b.location.city ? 1 : -1)
        dispatch(sortByCityUp(newUsers, value))
    }

    if (value === 'cityCBA') {
        newUsers = (whoNeedToSort).sort((a, b) => a.location.city > b.location.city ? -1 : 1)
        dispatch(sortByCityDown(newUsers, value))
    }

    return (
        <div>
            <div className={style.text}>Sort by</div>
            <select name="select" className={style.sort}
                defaultValue={'DEFAULT'}
                onChange={(e) => setValue(e.target.value)}>
                <option value="DEFAULT" disabled>Name</option>
                <option value="nameABC" >Name abc</option>
                <option value="nameCBA" >Name cba</option>
                <option value="ageUp" >Sort by age from lowest to highest </option>
                <option value="ageDown" >Sort by age from highest to lowest</option>
                <option value="cityABC">City abc</option>
                <option value="cityCBA">City cba</option>
            </select>
        </div>

    )
}

export default Select