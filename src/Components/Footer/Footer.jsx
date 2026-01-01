import React from 'react'
import './Footer.css'
import linkdin from '../../assets/linkedin.png'
import email from '../../assets/email.png'
import whatsapp from '../../assets/whatsapp.png'
import instagram from '../../assets/instagram.png'
import github from '../../assets/github.png'

const Footer = () => {
  return (
    <div className='footer'>
        {/* <hr /> */}
        <div className="footer-bottom">
            <p className="footer-b-left">
               &copy; 2025 Built with React JS. All rights reserved.</p>
        <div className="footer-b-right">
            <div className="footer-images">
                <a href="https://www.linkedin.com/in/abdulraheem15" target='_blank'><img src={linkdin} alt="" /></a>
                <a href="mailto:abraheem7121@gmail.com" ><img src={email} alt="" /></a>
                <a href="https://wa.me/8861741348" ><img src={whatsapp} alt="" /></a>
                <a href="https://www.instagram.com/abdul.raheem_08" target="_blank"><img src={instagram} alt="" /></a>
                <a href="https://github.com/AbdulRaheem1508" target='_blank'><img src={github} alt="" /></a>
            </div>
        </div>
        </div>

      
    </div>
  )
}

export default Footer
