import { applyMiddleware, combineReducers} from "redux";
import usersReducer from "./user-reducer";
import currentUsersReducer from "./current-user-resucer";
import { legacy_createStore as createStore} from 'redux'
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from 'redux-thunk'

let mainReducer = combineReducers({
    mainPage: usersReducer,
    userPage: currentUsersReducer
})

let store = createStore(mainReducer, composeWithDevTools(applyMiddleware(thunk)))

export default store;