import "./Projects.scss";
import ReactTimeAgo from "react-time-ago";
import en from "javascript-time-ago/locale/en";
import TimeAgo from "javascript-time-ago";
import { Link } from "react-router-dom";

function Projects() {
  TimeAgo.locale(en);

  return (
    <div className="projects-holder">
      <div className="project current">
        <aside>
        <h2>Current project: Automated job tracker - Solo Project</h2>
        <p>
          Started/Starting : <ReactTimeAgo date={"03-15-2025"} locale="en-US" />
        </p>
        <h3>
          Frontend: React + Tailwind - Backend: Flask - Python + PostgreSQl + AWS
        </h3>
        <p>
          A nice little web app to make the job application process eaiser in
          this rough market.
        </p>
        </aside>
        <ul>
          <h3>Planned features:</h3>
          <li>
            Dashboard Overview – Displays job application status (Applied,
            Interviewing, Rejected, Offer).
          </li>
          <li>
            Job Entry Form – Users can log jobs with details (company, role,
            date applied, contact, notes).
          </li>
          <li>
            Task Reminders – Automated follow-up reminders for applications.
          </li>
          <li>
            Resume & Cover Letter Storage – Users can upload and link
            resumes/cover letters to applications.
          </li>
          <li>
            Possbile Integration with LinkedIn/Glassdoor – Auto-fetch job
            details or apply directly.
          </li>
        </ul>
        <Link>Link is ( WIP ) </Link>
      </div>
      <div className="project">
        <aside>
        <h2>Brain Defrost - Group Project</h2>
        <p>Time to complete 40 hours</p>
        <h3>
          Frontend: React + TypeScript - Backend: Ruby on Rails + Ruby Action
          Cable
        </h3>
        <p>
          This app allows a player to create a trivia game to get the brain
          going in a quick and easy way! The app provides a list of AI-generated
          multiple choice trivia questions about your topic of choice and shows
          you how you did at the end of the game. New features include a
          responsive app design and an option to receive game stats via email!
        </p>
        </aside>
        <ul>
          <h3>Current Features:</h3>
          <li>
            Using Action Cable added Webosockets for realtime and live updates
            for every player
          </li>
          <li>
            Using OpenAi API users are able to create a triva game based off any
            prompt given
          </li>
          <li>
            The user can request an email of the game stats at the end of the
            game
          </li>
          <li>
            At the end of each round the user will see a results showing whos in
            the lead aswell as who got the most recent question right
          </li>
          <li>
            The user receives a sharable link to send to other players enabling
            them to join the triva game
          </li>
          <h3>Planned Features:</h3>
          <li>No future features planned currently</li>
        </ul>
        <Link to="https://brain-defrost.netlify.app">Deployed Link</Link>
      </div>
      <div className="project">
        <aside>
        <h2>Spotify Playlist Creator - Solo Project</h2>
        
        <p>Time to complete 40 hours</p>
        <h3>Frontend: React + Spotify Web API Cable</h3>
        <p>
          This is an application that creates you a playlist based on genre! Its
          base default amount of songs is 25. Uses as a new way to find music
          based on genres you might like, the playlists instantly upload into
          your sporify profile with the name and description the user chooses
        </p>
        </aside>
        <ul>
          <h3>Current Features:</h3>
          <li>
            Uses the Spotify Web API to fetch available genres, allowing users
            to select a genre as the basis for their playlist.
          </li>
          <li>
            The home page displays the user's playlists, their current top five
            songs, and their profile picture.
          </li>
          <li>
            All playlists and songs displayed link directly to their Spotify
            counterparts.
          </li>
          <li>
            Playlists are automatically uploaded to the user's library upon
            creation.
          </li>

          <h3>Planned Features:</h3>
          <li>Enable users to remove songs from playlists within the app.</li>
          <li>Allow users to add a custom image to their playlists.</li>
          <li>
            Explore additional playlist creation options beyond genre selection.
          </li>
        </ul>
        <Link to="https://playlist-creator.vercel.app">
          Deployed Link
        </Link>
      </div>
    </div>
  );
}

export default Projects;
