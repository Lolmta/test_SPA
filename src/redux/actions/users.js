import axios from "axios";
import { setIsFetching, setUsers } from './../user-reducer';

export const getUsers = (page = 1 , userPerPage = 10 , gender = 'male'  ) => {
    return async (dispatch) => {
        dispatch(setIsFetching(true))
        const response = await axios.get(`https://randomuser.me/api/?page=${page}&results=${userPerPage}&gender=${gender}`)
        dispatch(setUsers(response.data))
    }
}

//&gender=female