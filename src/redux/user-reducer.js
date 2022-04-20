const SET_USERS = 'SET_USERS'
const SET_IS_FETCHING = 'SET_IS_FETCHING'
const CHANGE_PAGE = 'CHANGE_PAGE'
const CHANGE_USERS_PER_PAGE = 'CHANGE_USERS_PER_PAGE'
const SET_GENGER = 'SET_GENGER'
const SERCH_BY_NAME = 'SERCH_BY_NAME'




const initialState = {
    users:[],
    isFetching: true,
    page:1,
    usersPerPage:50,
    maxUsers:500,
    gender:'male',
    name:''
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
        case CHANGE_PAGE:
            return {
                ...state,
                page:action.payload
            }
        case CHANGE_USERS_PER_PAGE:
            return{
                ...state,
                usersPerPage:action.payload
            }
        case SET_GENGER:
            return{
                ...state,
                gender:action.payload
            }
        case SERCH_BY_NAME:
            return{
                ...state,
                name:action.payload
            }
        default:
            return state;
    }
}

export let setUsers = (users) => 
({type:SET_USERS, payload:users})

export const setIsFetching = (bool) => 
({type:SET_IS_FETCHING, payload:bool})

export const changePage = (page) => 
({type:CHANGE_PAGE, payload:page})

export const changeUsersPerPage = (amount) => 
({type:CHANGE_USERS_PER_PAGE, payload:amount})

export const setGender = (gender) =>
({type:SET_GENGER, payload:gender})

export const serchByName = (name) =>
({type:SERCH_BY_NAME, payload:name})



export default usersReducer;
