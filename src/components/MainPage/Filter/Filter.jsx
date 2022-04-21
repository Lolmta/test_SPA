import React from 'react'
import { setGender, serchByName } from '../../../redux/user-reducer'
import { useDispatch } from 'react-redux'
import style from './Filter.module.css'
import { useSelector } from 'react-redux'

import { AgeSlider } from './AgeSlider/AgeSlider';
import { SerchInput } from './SerchInput/SerchInput'
import SelectSerch from './SelectSerch/SelectSerch'

const Filter = () => {

    const dispatch = useDispatch()
    
    const setMale = () => dispatch(setGender('male'))
    const setFemale = () => dispatch(setGender('female'))



    return (
        <div>
            <h1>Filter</h1>
            <div className={style.main}>
                <SerchInput />
                <AgeSlider />
                <div>
                    <button className={style.btn} onClick={setMale}>Male</button>
                    <button className={style.btn} onClick={setFemale}>Female</button>
                </div>
                <SelectSerch />
            </div>


        </div>
    )
}

export default Filter