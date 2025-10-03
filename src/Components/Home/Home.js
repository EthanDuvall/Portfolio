import "./Home.scss"
import photo from "../../Util/IMG_5692.jpeg"
    function Home() {
        


        
        
        
        
        return(
        <div className="homeBody">
            <div className ="nameCard">
                <h3>Hi I'm,</h3>
                <h1>Ethan Duvall</h1>
                <h3>Full Stack Developer</h3>
            </div> 
            <aside>
                <p>Current Project:</p>
                <p>-Restyling Spotify Playlist Maker-</p>
            </aside>
            <img alt ="pictureOfMe" src = {photo}  />
        </div>);
    }


 export default Home