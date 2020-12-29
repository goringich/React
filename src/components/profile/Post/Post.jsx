import s from "./Post.module.css"

const Post = (props) => {
  return(
    <div className={s.post__item}>
      <img src={props.img} alt="2"/>
      {props.message}
      <div className={s.statistics}>
        <div className={s.likes}>
          <i className="fas fa-heart"></i>
          <div className={s.count}>{props.likesCount}</div>
        </div>
        <div className={s.repost}>
          <i className="fas fa-share"></i>
          <div className={s.count}>{props.repostCount}</div>
        </div>
      </div>
    </div>
  )
}

export default Post;
