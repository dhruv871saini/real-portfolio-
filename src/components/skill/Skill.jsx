import React from "react";
import "./skill.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Sectionanimation from "../Sectionanimation.jsx/Sectionanimation";

const Skill = () => {
  const skills = [
    {
      imgSrc: `${process.env.PUBLIC_URL}/images/f6hdar5sti0p0iqomflok0kihm-000a2ec2cebde016fc446c787b4b88df-removebg-preview.png`,
      name: "HTML",
    },
    {
      imgSrc: `${process.env.PUBLIC_URL}/images/cascading-style-sheets-css3-javascript-logo-world-wide-web-1036071b7dcbba8be599d697b6b4439a-removebg-preview.png`,
      name: "CSS",
    },
    {
      imgSrc: `${process.env.PUBLIC_URL}/images/javascript-programmer-programming-language-computer-programming-node-js-2713ee6cb8ec506c9dd48a0b70eb3a9a.png`,
      name: "JavaScript",
    },
    {
      imgSrc: `${process.env.PUBLIC_URL}/images/bootstrap-scalable-vector-graphics-clip-art-logo-github-884e72da41cca1c841bcbb2311cf5fea.png`,
      name: "Bootstrap",
    },
    {
      imgSrc: `${process.env.PUBLIC_URL}/images/m09nvr18bo7jkuvuvtobb2sr9m.png`,
      name: "React",
    },
    {
      imgSrc: `${process.env.PUBLIC_URL}/images/node-js-javascript-web-application-express-js-computer-software-others-70d9bb260ad29ba6d220b827803f918f.png`,
      name: "Node.js",
    },
    {
      imgSrc: `${process.env.PUBLIC_URL}/images/5bbc11749bc4b-6df94a7d9c88b8f193ffc41bd1da28f8.png`,
      name: "MongoDB",
    },
    {
      imgSrc: `${process.env.PUBLIC_URL}/images/github-icon-github-png-image-68a4d1d8cd6454d9ae06cc453d6a9e12.png`,
      name: "GitHub",
    },
    {
      imgSrc: `${process.env.PUBLIC_URL}/images/sahil_ke_chu-removebg-preview.png`,
      name: "Docker",
    },
    {
      imgSrc: `${process.env.PUBLIC_URL}/images/java.png`,
      name: "Java",
    },
    {
      imgSrc: `${process.env.PUBLIC_URL}/images/visual-studio-code-microsoft-visual-studio-source-code-editor-c-4d7583d9e6de05ca2d58df35c986a05b.png`,
      name: "VS Code",
    },
    {
      imgSrc: `${process.env.PUBLIC_URL}/images/5bbef21ecfdfd-ce8f2928dbd6680c98500bb3d6dfb0e0.png`,
      name: "C",
    },
    {
      imgSrc: `${process.env.PUBLIC_URL}/images/the-c-programming-language-computer-programming-programming-433eaff2e323c10c549cfa6b9d8237da.png`,
      name: "C++",
    },
    {
      imgSrc: `${process.env.PUBLIC_URL}/images/pngwing.com (1).png`,
      name: "POSTMAN",
    },
  ];

  return (
    <div className="container">
      <div className="text-center oranges display-3 mb-5">Skills</div>
      <div className="row justify-content-center">
        {skills.map((skill, index) => (
          <div key={index} className="col-lg-2 col-md-3 col-sm-4 col-6 mb-4">
            <div className="card skill-card text-center">
              <Sectionanimation>
                <img
                  src={skill.imgSrc}
                  alt={skill.name}
                  className="card-img-top skill-img"
                />
                <div className="card-body">
                  <p className="card-text skill-name">{skill.name}</p>
                </div>
              </Sectionanimation>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skill;
