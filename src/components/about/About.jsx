import React from "react";
import "./about.css";
import Sectionanimation from "../Sectionanimation.jsx/Sectionanimation";
import Animationright from "../Sectionanimation.jsx/Animationright";

const About = () => {
  return (
    <div>
      <div className="container-fluid heights">
        <br />
        <br />
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-7 col-sm-12 font-style text-white fs-6 fs-md-5">
              <div className="display-5 text-uppercase text-white underline-custom">
                let&nbsp; me&nbsp; <span className="oranges">introduce</span>{" "}
                &nbsp;myself
              </div>
              <Sectionanimation>
                <div className="margin-p mb-5 ">
                  <p>
                    Hi Everyone,
                    <br />I am <span className="orangesd">Dhruv Saini</span>{" "}
                    from <span className="orangesd">New Delhi, India</span>.
                  </p>
                  <p>
                    I am currently in the third year of my{" "}
                    <span className="orangesd">
                      Bachelor's degree in Computer <br /> Applications
                    </span>{" "}
                    (Correspondence).
                  </p>
                  <p>
                    I also completed an
                    <span className="orangesd"> internship </span>
                    at Consistent Infosystems Private Limited.
                  </p>
                  <ul>
                    <li>
                      I am fluent in classics like{" "}
                      <span className="orangesd">C++, Java, JavaScript, and DSA.</span>
                    </li>
                    <li>
                      My field of interest is building{" "}
                      <span className="orangesd">
                        New Web Technologies and Products.
                      </span>
                    </li>
                    <li>
                      Worked with libraries & frameworks like{" "}
                      <span className="orangesd">
                        ReactJS, NodeJS, Express.js, Bootstrap, React Native
                      </span>{" "}
                    </li>
                    <li>
                      I have knowledge of databases like:{" "}
                      <span className="orangesd">MySQL, MongoDB.</span>
                    </li>
                  </ul>
                </div>
              </Sectionanimation>
            </div>

            <div className="col-lg-4 col-md-5 col-sm-12 text-center">
              <Animationright>
                <img
                  src={`${process.env.PUBLIC_URL}/images/240_F_826297995_gHRLKyv4GIP3m59PPertUglA2bTG9eoc.jpg`}
                  alt="Portrait of Dhruv Saini"
                  className="img-fluid rounded shadow"
                />
              </Animationright>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
