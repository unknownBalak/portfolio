import React from "react";
import "./css/project.css";
import { Link } from "react-router-dom";
import music1 from "./resources/projectWork/musicAppClone1.png";
import absenteelist from "./resources/projectWork/absenteelist.png";
import radio from "./resources/projectWork/radio.png";
// import music3 from './resources/projectWork/musicAppClone3.png';
function Project() {
  return (
    <div className="projects">
      <Link to="/" className="homePage crossIcon2"></Link>
      <div className="project project1">
        <img src={music1} alt="project1" />
        <div className="aboutProject">
          <h1>MusicApp</h1>
          <p>
            I have used only CSS and HTML to build this This was fun project for me. The design is
            created by @devED. click{" "}
            <a
              href="https://unknownbalak.github.io/musicAppClone/index.html"
              target="_blank"
              rel="noreferrer"
              style={{ color: "#07f545", fontSize: "20px", fontWeight: "bold" }}
            >
              Here
            </a>{" "}
            to preview . Here is Source{" "}
            <a
              href="https://github.com/unknownBalak/musicAppClone"
              target="_blank"
              rel="noreferrer"
              style={{ color: "#07f545", fontSize: "20px", fontWeight: "bold" }}
            >
              Code
            </a>
          </p>
        </div>
      </div>
      <div className="project project2">
        <img src={absenteelist} alt="absenteelist" />
        <div className="aboutProject">
          <h1>Absentees List</h1>
          <p>
            This was my first project in JavaScript. I wrote this program because my teachers were
            facing difficulties while taking attandance of student. click{" "}
            <a
              href="https://unknownbalak.github.io/absenteelist/"
              target="_blank"
              rel="noreferrer"
              style={{ color: "#07f545", fontSize: "20px", fontWeight: "bold" }}
            >
              Here
            </a>{" "}
            to preview . Here is Source{" "}
            <a
              href="https://github.com/unknownBalak/absenteelist"
              target="_blank"
              rel="noreferrer"
              style={{ color: "#07f545", fontSize: "20px", fontWeight: "bold" }}
            >
              Code
            </a>
          </p>
        </div>
      </div>
      <div className="project project3">
        <img src={radio} alt="radio" />
        <div className="aboutProject">
          <h1>Radio App</h1>
          <p>
            This project tells my knowledge about API call. I called an API to display data and if you
            want to listen music from your computer of laptop just go to station and play the music.
            . click{" "}
            <a
              href="radioapp.netlify.app/"
              target="_blank"
              rel="noreferrer"
              style={{ color: "#07f545", fontSize: "20px", fontWeight: "bold" }}
            >
              Here
            </a>{" "}
            to preview . Here is Source{" "}
            <a
              href="https://bit.ly/3wXfERB"
              target="_blank"
              rel="noreferrer"
              style={{ color: "#07f545", fontSize: "20px", fontWeight: "bold" }}
            >
              Code
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Project;
