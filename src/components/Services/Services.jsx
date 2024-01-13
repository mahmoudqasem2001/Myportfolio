import React from "react";
import "./services.css";
import { AiOutlineCheck } from "react-icons/ai";
const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services_container">
        <article className="services">
          <div className="services_head">
            <h3>Mobile App Development</h3>
          </div>
          <ul className="services_list">
            <li>
              <AiOutlineCheck className="service_list-icon" />
              <p>Build Cross Platform Apps </p>
            </li>
            <li>
              <AiOutlineCheck className="service_list-icon" />
              <p>Build Clean code and Architecture Apps</p>
            </li>
          </ul>
        </article>
        {/**end  */}
        <article className="services">
          <div className="services_head">
            <h3>Web Development</h3>
          </div>
          <ul className="services_list">
            <li>
              <AiOutlineCheck className="service_list-icon" />
              <p>Front End Development </p>
            </li>
            <li>
              <AiOutlineCheck className="service_list-icon" />
              <p>Dealing with API's </p>
            </li>
            <li>
              <AiOutlineCheck className="service_list-icon" />
              <p>Connecting With Database In Different Ways </p>
            </li>
            <li>
              <AiOutlineCheck className="service_list-icon" />
              <p>Build Good UI Designs</p>
            </li>
          </ul>
        </article>
        {/**end web development */}
        <article className="services">
          <div className="services_head">
            <h3>Software Testing</h3>
          </div>
          <ul className="services_list">
            <li>
              <AiOutlineCheck className="service_list-icon" />
              <p>Test All Scenarios in the software </p>
            </li>
            <li>
              <AiOutlineCheck className="service_list-icon" />
              <p>Good team work</p>
            </li>
          </ul>
        </article>
        {/**end data analyses */}
      </div>
    </section>
  );
};

export default Services;
