import s from "./Profile.module.css"
import Person from "./Person/Person"
// import Post from "./Post/Post"
import Posts from "./ProfileContainer"
import MyPostsContainer from "./MyPosts/MyPostsContainer"

const Profile = () => {
  // let posts = props.postStatistics.map( p => <Post message={p.message} likesCount={p.likesCount} repostCount={p.repostCount} img={p.img} />)

  return(
    <div>
      <img className={s.content__photo} src="https://image.freepik.com/free-photo/a-wide-panorama-of-the-beautiful-natural-landscape-with-a-swamp-coniferous-forest-and-sky-green-forest-blue-sky-and-white-fluffy-clouds-at-the-sunny-summer-day_158388-3897.jpg" alt=""/>
      <Person name="Igor.K" site="https://loh228337/index.html" birthday="28 September" city="Nizhny Novgorod" Education='school 187' avatar="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgolBdeaXdt7hZ4G28YiA8shOCg4jkBg08uA&usqp=CAU"/>
      <MyPostsContainer/>
      <Posts/>
    </div>
  )
}

export default Profile;
