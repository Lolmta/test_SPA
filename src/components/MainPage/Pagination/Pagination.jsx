import React from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { changePage, changeUsersPerPage } from '../../../redux/user-reducer'

import style from './Pagination.module.css'

const Pagination = () => {

    const dispatch = useDispatch()

    const pageNumbers = []
    const usersPerPage = useSelector(state => state.mainPage.usersPerPage)
    const maxUsers = useSelector(state => state.mainPage.maxUsers)

    const paginate = number => dispatch(changePage(number))

    for (let i = 1; i < Math.ceil(maxUsers / usersPerPage); i++) {
        pageNumbers.push(i)
    }

    return (
        <div className={style.main}>
            <div className={style.btns}>
                 {
            pageNumbers.map(number => (
                    <div key={number}>
                        <div onClick={() => paginate(number)}>
                            {number}
                        </div>
                    </div>
                ))
            }
            </div>
           
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
        </div>
    )
}

export default Pagination;