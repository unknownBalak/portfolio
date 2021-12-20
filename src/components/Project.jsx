import React from "react";
import "./css/project.css";
import { Link } from "react-router-dom";
import music1 from "./resources/projectWork/musicAppClone1.png";
import absenteelist from "./resources/projectWork/absenteelist.png";
import radio from "./resources/projectWork/radio.png";
import flipkart1 from "./resources/projectWork/flipkart1.png";
import twitter from "./resources/projectWork/twitter.png";

function Project() {
  const projects = [
    {
      pName: "Radio App",
      pImage: radio,
      pURL: "https://radioapp.netlify.app/",
      PGitHub: "https://bit.ly/3wXfERB",
      pDescription:
        " This project tells my knowledge about API call. I called an API to display all station and if you want to listen music from your computer/laptop/mobile just click to station and play the music",
    },
    {
      pName: "Twitter Clone",
      pImage: twitter,
      pURL: "https://twittercloneusingcssandhtml.netlify.app/",
      PGitHub: "https://github.com/unknownBalak/twitterClone__CSS__HTML",
      pDescription: "I only used html and CSS to build this project.",
    },
    {
      pName: "MusicApp",
      pImage: music1,
      pURL: "https://unknownbalak.github.io/musicAppClone/index.html",
      PGitHub: "https://github.com/unknownBalak/musicAppClone",
      pDescription:
        "I have used only CSS and HTML to build this This was fun project for me. The design is created by @devED. click",
    },
    {
      pName: "Flipkart Clone",
      pImage: flipkart1,
      pURL: " https://flipkartclone1.netlify.app/",
      PGitHub: "https://github.com/unknownBalak/flipkart_clone",
      pDescription: ` Currently I am working on the project and my aim to create cart for items. You will find in future
          I will including React, redux, materialUI and many more. Please...`,
    },
    {
      pName: "Absentees List",
      pImage: absenteelist,
      pURL: "https://unknownbalak.github.io/absenteelist/",
      PGitHub: "https://github.com/unknownBalak/absenteelist",
      pDescription: ` This was my first project in JavaScript. I wrote this program because my teachers were
          facing difficulties while taking attandance of student. click`,
    },
  ];

  return (
    <div className="projects">
      <Link to="/" className="homePage crossIcon2"></Link>
      {projects.map((project, i) => {
        const { pImage, pDescription, pName, pURL, PGitHub } = project;
        return (
          <div className={`project project${i+1}`}>
            <img src={pImage} alt={pImage} lazyLoading="true" />
            <div className="aboutProject">
              <h1>{pName}</h1>
              <p>
                {pDescription}
                <Link
                  to={{ pathname: pURL }}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    color: "#07f545",
                    fontSize: "20px",
                    fontWeight: "bold",
                  }}
                >
                  Preview Here
                </Link>{" "}
                and get GitHubRepo
                <Link
                  to={{ pathname: PGitHub }}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    color: "#07f545",
                    fontSize: "20px",
                    fontWeight: "bold",
                  }}
                >
                  Code
                </Link>
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Project;
