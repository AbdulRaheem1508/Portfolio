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
                <img src={linkdin} alt="" />
                <img src={email} alt="" />
                <img src={whatsapp} alt="" />
                <img src={instagram} alt="" />
                <img src={github} alt="" />
            </div>
        </div>
        </div>

      
    </div>
  )
}

export default Footer
