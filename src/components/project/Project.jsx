import React from "react";
import "./project.css";
import Upanimation from "../Sectionanimation.jsx/Upanimation";

const Project = () => {
  return (
    <div className="container mt-5 mb-5">
      <div className="display-3 oranges text-center fw-bold">PROJECT</div>
      <div className="row mt-5 g-4">
        <div className="col-lg-4 col-md-6 col-sm-12">
          <Upanimation>
            <div className="bg-colors text-center hoveres p-3">
              <div className="text-white fs-3">Event schedular & Management  </div>
              <img
                src={`${process.env.PUBLIC_URL}/images/clockssss-removebg-preview.png`}
                className="img-fluid mt-3"
                alt="event Management"
              />
              <div className="playicon">
                <a
                  href="https://deploy-event-schedular.onrender.com/"
                  target="_blank"
                  rel="noopener noreferrer">
                  <img
                    src={`${process.env.PUBLIC_URL}/images/computer-icons-button-play-android-play-531db69ea1b349390e3797330f970fa1.png`}
                    className="w-25"
                    alt="Play Button"
                  />
                </a>
                <div className="fs-5 text-light fw-bold hoveres">
                  Project Details
                  <div className="hover-content">
                    <p>Technology used: BOOTSTRAP, REACT.JS, NODE.JS, MONGO-DB, EXPRESS.JS</p>
                  </div>
                </div>
              </div>
            </div>
          </Upanimation>
        </div>

        <div className="col-lg-4 col-md-6 col-sm-12">
          <Upanimation>
            <div className="bg-colors text-center hoveres p-3">
              <div className="text-white fs-3">E-Commerce</div>
              <img
                src={`${process.env.PUBLIC_URL}/images/web-development-online-marketplace-e-commerce-online-shopping-web-design-web-design-6b2f0e4fc6a600375f1376e86f37d2c8.png`}
                className="img-fluid mt-3 w-75"
                alt="E-Commerce"
              />
              <div className="playicon">
                <a
                  href="https://dhruv871saini.github.io/sainiShop/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={`${process.env.PUBLIC_URL}/images/computer-icons-button-play-android-play-531db69ea1b349390e3797330f970fa1.png`}
                    className="w-25"
                    alt="Play Button"
                  />
                </a>
                <div className="fs-5 text-light fw-bold hoveres">
                  Project Details
                  <div className="hover-content">
                    <p>Technology used: HTML, CSS, BOOTSTRAP, JAVASCRIPT & REACT.JS</p>
                  </div>
                </div>
              </div>
            </div>
          </Upanimation>
        </div>

        <div className="col-lg-4 col-md-6 col-sm-12">
          <Upanimation>
            <div className="bg-colors text-center hoveres p-3">
              <div className="text-white fs-3">Web Chat Application</div>
              <img
                src={`${process.env.PUBLIC_URL}/images/web chat.png`}
                className="img-fluid mt-3"
                alt="Web Chat Application"
              />
              <div className="playicon">
                <a
                href="https://chatterbox-1-oum0.onrender.com/"
                  target="_blank"
                  rel="noopener noreferrer">
                  <img
                    src={`${process.env.PUBLIC_URL}/images/computer-icons-button-play-android-play-531db69ea1b349390e3797330f970fa1.png`}
                    className="w-25"
                    alt="Play Button"
                  />
                </a>
                <div className="fs-5 text-light fw-bold hoveres">
                  Project Details
                  <div className="hover-content">
                    <p>Technology used: BOOTSTRAP, REACT.JS, NODE.JS, MONGO-DB, EXPRESS.JS & SOCKET.IO</p>
                  </div>
                </div>
              </div>
            </div>
          </Upanimation>
        </div>
      </div>
    </div>
  );
};

export default Project;


