import React from "react";
import "./experience.css";
import { IoShieldCheckmark } from "react-icons/io5";
const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience_container">
        <div className="experience_frontend">
          <h3>Frontend Development </h3>
          <div className="experience_content">
            <article className="experience_details">
              <IoShieldCheckmark className="experience_details-icon" />
              <div>
                <h4>HTML, CSS</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience_details">
              <IoShieldCheckmark className="experience_details-icon" />
              <div>
                <h4>Typescript</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience_details">
              <IoShieldCheckmark className="experience_details-icon" />
              <div>
                <h4>Redux Toolkit</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience_details">
              <IoShieldCheckmark className="experience_details-icon" />
              <div>
                <h4>Sass</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience_details">
              <IoShieldCheckmark className="experience_details-icon" />
              <div>
                <h4>TailwindCss</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience_details">
              <IoShieldCheckmark className="experience_details-icon" />
              <div>
                <h4>React.js</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
          </div>
        </div>
        {/*end frontend*/}
        <div className="experience_backend">
          <h3>Mobile Development </h3>
          <div className="experience_content">
            <article className="experience_details">
              <IoShieldCheckmark className="experience_details-icon" />
              <div>
                <h4>Dart & Flutter</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience_details">
              <IoShieldCheckmark className="experience_details-icon" />
              <div>
                <h4>Provider and Bloc</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience_details">
              <IoShieldCheckmark className="experience_details-icon" />
              <div>
                <h4>Clean Architecture</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience_details">
              <IoShieldCheckmark className="experience_details-icon" />
              <div>
                <h4>API's</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
          </div>
        </div>
        {/** end backend*/}

        <div className="experience_frontend">
          <h3>Quality Assurance </h3>
          <div className="experience_content">
            <article className="experience_details">
              <IoShieldCheckmark className="experience_details-icon" />
              <div>
                <h4>Manual Testing</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience_details">
              <IoShieldCheckmark className="experience_details-icon" />
              <div>
                <h4>Cypress</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience_details">
              <IoShieldCheckmark className="experience_details-icon" />
              <div>
                <h4>Automated Testing</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience_details">
              <IoShieldCheckmark className="experience_details-icon" />
              <div>
                <h4>Unit Testing</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
