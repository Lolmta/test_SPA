import React from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { useState } from 'react'
import { searchByName } from '../../../../redux/user-reducer'
import style from './SearchInput.module.css'

const SearchInput = () => {
    const dispatch = useDispatch()
    const users = useSelector(state => state.mainPage.users)

    const [searchName, setSearchName] = useState('')

    const handleSearch = () => {
        const userSearchByName = users.filter(el => el.name.first === searchName || el.name.last === searchName)
        dispatch(searchByName(userSearchByName))
    }

    return (
        <div>
            <div className={style.text}>Name</div>
            <input className={style.search}
                type='text' placeholder="Search by name"
                value={searchName}
                onChange={(e) => setSearchName(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
            />
        </div>
        )
}

export default SearchInput