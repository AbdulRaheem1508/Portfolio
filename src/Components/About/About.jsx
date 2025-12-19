import React from 'react'
import './About.css'
import theme from '../../assets/theme_pattern.svg'
import profile from '../../assets/abt1.png'

const About = () => {
  return (
    <div  id='abt' className='about'>
      <div className="about-title">
        <h1>About Me</h1>
        <img src={theme} alt="" />
      </div>
      <div className="about-section">
        <div className="about-left">
            <img src={profile} alt="" />
        </div>
        <div className="about-right">
            <div className="about-para">
                <p>I’m Abdul Raheem, a MERN Stack Developer who loves building clean, responsive, and user-focused web applications. I enjoy turning ideas into real, functional products through thoughtful design and clean code.</p>
                <p>As a fresher, I bring energy, curiosity, and a strong willingness to learn. I’m excited to take on new challenges, collaborate with teams, and contribute to meaningful, high-quality development work.</p>
            </div>
            <div className="about-skills">
                <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"95%"}} /></div>
                <div className="about-skill"><p>JavaScript</p><hr style={{width:"65%"}} /></div>
                <div className="about-skill"><p>React JS</p><hr style={{width:"70%"}} /></div>
                <div className="about-skill"><p>Node JS</p><hr style={{width:"75%"}} /></div>
                <div className="about-skill"><p>Express JS</p><hr style={{width:"60%"}} /></div>
                <div className="about-skill"><p>Mongo DB</p><hr style={{width:"70%"}} /></div>
            </div>
        </div>
      </div>
    <div className="about-achievement">
      <div className="about-achieve">
          <h1>10+</h1>
          <p>PROJECTS COMPLETED</p>
      </div>
      <hr />
      <div className="about-achieve">
          <h1>95%</h1>
          <p>PROBLEM-SOLVING ACCURACY</p>
      </div>
      <hr />
      <div className="about-achieve">
          <h1>90%</h1>
          <p>CLEAN & SCALABLE CODE QUALITY</p>
      </div>
      <hr />
      <div className="about-achieve">
          <h1>8+</h1>
          <p>MODERN TECH SKILLS MASTERED</p>
      </div>
    </div>  
    </div>
  )
}

export default About
