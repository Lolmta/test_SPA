import axios from "axios";
import { setIsFetching, setUsers } from './../user-reducer';

export const getUsers = () => {
    return async (dispatch) => {
        dispatch(setIsFetching(true))
        const response = await axios.get(`https://randomuser.me/api/?page=1&results=50`)
        dispatch(setUsers(response.data))
    }
}

