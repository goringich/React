import s from "./Message.module.css"

const Message = (props) => {
    return(
        <div className={s.message} id={props.id}>
            <div className={s.person}>
                <img src={props.photo} alt=""/>
                <div className={s.name}>{props.name}</div>
            </div>
            <div className={s.text}>{props.message}</div>
        </div>
    )
}

export default Message
