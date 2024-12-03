import React from 'react'
import "./Hero.css"
import basit from "../../assets/basit.jpg"

const Hero = () => {
  return (
    <div className='hero'>
        <img src={basit} alt="" />
        <h1><span>Hello my name is Basit</span>, I'm 3.5ft tall</h1>
        <p>I'm a Frontend developer who resides in Ohio, USA. My stack is react and Next.js.
            Despite me being attractive to girls. I'm just a CHILL guy.
        </p>
        <div className="hero-action">
            <div className="hero-connect">Connect With Me </div>
            <div className="resume">My resume</div>
        </div>
    </div>
    
  )
}

export default Hero