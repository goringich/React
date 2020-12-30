import { connect } from "react-redux"
import { followActionCreator, unFollowActionCreator, setPeoplesActionCreator } from "../redux/users-reduser"
import Users from "./Users"
import People from "./peoples/People"

let mapStateToProps = (state) => {
    return { users: state.usersPage.users }
}

let mapDispatchToProps = (dispatch) => {
    return { 
        follow: (userID) => {
            dispatch(followActionCreator(userID))
        },
        unfollow: (userID) => {
            dispatch(unFollowActionCreator(userID))
        },
        setfollow: (users) => {
            dispatch(setPeoplesActionCreator(users))
        }
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users, People)
export default UsersContainer
