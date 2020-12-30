import s from "./friendsNavbar.module.css"
import { NavLink } from 'react-router-dom';

const Friends = (props) => {
    return(
        <div className={s.inner}>
            <NavLink to="/users">
                <div className={s.item}>
                    <img src={props.img} alt=""/>
                    <div className={s.name}>{props.name}</div>  
                </div>
            </NavLink>
        </div>
    )
}

export default Friends
