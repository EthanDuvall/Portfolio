import Home from "../Home/Home";
import linkedIn from "../../Util/free-linkedin-logo-icon-download-in-svg-png-gif-file-formats--social-media-pack-logos-icons-721962.webp"
import gitHub from "../../Util/GitHub_Invertocat_Logo.svg"
import insta from "../../Util/Instagram-Icon.png"
import resume from "../../Util/text70.svg"
import {Link} from 'react-router-dom'



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <h1>ED</h1>
          <button>Home</button>
          <button>About</button>
          <button>Services</button>
          <button>Portfolio</button>
          <button>Conact Me</button>
        </div>
        <div>
          <Link to = "https://www.linkedin.com/in/eaduvall/"><img alt="LinkedIn" src = {linkedIn} /></Link>
          <Link to = "https://github.com/EthanDuvall" ><img alt="GitHub" src ={gitHub}/></Link>
          <Link to = "https://www.instagram.com/eaduval/"><img alt="Instagram" src = {insta}/></Link>
          <img alt="Resume" src = {resume} />
        </div>
      </header>
        <Home />
    </div>
  );
}

export default App;
