import s from "./MyPosts.module.css"
import React from "react"

const MyPosts = (props) => {
  let newPostElement = React.createRef()

  let sendPost = () => {
    let postMessage = newPostElement.current.value
    props.addPost(postMessage)
    newPostElement.current.value = ""
  }

  return(
    <div className={s.posts}>
      <div className={s.posts__title}>My posts</div>
      <textarea ref={newPostElement} type="text" placeholder="your news..."></textarea>
      <button className={s.btn} onClick={sendPost}>Send</button>
    </div>
  )
}

export default MyPosts;
