import './App.css'
import Header from "./components/header/Header"
import NavbarContainer from "./components/navbar/NavbarContainer"
import DialogsContainer from "./components/dialogs/DialogsContainer"
import UsersContainer from "./components/users/UsersContainer"
import Music from "./components/music/Music"
import Posts from './components/profile/ProfileContainer'
import {Route} from "react-router-dom"

function App() {
  return (
      <div className="app-wrapper">
        <Header/>
        <main>
          <NavbarContainer/>
          <div className="app-wrapper-content">
            <Route path="/profile" render={() => <Posts/>}/>
            <Route path="/dialogs" render={() => <DialogsContainer/>}/>
            <Route path="/users" render={() => <UsersContainer />}/>
            <Route path="/music" render={() => <Music />}/>
          </div>
        </main>
      </div>
  );
}

export default App;
