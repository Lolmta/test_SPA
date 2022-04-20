const SET_USERS = 'SET_USERS'
const SET_IS_FETCHING = 'SET_IS_FETCHING'

const initialState = {
    users:[],
    isFetching: true,
    page:1,
    usersPerPage:50,
    maxUsers:500
}

const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_USERS:
            return {
                ...state,
                users: action.payload.results,
                isFetching: false
            }
        case SET_IS_FETCHING:
                return {
                    ...state,
                    isFetching: action.payload
                }
        default:
            return state;
    }
}

export let setUsers = (users) => 
({type:SET_USERS, payload:users})

export const setIsFetching = (bool) => ({type:SET_IS_FETCHING, payload:bool})

export default usersReducer;
