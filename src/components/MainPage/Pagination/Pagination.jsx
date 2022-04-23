import React from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { changePage } from '../../../redux/user-reducer'

import style from './Pagination.module.css'
import PageSelect from './../PageSelect/PageSelect';

const Pagination = () => {

    const dispatch = useDispatch()
    const paginate = number => dispatch(changePage(number))

    const pageNumbers = []
    const usersPerPage = useSelector(state => state.mainPage.usersPerPage)
    const maxUsers = useSelector(state => state.mainPage.maxUsers)
    const currentPage = useSelector(state => state.mainPage.page)
    
    for (let i = 1; i < Math.ceil(maxUsers / usersPerPage); i++) {
        pageNumbers.push(i)
    }

    return (
        <div className={style.main}>
            <div className={style.btns}>
                {
                    pageNumbers.map(number => {
                        if (number === currentPage || number === currentPage + 1) return (
                            <div key={number}
                                className={number === currentPage ?
                                    [style.page, style.active].join(' ') : style.page}>
                                <div
                                    onClick={() => paginate(number)}>
                                    {number}
                                </div>
                            </div>
                        )
                        if (number === currentPage + 2) return (
                            <div key={number}>
                                <div onClick={() => paginate(number)}>
                                    <div className={style.next}>Next page</div>
                                </div>
                            </div>
                        )
                        if (number === currentPage - 1) return (
                            <div key={number}>
                                <div onClick={() => paginate(number)}
                                className={style.prev}>
                                    Previous page
                                </div>
                            </div>
                        )
                    }
                    )
                }
            </div>
            <PageSelect/>
        </div>
    )
}

export default Pagination;