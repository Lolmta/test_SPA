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
    console.log(filtredUsers)


    const dispatch = useDispatch()

    const [minRange, changeMinRange] = useState(0)
    const [maxRange, changeMaxRange] = useState(25)

    useEffect(() => {
        let newU = users.filter(el => el.dob.age > minRange && el.dob.age < maxRange)
        dispatch(sortByAgeRange(newU))
    }, [minRange, maxRange])

    return (
        <div className={style.slider}>
            <div>{filtredUsers.length === 0 ?
                (<div className={style.text}>
                    There are no users with this name or age
                </div>) : false}</div>
            <div className={style.text}>Age</div>
            <Nouislider
                range={{ min: 0, max: 50 }}
                start={[minRange, maxRange]}
                step={1} connect
                onUpdate={(e) => {
                    changeMinRange(Number(e[0]));
                    changeMaxRange(Number(e[1]));
                }} />
            <div>
                <div className={style.age}>
                    {minRange + ' - ' + maxRange}
                </div>
            </div>
        </div>

    )
}
