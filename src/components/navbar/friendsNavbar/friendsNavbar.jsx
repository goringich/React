import s from "./friendsNavbar.module.css"
import { NavLink } from 'react-router-dom';

const Friends = (props) => {
    return(
        <NavLink to="/dialogs">
            <div className={s.inner__item}>
                <img src={props.img} alt=""/>
                <div className={s.name}>{props.name}</div>  
            </div>
        </NavLink>
    )
}

export default Friends
