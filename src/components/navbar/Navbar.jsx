import s from './Navbar.module.css';
import s1 from "./friendsNavbar/friendsNavbar.module.css"
import { NavLink } from 'react-router-dom';
import Friends from "./friendsNavbar/friendsNavbar"

const Navbar = (props) => {
    let friends = props.friends.map( f => <Friends name={f.name} img={f.img}/>)

  return(
    <nav className={s.nav}>
      <div className={s.item} >
        <NavLink to="/profile" activeClassName={s.active__link}>Profile</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/dialogs" activeClassName={s.active__link}>Message</NavLink>
      </div>
      <div className={s.item}> 
        <NavLink to="/news" activeClassName={s.active__link}>News</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/music" activeClassName={s.active__link}>Music</NavLink>
      </div>
      <div className={`${s.item} ${s.last}`}>
        <NavLink to="/settings" activeClassName={s.active__link}>Settings</NavLink>
      </div>
      <div className={`${s.item} ${s.last1}`}>
        <div className={s1.text}>Friends</div>
        <div className={s1.inner}> 
          {friends}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
