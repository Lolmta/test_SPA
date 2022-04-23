import React from 'react'
import style from './Filter.module.css'
import { AgeSlider } from './AgeSlider/AgeSlider';
import SearchInput from './SearchInput/SearchInput';
import Select from './Select/Select';
import GenderSearch from './GendrSearch/GenderSearch';

const Filter = () => {
    return (
        <div>
            <h1>Filter</h1>
            <div className={style.main}>
                < SearchInput />
                <AgeSlider />
                <GenderSearch />
                <Select />
            </div>
        </div>
    )
}

export default Filter