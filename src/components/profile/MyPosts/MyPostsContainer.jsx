import MyPosts from "./MyPosts"
import { sendPostActionCreator } from "../../redux/profile-reduser"
import { connect } from "react-redux"

let mapDispatchToProps = (dispatch) => {
  return{
    addPost: (postMessage) => {
      let action = sendPostActionCreator(postMessage)
      dispatch(action)
    }
  }
}

const MyPostsContainer = connect( null, mapDispatchToProps )(MyPosts)
export default MyPostsContainer
