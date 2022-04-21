import React from 'react'
import { setGender , serchByName } from '../../../redux/user-reducer'
import { useDispatch } from 'react-redux'
import style from './Filter.module.css'
import { useSelector } from 'react-redux'

const Filter = () => {

    const dispatch = useDispatch()

    const setMale = () => dispatch(setGender('male'))
    const setFemale = () => dispatch(setGender('female'))

    const name = useSelector(state => state.mainPage.serchName)

   console.log(name)

    return (
        <div>
            <h1>Filter</h1>
            <div className={style.main}>
            <div>
                <input className={style.serch}
                type='text' placeholder="Search by name"
                value={name}
                onChange={(e) =>  dispatch(serchByName(e.target.value))}
                />
            </div>

            <div>
                <button className={style.btn} onClick={setMale}>Male</button>
                <button className={style.btn} onClick={setFemale}>Female</button>
            </div>

            <div><input type="range" /></div>

            <div>
                <select name="select" className={style.sort}>
                    <option value="value1" selected>Name</option>
                    <option value="value2" >Date of birth</option>
                    <option value="value3">City</option>
                    <option value="value3">Custom sort</option>
                </select>
            </div>
            </div>
            

        </div>
    )
}

export default Filter