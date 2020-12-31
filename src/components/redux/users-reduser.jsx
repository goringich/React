const FOLLOW = true
const UNFOLLOW = false
const SET_USERS = "SET_USERS"

let initialState = {
    users: [

    ]
}

const usersReduser = (state = initialState, action) => {
    switch (action.type){
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userID){
                        return {...u, followed: true}
                    }
                    return u
                 })
            }

        case UNFOLLOW: 
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userID){
                        return {...u, followed: false}
                    }
                    return u
                })
            }

        case SET_USERS: {
            return {
                ...state,
                users: [...state.users, ...action.users]
            }
        }

        default: 
            return state
    }
}

export const followActionCreator = (userID) => ({type: FOLLOW, userID})
export const unFollowActionCreator = (userID) => ({type: UNFOLLOW, userID})
export const setUsersActionCreator = (users) => ({type: SET_USERS, users})
export default usersReduser
