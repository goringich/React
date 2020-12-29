import './App.css'
import Header from "./components/header/Header"
import Navbar from "./components/navbar/Navbar"
// import Profile from "./components/profile/Profile"
import DialogsContainer from "./components/dialogs/DialogsContainer"
import News from "./components/news/News"
import Music from "./components/music/Music"
import {Route} from "react-router-dom"
import Posts from './components/profile/ProfileContainer'

function App() {
  return (
      <div className="app-wrapper">
        <Header/>
        <main>
          <Navbar/>
          <div className="app-wrapper-content">
            <Route path="/profile" render={() => <Posts/>}/>
            <Route path="/dialogs" render={() => <DialogsContainer/>}/>
            <Route path="/news" render={() => <News />}/>
            <Route path="/music" render={() => <Music />}/>
          </div>
        </main>
      </div>
  );
}

export default App;
