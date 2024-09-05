import React from "react";
import "./Hero.css";
import { PiBagSimpleFill } from "react-icons/pi";
import profilePicture from "../../assets/developer2.svg";



function Hero() {
  return (
    <section className="hero-section" id="hero">
      <div className="hero-content">        
        <span className="intro">Hello, I'm</span>
        <span className="myName">Abdelghafour Elouakkassi</span>
        <span className="specialization">A Full Stack Web Developer</span>
        <p className="description">
           proficient in both front-end and back-end development.
           I have the ability to create dynamic and user-friendly web applications with exceptional features.
        </p>   
        <a href="#contact"><button className="hireMe-button"><PiBagSimpleFill size={18}/>Hire Me</button></a>
        
      </div>
      <img src={profilePicture} alt="profile-picture" className="profile-picture" />
    </section>
  );
}

export default Hero;
