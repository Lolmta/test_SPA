const SET_CURRENT_USER = 'SET_CURRENT_USER'
const UPDATE_NAME = 'UPDATE_NAME'
const UPDATE_EMAIL = 'UPDATE_EMAIL'
const UPDATE_PHONE = 'UPDATE_PHONE'
const UPDATE_CITY = 'UPDATE_CITY'
const UPDATE_ADDRESS = 'UPDATE_ADDRESS'
const UPDATE_DOB = 'UPDATE_DOB'
const DELETE_USER = 'DELETE_USER'

const initialState = {
        username:'',
        email:'',
        phone:'',
        address:'',
        city:'',
        dob:'',
        img:'',
        userExist:true
}

const currentUsersReducer = (state = initialState, action) => {
    switch(action.type){
        case SET_CURRENT_USER:
            return{
                ...state,
                username:action.username,
                email:action.email,
                phone:action.phone,
                address:action.address,
                city:action.city,
                dob:action.dob,
                img:action.img,
                userExist:true
            }
        case UPDATE_NAME:
            return{
                ...state,
                username: action.payload
            }
        case UPDATE_EMAIL:
            return{
                ...state,
                email: action.payload
            }
        case UPDATE_PHONE:
            return{
                ...state,
                phone: action.payload
            }
        case UPDATE_CITY:
            return{
                ...state,
                city: action.payload
            }
        case UPDATE_ADDRESS:
            return{
                ...state,
                address: action.payload
            }
        case UPDATE_DOB:
            return{
                ...state,
                dob: action.payload
            }
        case DELETE_USER:
            return{
                ...state,
                username:'',
                email:'',
                phone:'',
                address:'',
                city:'',
                dob:'',
                img:'',
                userExist:false
            }
        default:
            return state;
    }
}


export let setCurrentUser = 
(username, email, phone, adress, city, dob,img) => 
({type:SET_CURRENT_USER, username:username,
email:email,phone:phone,address:adress,
city:city,dob:dob,img:img})

export let updateName = (name) => 
({type:UPDATE_NAME, payload:name})

export let updateEmail = (email) => 
({type:UPDATE_EMAIL, payload:email})

export let updatePhone = (phone) => 
({type:UPDATE_PHONE, payload:phone})

export let updateCity = (city) => 
({type:UPDATE_CITY, payload:city})

export let updateAddress = (address) => 
({type:UPDATE_ADDRESS, payload:address})

export let updateDOB = (dob) => 
({type:UPDATE_DOB, payload:dob})

export let deleteUser = () => 
({type:DELETE_USER})

export default currentUsersReducer