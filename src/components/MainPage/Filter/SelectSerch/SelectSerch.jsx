import React from 'react'
import style from './SelectSerch.module.css'
import { useSelector } from 'react-redux'

const SelectSerch = () => {

    const users = useSelector(state => state.mainPage.users)

    const usersSortedByAgeUp = users.sort(function (a, b) {
        return a.dob.age - b.dob.age
    })

    console.log(usersSortedByAgeUp)

    const usersSortedByAgeDown = users.sort(function (a, b) {
        return b.dob.age - a.dob.age
    })

    



    return (
        <select name="select" className={style.sort} onChange={(e)=>console.log(e.target.value)}>
            <option value="nameABC" selected>Name abc</option>
            <option value="nameCBA" selected>Name cba</option>
            <option value="ageUp" >Sort by age from highest to lowest</option>
            <option value="ageDown" >Sort by age from smallest to largest</option>
            <option value="cyt">City abc</option>
            <option value="value3">City cba</option>
        </select>
    )
}

export default SelectSerch