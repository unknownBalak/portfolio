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
        <img src={music1} alt="project1" lazyLoading="true" />
        <div className="aboutProject">
          <h1>MusicApp</h1>
          <p>
            I have used only CSS and HTML to build this This was fun project for me. The design is
            created by @devED. click{" "}
            <Link
              to={{ pathname: "https://unknownbalak.github.io/musicAppClone/index.html" }}
              target="_blank"
              rel="noreferrer"
              style={{ color: "#07f545", fontSize: "20px", fontWeight: "bold" }}
            >
              Here
            </Link>{" "}
            to preview . Here is Source{" "}
            <Link
              to={{ pathname: "https://github.com/unknownBalak/musicAppClone" }}
              target="_blank"
              rel="noreferrer"
              style={{ color: "#07f545", fontSize: "20px", fontWeight: "bold" }}
            >
              Code
            </Link>
          </p>
        </div>
      </div>
      <div className="project project2">
        <img src={absenteelist} alt="absenteelist" lazyLoading="true" />
        <div className="aboutProject">
          <h1>Absentees List</h1>
          <p>
            This was my first project in JavaScript. I wrote this program because my teachers were
            facing difficulties while taking attandance of student. click{" "}
            <Link
              to={{ pathname: "https://unknownbalak.github.io/absenteelist/" }}
              target="_blank"
              rel="noreferrer"
              style={{ color: "#07f545", fontSize: "20px", fontWeight: "bold" }}
            >
              Here
            </Link>{" "}
            to preview . Here is Source{" "}
            <Link
              to={{ pathname: "https://github.com/unknownBalak/absenteelist" }}
              target="_blank"
              rel="noreferrer"
              style={{ color: "#07f545", fontSize: "20px", fontWeight: "bold" }}
            >
              Code
            </Link>
          </p>
        </div>
      </div>
      <div className="project project3">
        <img src={radio} alt="radio" lazyLoading="true" />
        <div className="aboutProject">
          <h1>Radio App</h1>
          <p>
            This project tells my knowledge about API call. I called an API to display all station
            and if you want to listen music from your computer/laptop/mobile just click to station
            and play the music. . click{" "}
            <Link
              to={{ pathname: "https://radioapp.netlify.app/" }}
              target="_blank"
              rel="noreferrer"
              style={{ color: "#07f545", fontSize: "20px", fontWeight: "bold" }}
            >
              Here
            </Link>{" "}
            to preview . Here is Source{" "}
            <Link
              to={{ pathname: "https://bit.ly/3wXfERB" }}
              target="_blank"
              rel="noreferrer"
              style={{ color: "#07f545", fontSize: "20px", fontWeight: "bold" }}
            >
              Code
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Project;
