import React from 'react'
import './Hero.css'
import profile from '../../assets/profile.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'


const Hero = () => {
  return (
    <div  id='home' className='hero'>
      <img src={profile}  alt="" />
      <h1><span>Hi, I'm Abdul Raheem</span>   MERN Stack Developer</h1>
      <p>A dedicated MERN Stack Developer focused on crafting modern, responsive, and high-performance web applications.</p>
      <div className="hero-action">
        <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact' > Connect With Me</AnchorLink></div>
        <div className="hero-resume"><a href="../../../public/AbdulRaheem-MERN.pdf" target='_blank'>My Resume</a></div>
      </div>
    </div>
  )
}

export default Hero
