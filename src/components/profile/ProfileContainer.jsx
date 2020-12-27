import { connect } from "react-redux"
import Profile from "./Profile"
import Post from "./Post/Post"

let mapStateToProps = (state) => {
    return{
        postStatistics: state.profilePage.postStatistics
    }
}

let arrayPosts = mapStateToProps().postStatistics.map( p => <Post message={p.message} likesCount={p.likesCount} repostCount={p.repostCount} img={p.img} />)
const Posts = connect(mapStateToProps, arrayPosts)(Profile)
export default Posts
