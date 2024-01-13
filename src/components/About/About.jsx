import React from "react";
import "./about.css";
import ME from "../../assets/Me2.jpg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";
const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>
        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <FaAward className="about_icon" />
              <h5>Experience</h5>
              <small>1+ Years Working</small>
            </article>
            <article className="about_card">
              <FiUsers className="about_icon" />
              <h5>Problem Solving</h5>
              <small>200+ Solved</small>
            </article>
            <article className="about_card">
              <VscFolderLibrary className="about_icon" />
              <h5>Projects</h5>
              <small>20+ Completed </small>
            </article>
          </div>
          <p>
            As a Computer Systems Engineer with a bachelor's degree from
            Palestine Technical University - Kadoorie, I have developed and
            demonstrated skills in frontend development, problem solving, and
            quality assurance. I am passionate about creating user-friendly and
            high-quality software solutions that meet the needs and expectations
            of the clients and users.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
