import React from "react";
import "./education.css";
import Animationright from "../Sectionanimation.jsx/Animationright";
import Sectionanimation from "../Sectionanimation.jsx/Sectionanimation";

const Education = () => {
  return (
    <div>
      <div className="container-fluid text-white heights">
        <div className="row mx-md-5 px-md-5 mt-4">
          <div className="col-12 mb-3 text-center text-md-start">
            <div className="oranges display-4 text-uppercase fw-bold">
              Education
            </div>
          </div>
          <div className="col-sm-12 col-lg-7 my-3">
            <Sectionanimation>
              <div>
                {[
                  {
                    year: "2024-2025",
                    title: "MERN Full Stack Developer",
                    institute: "Ducat Academy",
                  },
                  {
                    year: "2022-2025",
                    title: "Bachelor Of Computer Applications",
                    institute: "Indira Gandhi National Open University",
                  },
                  {
                    year: "2022-2023",
                    title: "Computer Hardware And Networking",
                    institute: "Government Industrial Training Institute Pusa",
                  },
                ].map((edu, index) => (
                  <div
                    key={index}
                    className="row rounded bg-orangesd p-3 my-3 my-md-4 hovers align-items-center"
                  >
                    <div className="col-3 col-md-2 d-flex justify-content-center">
                      <img
                        src={`${process.env.PUBLIC_URL}/images/8c24a05a82d147208f44454f53cfd29a-removebg-preview.png`}
                        className="w-75 w-md-100"
                        alt={edu.title}
                      />
                    </div>
                    <div className="col-9 col-md-10">
                      <div className="fs-6 fs-md-5 fw-bold text-dark">{edu.year}</div>
                      <div className="fs-5 fs-md-4">{edu.title}</div>
                      <div className="fs-6 fs-md-5 text-dark fw-bold">{edu.institute}</div>
                    </div>
                  </div>
                ))}
              </div>
            </Sectionanimation>
          </div>

          <div className="col-sm-12 col-lg-5 mb-5 text-center text-md-start">
            <Animationright>
              <div>
                <img
                  src={`${process.env.PUBLIC_URL}/images/Screenshot_2024-08-14_165353-removebg-preview.png`}
                  alt="Educational Background"
                  className="img-fluid"
                  style={{ maxWidth: "100%" }}
                />
              </div>
            </Animationright>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
