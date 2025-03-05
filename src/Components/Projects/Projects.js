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
        <h2>Current project: Automated job tracker - Solo Project</h2>

        <Link>Deployed Link ( WIP )</Link>

        <p>
          Started/Starting : <ReactTimeAgo date={"03-10-2025"} locale="en-US" />
        </p>
        <h3>
          Frontend: React + Tailwind - Backend: FastAPI - Python + MongoDB
        </h3>
        <p>
          A nice little web app to make the job application process eaiser in
          this rough market.
        </p>
        <ul>
          Planned features:
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
      </div>
      <div className="project">
        <h2>Brain Defrost - Group Project</h2>
        <Link to="https://brain-defrost.netlify.app">Deployed Link</Link>
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
        <ul>
          Current Features:
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
          Planned Features:
          <li>No future features planned currently</li>
        </ul>
      </div>
      <div className="project"></div>
      <div className="project"></div>
    </div>
  );
}

export default Projects;
