import React from 'react'
import style from './SelectSerch.module.css'
import { useSelector } from 'react-redux'
import { useState } from 'react'
import { 
    sortByAgeUp,
    sortByAgeDown, 
    sortByNameDown, 
    sortByNameUp,
    sortByCityUp,
    sortByCityDown
} from '../../../../redux/user-reducer'
import { useDispatch } from 'react-redux'


const SelectSerch = () => {

   const dispatch =useDispatch()
    const users = useSelector(state => state.mainPage.users)
    const [value, setValue] =useState('')
    console.log(value)

    if(value === 'ageUp'){
        const usersSortedByAgeUp = users.sort(function (a, b) {
            return a.dob.age - b.dob.age
        })
        dispatch(sortByAgeUp(usersSortedByAgeUp, value))
    } 

    if(value === 'ageDown'){
        const usersSortedByAgeDown = users.sort(function (a, b) {
            return b.dob.age - a.dob.age
        })
        dispatch(sortByAgeDown(usersSortedByAgeDown, value))
    } 
 
    if(value === 'nameABC'){
        let newUsers = users.sort((a,b) =>  a.name.first > b.name.first ? 1 : -1 )
        dispatch(sortByNameUp(newUsers, value))
    }

    if(value === 'nameCBA'){
        let newUsers = users.sort((a,b) =>  a.name.first > b.name.first ? -1 : 1 )
        dispatch(sortByNameDown(newUsers, value))
    }

    if(value === 'cityABC'){
        let newUsers = users.sort((a,b) =>  a.location.city > b.location.city ? 1 : -1 )
        dispatch(sortByCityUp(newUsers, value))
    }

    if(value === 'cityCBA'){
        let newUsers = users.sort((a,b) =>  a.location.city > b.location.city ? -1 : 1 )
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

export default SelectSerch