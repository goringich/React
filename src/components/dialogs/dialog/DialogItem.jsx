import s from "./DialogItem.module.css";
import { NavLink } from "react-router-dom";

const DialogItem = (props) => {
  let path = "" + props.id

  return (
    <li className={s.people}>
      <NavLink to={path} activeClassName={s.active__link}>
        <b>
          {props.name}
          <img src={props.photo} alt="" />
        </b>
      </NavLink>
    </li>
  );
};

export default DialogItem;
