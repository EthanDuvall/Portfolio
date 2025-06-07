import "./Projects.scss";
import ReactTimeAgo from "react-time-ago";
import en from "javascript-time-ago/locale/en";
import TimeAgo from "javascript-time-ago";
import { Link } from "react-router-dom";
import { useState } from "react";

function Projects() {
  TimeAgo.locale(en);

  const [isInfo, setisInfo] = useState([false, false, false]);

  function toggleInfo(projectNum) {
    const tempArray = [...isInfo];
    tempArray[projectNum] = !tempArray[projectNum];
    setisInfo(tempArray);
  }

  return (
    <div className="projects-holder">
      <div className={`project ${isInfo[0] ? "expanded" : ""}`}>
        <aside>
          <h2>Current project: Genshin Team Builder - Solo Project</h2>
          <p>
            Started/Starting :
            <ReactTimeAgo date={"06-01-2025"} locale="en-US" />
          </p>
          <h3>Frontend: React + Tailwind</h3>
          <p>
            A full-featured web application that allows Genshin Impact players
            to build and evaluate teams by filtering characters based on
            element, weapon type, and role, with real-time data fetched from the
            Genshin Dev API and a smooth UI built in React.
          </p>
        </aside>
        {isInfo[0] && (
          <ul>
            <h3>Planned features:</h3>
            <li>A pop up to add and select which charters you own</li>
            <li>
              Having the team options include filters to decide wich kind of
              team would you like for that current charter
            </li>
            <li>
              Possiblity of allowing the auto import which charters you own
              insted of manually adding them
            </li>
            <li>
              Possiblity of adding weapons and which artifact set to use with
              the charters
            </li>
            <li>
              Possible future data base and api to reduce strain on the
              application itself
            </li>
          </ul>
        )}
        <div className="button-holder">
          <Link>Link is ( WIP ) </Link>
          <button
            onClick={() => {
              toggleInfo(0);
              console.log();
            }}
          >
            {isInfo[0] ? <p>Less info</p> : <p> More Info </p>}
          </button>
        </div>
      </div>
      <div className={`project ${isInfo[1] ? "expanded" : ""}`}>
        <aside>
          <h2>Brain Defrost - Group Project</h2>
          <p>Time to complete 40 hours</p>
          <h3>
            Frontend: React + TypeScript - Backend: Ruby on Rails + Ruby Action
            Cable
          </h3>
          <p>
            This app allows a player to create a trivia game to get the brain
            going in a quick and easy way! The app provides a list of
            AI-generated multiple choice trivia questions about your topic of
            choice and shows you how you did at the end of the game. New
            features include a responsive app design and an option to receive
            game stats via email!
          </p>
        </aside>
        {isInfo[1] && (
          <ul>
            <h3>Current Features:</h3>
            <li>
              Using Action Cable added Webosockets for realtime and live updates
              for every player
            </li>
            <li>
              Using OpenAi API users are able to create a triva game based off
              any prompt given
            </li>
            <li>
              The user can request an email of the game stats at the end of the
              game
            </li>
            <li>
              At the end of each round the user will see a results showing whos
              in the lead aswell as who got the most recent question right
            </li>
            <li>
              The user receives a sharable link to send to other players
              enabling them to join the triva game
            </li>
            <h3>Planned Features:</h3>
            <li>No future features planned currently</li>
          </ul>
        )}
        <div className="button-holder">
          <Link to="https://brain-defrost.netlify.app">Deployed Link</Link>
          <button
            onClick={() => {
              toggleInfo(1);
            }}
          >
            {isInfo[1] ? <p>Less info</p> : <p> More Info </p>}
          </button>
        </div>
      </div>
      <div className={`project  ${isInfo[2] ? "expanded" : ""}`}>
        <aside>
          <h2>Spotify Playlist Creator - Solo Project</h2>

          <p>Time to complete 40 hours</p>
          <h3>Frontend: React + Spotify Web API Cable</h3>
          <p>
            This is an application that creates you a playlist based on genre!
            Its base default amount of songs is 25. Uses as a new way to find
            music based on genres you might like, the playlists instantly upload
            into your sporify profile with the name and description the user
            chooses
          </p>
        </aside>
        {isInfo[2] && (
          <ul>
            <h3>Current Features:</h3>
            <li>
              Uses the Spotify Web API to fetch available genres, allowing users
              to select a genre as the basis for their playlist.
            </li>
            <li>
              The home page displays the user's playlists, their current top
              five songs, and their profile picture.
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
              Explore additional playlist creation options beyond genre
              selection.
            </li>
          </ul>
        )}
        <div className="button-holder">
          <Link to="https://playlist-creator.vercel.app">Deployed Link</Link>
          <button
            onClick={() => {
              toggleInfo(2);
            }}
          >
            {isInfo[2] ? <p>Less info</p> : <p> More Info </p>}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Projects;
