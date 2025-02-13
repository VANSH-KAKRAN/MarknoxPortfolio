import React from "react";
import myphoto from "./Images/myphoto.jpg";
import spotifyProject from "./Images/spotifyProject.jpeg";
import backimage from "./Images/backimage.jpg";
import locationIcon from "./Images/location2-removebg-preview.png";
import contactIcon from "./Images/contact-removebg-preview.png";
import telegramIcon from "./Images/telegram-removebg-preview.png";
import linkedinIcon from "./Images/linkedin-removebg-preview.png";
import { useEffect } from "react";
import tilesposter from "./Images/tilesposter.webp";
import SocialMediaApp from "./Images/SocialMediaApp.png";
function App() {
  useEffect(() => {
    const navbarHeight = document.querySelector(".navbar").offsetHeight;

    document.querySelectorAll("a.nav-link").forEach((anchor) => {
      anchor.addEventListener("click", function (event) {
        event.preventDefault();
        const targetId = this.getAttribute("href").substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
          const offsetTop = targetElement.offsetTop - navbarHeight;
          window.scrollTo({
            top: offsetTop,
            behavior: "smooth",
          });
        }
      });
    });
  }, []);
  return (
    <div>
      <nav id="navigation" className="navbar fixed-top navbar-expand-lg">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Vansh kakran
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about">
                  About & Skills
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#projects">
                  Projects
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#educations">
                  Edjucation
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">
                  Contact Me
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div
        className="main-sec-1"
        style={{ backgroundImage: `url(${backimage})` }}
      >
        <section className="Sec-Main">
          <div>
            <h3>Hello!</h3>
            <h2 className="main-name">I'm Vansh Kakran</h2>
            <p>
              A <strong>React</strong> Developer
            </p>
          </div>
        </section>
      </div>
      <section id="about" className="about-me">
        <div className="sec-1">
          <div className="sec1-1">
            <img className="my-photo" src={myphoto} alt="" />
            <ul className="My-info">
              <li>
                Name : <span> Vansh Kakran </span>
              </li>
              <li>
                Self Learning : <span> 2 Year+ Dev </span>
              </li>
              <li>
                Address : <span> Meerut , Up</span>
              </li>
              <li>
                Age :<span> 19 </span>
              </li>
            </ul>
          </div>
          <div>
            <br />
            <span className="education-text" id="skills">
              Skills
            </span>
            <br />
            <br />
            <br />
            <li>Html 70%</li>
            <div
              className="progress"
              role="progressbar"
              aria-label="Danger example"
              aria-valuenow="100"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              <div
                className="progress-bar bg-primary"
                style={{ width: "70%" }}
              ></div>
            </div>
            <li>Css 85%</li>
            <div
              className="progress"
              role="progressbar"
              aria-label="Danger example"
              aria-valuenow="100"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              <div
                className="progress-bar bg-success"
                style={{ width: "85%" }}
              ></div>
            </div>
            <li>Java script 70%</li>
            <div
              className="progress"
              role="progressbar"
              aria-label="Danger example"
              aria-valuenow="100"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              <div
                className="progress-bar bg-info"
                style={{ width: "70%" }}
              ></div>
            </div>
            <li>React 70%</li>
            <div
              className="progress"
              role="progressbar"
              aria-label="Danger example"
              aria-valuenow="100"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              <div
                className="progress-bar bg-primary"
                style={{ width: "70%" }}
              ></div>
            </div>
            <li>BootStrap 70%</li>
            <div
              className="progress"
              role="progressbar"
              aria-label="Danger example"
              aria-valuenow="100"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              <div
                className="progress-bar bg-success"
                style={{ width: "70%" }}
              ></div>
            </div>
            <li>Github 50%</li>
            <div
              className="progress"
              role="progressbar"
              aria-label="Danger example"
              aria-valuenow="100"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              <div
                className="progress-bar bg-danger"
                style={{ width: "70%" }}
              ></div>
            </div>
            <li>Figma 60%</li>
            <div
              className="progress"
              role="progressbar"
              aria-label="Danger example"
              aria-valuenow="100"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              <div
                className="progress-bar bg-success"
                style={{ width: "60%" }}
              ></div>
            </div>
          </div>
        </div>
        <section className="sec-2">
          <li
            className="aboutme-text education-text"
            style={{ textAlign: "left" }}
          >
            About Me
          </li>
          <li>
            <span className="aboutme-below-text">
              With over two year of learning web developement with the
              bachelor's digree in computer application and by making projects
              and portfolios Now i am confident enough to work as a react
              developer because of skills like javascript , react , html , css ,
              bootstrap , figma etc.
            </span>
          </li>
          <ul className="my-info2">
            <li>
              Profile : <span>React Developer or Frontend developer</span>
            </li>

            <li>
              <span>Education : Bachelor of Computer Application</span>
            </li>
            <li>
              <span>Speaking Language : English, Hindi</span>
            </li>
            <li>
              <span>Ai Tools : Chat gpt </span>
            </li>
            <li>
              <span>
                Other Skills : Node js , Express js , Mongodb , Rest Api
              </span>
            </li>
            <li>
              <span>Interest : Sketching , coding</span>
            </li>
          </ul>
        </section>
      </section>

      <div id="projects">
        <div className="education-text project">Projects</div>
        <div>
          <a target="”_blank”" href="https://vansh-kakran.github.io/SRE/">
            <img className="spotifyProject" src={tilesposter} alt="" />
          </a>
        </div>
        <div className="Project-other2">
          <div>
            <a
              target="”_blank”"
              href="https://vansh-kakran.github.io/MusicApp-Spotify/"
            >
              <img className="spotifyProject" src={spotifyProject} alt="" />
            </a>
          </div>

          <div>
            <a
              target="”_blank”"
              href="https://github.com/VANSH-KAKRAN/SocialMediaApp"
            >
              <img className="spotifyProject" src={SocialMediaApp} alt="" />
            </a>
          </div>
        </div>
      </div>

      <section id="education" className="sec-3">
        <br />

        <h id="educations" className="education-text">
          Education
        </h>
        <div className="dual-card">
          <ul className="edjucation-card">
            <li className="year">2022-2025</li>
            <li className="year-edu">Bachlor of Computer Application</li>
            <li className="university">DR K N MODI INSTITUTE OF ENGG TECH</li>
          </ul>
          <ul className="edjucation-card">
            <li className="year">2022</li>
            <li className="year-edu">Higher Secondry School</li>
            <li className="university">
              Krishak Inter College Mawana (Meerut)
            </li>
          </ul>
        </div>
      </section>
      <br />
      <br />
      <br />
      <br />
      <section id="contact" className="sec-4">
        <div className="contact-main">
          <li>Contact Me</li>
          <br />
          <li>Below are the details to reach out to me!</li>
        </div>
        <br />
        <br />
        <div className="contact-card">
          <div className="card" style={{ width: "18 rem" }}>
            <div className="card-round">
              <img src={locationIcon} className="card-img-top" alt="..." />
            </div>

            <div className="card-body">
              <h5 className="card-title">Address</h5>
              <p className="card-text">Meerut ,Uttar Pradesh</p>
            </div>
          </div>
          <div className="card" style={{ width: "18 rem" }}>
            <div className="card-round">
              <img src={contactIcon} class="card-img-top" alt="..." />
            </div>

            <div className="card-body">
              <h5 className="card-title">Contact Number</h5>
              <p className="card-text">+919 548 177 045</p>
            </div>
          </div>
          <div className="card" style={{ width: "18 rem" }}>
            <div className="card-round">
              <img src={telegramIcon} class="card-img-top" alt="..." />
            </div>

            <div className="card-body">
              <h5 className="card-title">Gmail address</h5>
              <p className="card-text">vanshkakran82@gmail.com</p>
            </div>
          </div>
          <div className="card" style={{ width: "18 rem" }}>
            <div className="card-round">
              <img class="card-img-top" alt="..." src={linkedinIcon} />
            </div>

            <div className="card-body">
              <h5 className="card-title">Linked in</h5>
              <p className="card-text">
                <a
                  className="link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover"
                  href="https://www.linkedin.com/in/vansh-kakran-a09471265?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                >
                  Link for it
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="copyright">
        Copyright ©2024 All rights reserved | This template is made with by 
        <a
          className="link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover"
          href="https://www.linkedin.com/in/vansh-kakran-a09471265?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
        >
          &nbsp;Vansh Kakran
        </a>
      </section>
    </div>
  );
}

export default App;
