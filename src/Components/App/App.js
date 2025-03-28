import Home from "../Home/Home";
import About from "../About/About";
import Contact from "../Conact/Contact";
import Projects from "../Projects/Projects";
import linkedIn from "../../Util/free-linkedin-logo-icon-download-in-svg-png-gif-file-formats--social-media-pack-logos-icons-721962.webp"
import gitHub from "../../Util/GitHub_Invertocat_Logo.svg"
import insta from "../../Util/Instagram-Icon.png"
import resume from "../../Util/text70.svg"
import {Link, NavLink, Route, Routes} from 'react-router-dom'
import './app.scss'


function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h1>ED</h1>
        <div className="navBar">
          <NavLink to = "/">Home</NavLink>
          <NavLink to = "/About">About</NavLink>
          <NavLink to ="/Projects">Projects</NavLink>
          <NavLink to ="/Contact">Contact</NavLink>
        </div>
        <div className="socials">
          <Link to = "https://www.linkedin.com/in/eaduvall/"><img alt="LinkedIn" src = {linkedIn} /></Link>
          <Link to = "https://github.com/EthanDuvall" ><img alt="GitHub" src ={gitHub}/></Link>
          <Link to = "https://www.instagram.com/eaduval/"><img alt="Instagram" src = {insta}/></Link>
          <Link to = "https://docs.google.com/document/d/1kw7IgRnHrcrzUKSJ5Taeym5fIagIuLuJziffWS-x4jg/edit?usp=sharing"><img alt="Resume" src = {resume} /></Link>
        </div>
      </header>
        <Routes>
          <Route path="/" element = {<Home/>}/>
          <Route path = "/About"  element = {<About/>}/>
          <Route path = "/Projects" element = {<Projects/>}/>
          <Route path = "/Contact" element = {<Contact/>}/>
        </Routes>
    </div>
  );
}

export default App;
