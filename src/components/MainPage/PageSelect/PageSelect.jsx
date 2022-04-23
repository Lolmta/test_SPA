import React from 'react'
import style from './PageSelect.module.css'
import { useDispatch } from 'react-redux'
import { changeUsersPerPage } from '../../../redux/user-reducer'

const PageSelect = () => {

    const dispatch = useDispatch()

  return (
        <select
                onChange={(e) =>
                dispatch(changeUsersPerPage(e.target.value))}
                name="select"
                className={style.select}
            >
                <option value="10">10</option>
                <option value='50' selected>50</option>
                <option value="100">100</option>
                <option value='500'>All</option>
            </select>
  )
}

export default PageSelect