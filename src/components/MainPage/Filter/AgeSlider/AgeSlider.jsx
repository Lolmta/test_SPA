import React from 'react'

import Nouislider from "nouislider-react";
import './nouislider.css'

import { useSelector ,  useDispatch} from 'react-redux';
import { useState } from 'react';
import { sortByAgeRange } from '../../../../redux/user-reducer';


export const AgeSlider = () => {

    const dispatch = useDispatch()
    
    const [minRange, changeMinRange] = useState(0)
    const [maxRange, changeMaxRange] = useState(25)

    const users = useSelector(state => state.mainPage.users)

    const display = (event) => {
        let newUsers = users.filter((el) => el.dob.age < maxRange && el.dob.age > minRange )
        let  datarange = maxRange - minRange;
        changeMinRange(Number(event[0]));
        changeMaxRange(Number(event[1]));
        dispatch(sortByAgeRange(newUsers, datarange))
    }

    return (
        <div>
            <Nouislider
                range={{ min: 0, max: 50 }}
                start={[minRange, maxRange]}
                step={1} connect
                onChange={display}
            />
            <div>
                <div>{minRange} - {maxRange}</div>
            </div>
        </div>

    )
}
