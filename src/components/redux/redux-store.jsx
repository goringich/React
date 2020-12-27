import { combineReducers, createStore } from "redux"
import profileReduser from "./profile-reduser"
import dialogsReduser from "./dialogs-reduser"
import sidebarReduser from "./sidebar-reduser"

let reducers = combineReducers({
    profilePage: profileReduser,
    dialogsPage: dialogsReduser,
    sidebarFriends: sidebarReduser
})

let store = createStore(reducers)
export default store
window.store = store
