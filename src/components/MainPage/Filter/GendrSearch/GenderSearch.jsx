import React from 'react'
import { useDispatch, useSelector} from 'react-redux'
import { setGender } from '../../../../redux/user-reducer'
import style from './GenderSearch.module.css'

const GenderSearch = () => {
    const dispatch = useDispatch()
    const setMale = () => dispatch(setGender('male'))
    const setFemale = () => dispatch(setGender('female'))
    const gender = useSelector(store => store.mainPage.gender)

    return (
        <div className={style.main}>
            <button className={gender === 'male' ?
            [style.btn, style.active].join(' ') : style.btn } 
            onClick={setMale}>Male</button>
            <button className={gender === 'female' ?
            [style.btn, style.active].join(' ') : style.btn } 
            onClick={setFemale}>Female</button>
        </div>
    )
}

export default GenderSearch