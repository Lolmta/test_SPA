import React from 'react'

import Nouislider from "nouislider-react";
import style from './AgeSlider.module.css'
import './nouislider.css'

import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { sortByAgeRange } from '../../../../redux/user-reducer';

export const AgeSlider = () => {

    const users = useSelector(state => state.mainPage.users)
    const filtredUsers = useSelector(state => state.mainPage.filtredUsers)
  
    const dispatch = useDispatch()

    const [minRange, changeMinRange] = useState(0)
    const [maxRange, changeMaxRange] = useState(25)

    useEffect(() => {
        let newU = users.filter(el => el.dob.age > minRange && el.dob.age < maxRange )
        dispatch(sortByAgeRange(newU))
    }, [minRange, maxRange])

    return (
        <div className={style.slider}>
            <Nouislider
                range={{ min: 0, max: 50 }}
                start={[minRange, maxRange]}
                step={1} connect
                onUpdate={(e) => {
                    changeMinRange(Number(e[0]));
                    changeMaxRange(Number(e[1]));
                }}
            />
            <div>
            {filtredUsers.length === 0 ? (<div>No users found in this age category</div>) : false }
                <div>{minRange} - {maxRange}</div>
            </div>
        </div>

    )
}
