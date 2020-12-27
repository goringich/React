import s from "./Person.module.css"

const Person = (props) => {
    return(
        <div className={s.person}>
          <img src={props.avatar} alt=""/>
          <div className={s.person__info}>
            <div className={s.person__name}>{props.name}</div>
            <div>Date of Birth: {props.birthday}</div>
            <div>City: {props.city}</div>
            <div>Education: {props.Education}</div>
            <div>Web Site: {props.site}</div>
          </div>
        </div>
    )
}

export default Person;
