import React from "react";
import "./About.css"

import developer from "../../assets/developer.png"
import { GiAchievement } from "react-icons/gi";
import { BsFillBagCheckFill } from "react-icons/bs";
import { ImHeadphones } from "react-icons/im";
import { IoDocumentTextOutline } from "react-icons/io5";
import { useScrollReveal } from "../Hooks/useScrollReveal";


function About(){

  useScrollReveal()

  
  return (
    <section className="about-section" id="about">
      <h1 className="about-title">About</h1>
      <main className="main-content">
        <img src={developer} alt="About-Image" className="about-image" />
        <div className="about-info">
           <div className="experience-info">
              <div>
                <span><GiAchievement size={35} /></span>
                <h4>Experience</h4>
                <p>2 + Years</p>
              </div>
              <div>
                <span><BsFillBagCheckFill size={27} /></span>
                <h4>Completed</h4>
                <p>20 + Projects</p>
              </div>
              <div>
                <span><ImHeadphones size={27}/></span>
                <h4>Support</h4>
                <p>24/7</p>
              </div>
           </div>
           <p className="paragraph">
           I'm a full stack web developer based in morocco with a passion for building beautiful websites.
            Skilled in JavaScript,Nextjs, React, and Node.js, 
            I enjoy solving complex problems and creating user-friendly solutions. 
            My goal is to create web applications that meet client needs and provide an enjoyable user experience.
            </p>
           <a href="../../assets/cv.pdf" download={''}>
           <button className="download-cv-btn">
               <p>Download Cv</p><IoDocumentTextOutline size={20}/>
           </button>
           </a>
        </div>
      </main> 
    </section>
  );
}

export default About;
