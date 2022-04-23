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
    const dispatch =useDispatch()
    const users = useSelector(state => state.mainPage.users)
    const filtredUsers = useSelector(state => state.mainPage.filtredUsers)

    const [value, setValue] =useState('')
   

    if(value === 'ageUp'){
        const usersSortedByAgeUp = (filtredUsers.length === 0 ? users: filtredUsers).sort(function (a, b) {
            return a.dob.age - b.dob.age
        })
        dispatch(sortByAgeUp(usersSortedByAgeUp, value))
    } 

    if(value === 'ageDown'){
        const usersSortedByAgeDown = (filtredUsers.length === 0 ? users: filtredUsers).sort(function (a, b) {
            return b.dob.age - a.dob.age
        })
        dispatch(sortByAgeDown(usersSortedByAgeDown, value))
    } 
 
    if(value === 'nameABC'){
        let newUsers = (filtredUsers.length === 0 ? users: filtredUsers).sort((a,b) =>  a.name.first > b.name.first ? 1 : -1 )
        dispatch(sortByNameUp(newUsers, value))
    }

    if(value === 'nameCBA'){
        let newUsers = (filtredUsers.length === 0 ? users: filtredUsers).sort((a,b) =>  a.name.first > b.name.first ? -1 : 1 )
        dispatch(sortByNameDown(newUsers, value))
    }

    if(value === 'cityABC'){
        let newUsers =(filtredUsers.length === 0 ? users: filtredUsers).sort((a,b) =>  a.location.city > b.location.city ? 1 : -1 )
        dispatch(sortByCityUp(newUsers, value))
    }

    if(value === 'cityCBA'){
        let newUsers =(filtredUsers.length === 0 ? users: filtredUsers).sort((a,b) =>  a.location.city > b.location.city ? -1 : 1 )
        dispatch(sortByCityDown(newUsers, value))
    }
    
    return (
        <select name="select" className={style.sort} onChange={(e)=>setValue(e.target.value)}>
            <option value="nameABC" selected>Name abc</option>
            <option value="nameCBA" selected>Name cba</option>
            <option value="ageUp" >Sort by age from lowest to highest </option>
            <option value="ageDown" >Sort by age from highest to lowest</option>
            <option value="cityABC">City abc</option>
            <option value="cityCBA">City cba</option>
        </select>
    )
}

export default Select