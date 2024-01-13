import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./portfolio.css";
import MMhCamera from "../../assets/MMH website.PNG";
import Template from "../../assets/Template.PNG";
import Certificate from "../../assets/certificate.JPG";
import Chatgpt from "../../assets/chatgpt.JPG";

import Glasses1 from "../../assets/glasses1.png";
import Glasses2 from "../../assets/glasses2.png";
import Glasses3 from "../../assets/glasses3.png";
import Glasses4 from "../../assets/glasses4.png";
import Glasses5 from "../../assets/glasses5.png";
import Glasses6 from "../../assets/glasses6.png";

import Shop1 from "../../assets/shop1.png";
import Shop2 from "../../assets/shop2.png";
import Shop3 from "../../assets/shop3.png";
import Shop4 from "../../assets/shop4.png";
import Shop5 from "../../assets/shop5.png";
import Shop6 from "../../assets/shop6.png";

import Movies from "../../assets/movies.png";

import Minesweeper1 from "../../assets/minesweeper1.png";
import Minesweeper2 from "../../assets/minesweeper2.png";

import Ansari from "../../assets/Ansari.JPG";
const frontEndProjects = [
  {
    id: 1,
    image: Certificate,
    title: "Certificate-monitoring",
    github: "https://github.com/mahmoudqasem2001/certificate-monitoring",
    demo: "",
  },
  {
    id: 2,
    image: Chatgpt,
    title: "Chatgpt Clone",
    github: "https://github.com/mahmoudqasem2001/Chatgpt-clone-using-React",
    demo: "https://html-css-responsive-page-scen.vercel.app/",
  },
  {
    id: 3,
    image: MMhCamera,
    title: "Camera Shop",
    github: "https://github.com/mahmoudqasem2001/Camera-Shop",
    demo: "https://thirsty-poincare-b134db.netlify.app/",
  },
  {
    id: 4,
    image: Template,
    title: "HTML + CSS Template",
    github: "https://github.com/mahmoudqasem2001/templateProject",
    demo: "https://nifty-kirch-9c6106.netlify.app/",
  },
];

const mobileProjects = [
  {
    id: 1,
    images: [Glasses1, Glasses2, Glasses3, Glasses4, Glasses5, Glasses6],
    title: "AR Glasses Store",
    github: "https://github.com/mahmoudqasem2001/AR_GlassesStore",
  },
  {
    id: 2,
    images: [Shop1, Shop2, Shop3, Shop4, Shop5, Shop6],
    title: "Shop App With Firebase",
    github: "https://github.com/mahmoudqasem2001/AR_GlassesStore/tree/main",
  },
  {
    id: 3,
    images: [Movies],
    title: "Movies App",
    github: "https://github.com/mahmoudqasem2001/movies_app_clean_arcitecture",
  },
  {
    id: 4,
    images: [Minesweeper1, Minesweeper2],
    title: "Minesweeper Game",
    github: "https://github.com/mahmoudqasem2001/minesweeper_game",
  },
];

const Portfolio = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <section>
      <h5>My Recent Work</h5>
      <h2>FrontEnd Development</h2>
      <div className="container portfolio_container">
        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={Ansari} alt="" />
          </div>
          <h3>Ansari Chat</h3>
          <div className="portfolio_item-cta">
            <a
              href="https://ansari.chat/"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>

        {frontEndProjects.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio_item">
              <div className="portfolio_item-image">
                <img src={image} alt="" />
              </div>
              <h3>{title}</h3>
              <div className="portfolio_item-cta">
                <a href={github} className="btn" target="_blank">
                  Github
                </a>
                <a href={demo} className="btn btn-primary" target="_blank">
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>

      <h2>Mobile Application Development</h2>

      <div className="container portfolio_container">
        {mobileProjects.map(({ id, images, title, github }) => {
          return (
            <article key={id} className="portfolio_item">
              <Slider {...settings}>
                {images.map((image, index) => (
                  <div key={index} className="portfolio_item-image">
                    <img src={image} alt="" />
                  </div>
                ))}
              </Slider>
              <h3>{title}</h3>
              <div className="portfolio_item-cta">
                <a href={github} className="btn" target="_blank">
                  Github
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
