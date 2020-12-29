import { connect } from "react-redux"
import Profile from "./Profile"

let mapStateToProps = (state) => {
    return{
        postStatistics: state.profilePage.postStatistics
    }
}

const Posts = connect(mapStateToProps)(Profile)
export default Posts
