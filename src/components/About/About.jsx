import React from "react";
import "./About.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import profile_img from "../../assets/profile_img.svg";

const About = () => {
  return (
    <div className="about">
      <div className="about-title">
        <h1>About me </h1>
        <img src={theme_pattern} alt="" />
        <div>
          <div className="about-sections">
            <div className="about-left">
              <img src={profile_img} alt="" />
            </div>
            <div className="about-right">
              <div className="about-para">
                <p>
                  I’m a Barça fan because they’re the best team in the world. I
                  like to think I’m a chill guy, but deep down, I know I’m just
                  a simp who somehow pulls girls despite my questionable
                  height. Sure, I might be insecure about my hairline and
                  height, and I can be a bit of an asshole sometimes, but one
                  thing’s for sure: I’m a brilliant backend dev and proud of it.
                </p>
                <p>
                  I’m passionate about building efficient, scalable backend
                  systems and constantly improving my craft to create seamless
                  user experiences.
                </p>
              </div>
              <div className="about-skills">
                <div className="about-skill"><p>React.js</p><hr style = {{width:"50%"}}/></div>
                <div className="about-skill"><p>Next.js</p><hr style = {{width:"45%"}}/></div>
                <div className="about-skill"><p>Node.js</p><hr style = {{width:"70%"}}/></div>
                <div className="about-skill"><p>Express.js</p><hr style = {{width:"40%"}}/></div>

              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
          <h1>3+</h1>
          <p>YEARS OF EXPERIENCES</p>
        </div>
        <hr/>

        <div className="about-achievement">
          <h1>30+</h1>
          <p>PROJECTS COMPLETED</p>
        </div>
        <hr/>
 

        <div className="about-achievement">
          <h1>20+</h1>
          <p>HAPPY CLIENTS</p>
        </div>

      </div>
    </div>
  );
};

export default About;
