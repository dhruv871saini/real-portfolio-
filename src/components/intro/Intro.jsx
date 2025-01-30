import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./intro.css";
import TypingEffect from "../TypingEffect";

const profilePic = process.env.PUBLIC_URL + "/images/tinywow_IMG-20230123-WA0017_62268469.png";
const resumeFile = process.env.PUBLIC_URL + "/images/YourResume.pdf"; // Replace with your actual resume file name



const Intro = () => {
  return (
    <section className="intro-section d-flex align-items-center text-center py-5">
      <div className="container">
        <div className="row justify-content-center align-items-center">
          <div className="col-lg-6 col-md-8 col-sm-10 text-white">
            <img
              src={profilePic}
              alt="Profile"
              className="profile-img mb-4 rounded-circle w-50 shadow-lg"
            />
            <h1 className="display-3 fw-bold">Welcome to My Portfolio</h1>
            <p className="lead mt-3 fs-4">
              I am
                
               a <TypingEffect/>
            </p>

            {/* Social Media Icons */}
            <div className="social-icons mt-4">
              <a
                href="https://www.linkedin.com/in/dhruv-saini-a88482241/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={`${process.env.PUBLIC_URL}/images/5bbf4bc81d430-d3dba5516582cf35aac1f745da5c5fbd.png`}
                  className="logoSize"
                  alt="LinkedIn"
                />
              </a>
              <a href="https://github.com/dhruv871saini" target="_blank" rel="noopener noreferrer">
                <img
                  src={`${process.env.PUBLIC_URL}/images/computer-icons-download-github-clip-art-github-icon-f6a1ed148786279bcd1d9dbffc0432e3.png`}
                  className="logoSize"
                  alt="GitHub"
                />
              </a>
              <a href="https://www.instagram.com/dhruv__saini_/" target="_blank" rel="noopener noreferrer">
                <img
                  src={`${process.env.PUBLIC_URL}/images/Instagram-icon-isolated-on-transparent-background-PNG.png`}
                  className="logoSize"
                  alt="Instagram"
                />
              </a>
            </div>

            {/* Resume Download Button */}
            <div>
              <a href={resumeFile} download="dhruv resume (2).pdf">
                <button className="bg-primary rounded text-dark fw-bold m-5 fs-3">
                  Resume
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
