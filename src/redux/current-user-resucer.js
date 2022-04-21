const SET_CURRENT_USER = 'SET_CURRENT_USER'

const initialState = {
        user:{}
}


const currentUsersReducer = (state = initialState, action) => {
    switch(action.type){
        case SET_CURRENT_USER:
            return{
                ...state,
                user: action.payload
            }
        default:
            return state;
    }
}


export let setCurrentUser = (user) => 
({type:SET_CURRENT_USER, payload:user})

export default currentUsersReducer