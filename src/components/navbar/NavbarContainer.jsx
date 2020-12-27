import { connect } from "react-redux"
import Navbar from "./Navbar"
// import Friends from "./friendsNavbar/friendsNavbar"
debugger

let mapStateToProps = (state) => {
    return { friends: state.sidebarFriends.friends }
}

// let friends = (props) => {
//     props.mapStateToProps.friends.map( f => <Friends name={f.name} img={f.img}/>)
//   }

const NavbarContainer = connect(mapStateToProps)(Navbar)
export default NavbarContainer
