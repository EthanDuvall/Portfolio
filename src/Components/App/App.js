import Home from "../Home/Home";
import About from "../About/About";
import Projects from "../Projects/Projects";
import linkedIn from "../../Util/free-linkedin-logo-icon-download-in-svg-png-gif-file-formats--social-media-pack-logos-icons-721962.webp"
import gitHub from "../../Util/GitHub_Invertocat_Logo.svg"
import insta from "../../Util/Instagram-Icon.png"
import resume from "../../Util/text70.svg"
import {Link, NavLink, Route, Routes} from 'react-router-dom'
import './App.scss'


function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h1>ED</h1>
        <div className="navBar">
          <NavLink to = "/">Home</NavLink>
          <NavLink to = "/About">About</NavLink>
          <NavLink to ="/Projects">Projects</NavLink>
          <NavLink to ="/Contact">Conact</NavLink>
        </div>
        <div className="socials">
          <Link to = "https://www.linkedin.com/in/eaduvall/"><img alt="LinkedIn" src = {linkedIn} /></Link>
          <Link to = "https://github.com/EthanDuvall" ><img alt="GitHub" src ={gitHub}/></Link>
          <Link to = "https://www.instagram.com/eaduval/"><img alt="Instagram" src = {insta}/></Link>
          <img alt="Resume" src = {resume} />
        </div>
      </header>
        <Routes>
          <Route path="/" element = {<Home/>}/>
          <Route path = "/About"  element = {<About/>}/>
        </Routes>
    </div>
  );
}

export default App;
