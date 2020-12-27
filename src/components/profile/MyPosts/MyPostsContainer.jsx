import MyPosts from "./MyPosts"
import { sendPostActionCreator } from "../../redux/profile-reduser"
import { connect } from "react-redux"

let mapDispatchToProps = (dispatch) => {
  return{
    addPost: (text) => {
      let action = sendPostActionCreator(text)
      dispatch(action)
    }
  }
}

// let mapStateToProps = () => {
//   return{
//     addSendPost: mapDispatchToProps.addPost()
//   }
// }

const MyPostsContainer = connect( mapDispatchToProps )(MyPosts)
export default MyPostsContainer
