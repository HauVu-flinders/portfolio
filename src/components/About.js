import profile from "../img/about/profile.jpeg";
import { FaGithub, FaLinkedin, FaMedium } from "react-icons/fa";
import "./About.css";
export default function About() {
  const skills = [
    "HTML/CSS",
    "JavaScript",
    "ReactJS",
    "Java",
    "NodeJS",
    "MySQL",
    "Visual Studio Code",
    "R/Gephi",
    "Node-Red",
  ];
  return (
    <div id="about">
      <div className="row pt-32">
        <div className="info col1">
          <h2>Hello, I'm</h2>
          <h1 className="name">Sally Vu</h1>
          <h3 className="pt-16">Web Developer from Adelaide</h3>
          <div className="intro pt-16">
            <p className="intro-text">
              An IT graduate who always try the best at every single opportunity
              given, focusing, and loving to learn new technologies for any
              projects needed or to upgrade IT skills. <br></br>
              My slogan is: "Never stop learning as life never stop teaching".
              <br></br>I recently graduated Information Technology at Flinders
              University with the GPA=6/7.
            </p>
          </div>
          <div>
            <a href="">Download Resume</a>
          </div>
        </div>
        <div className="pic col2">
          <img src={profile} alt="profile" />
        </div>
      </div>
      <div className="skills pt-32">
        <h3>TECHNOLOGIES I WORK WITH:</h3>
        <ul className="skills__list">
          {skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>
      <div className="footer pt-32">
        <div className="socials-list">
          <a
            href="https://github.com/HauVu-flinders"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/sally-vu"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://medium.com/@vuhau-hsph"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaMedium />
          </a>
        </div>
      </div>
    </div>
  );
}
