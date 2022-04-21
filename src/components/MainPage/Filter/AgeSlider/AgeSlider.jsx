import React from 'react'

import Nouislider from "nouislider-react";
import './nouislider.css'

import { useState } from 'react';


export const AgeSlider = () => {

    const [minRange, changeMinRange] = useState(0)
    const [maxRange, changeMaxRange] = useState(25)
    const displayMin = (event) => {
        changeMinRange(Number(event[0]));
    }
    const displayMax = (event) => {
        changeMaxRange(Number(event[1]));
    }

    return (
        <Nouislider
            range={{ min: 0, max: 50 }}
            start={[minRange, maxRange]}
            step={1} connect
            onChange={displayMin}
            onUpdate={displayMax}
        />
    )
}
