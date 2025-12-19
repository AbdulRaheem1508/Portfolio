import React from 'react'
import './Contact.css'
import theme from '../../assets/theme_pattern.svg'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'


const Contact = () => {
    

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "f720bf75-58b7-49c1-bf08-1dc4a8f2c82e");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      alert(res.message);
    }
  };



  return (
    <div id='contact' className='contact'>
        <div className="contact-title">
            <h1>Get In Touch</h1>
            <img src={theme} alt="" />
        </div>
        <div className="contact-section">
            <div className="contact-left">
                <h1>Lets's Talk</h1>
                <p>I'm open to new opportunities and collaboration. Whether you have a project, aquestion, or just want to say hello, feel free to reach out. I'm always happy to connect.</p>
                <div className="contact-details">
                    <div className="contact-det">
                        <img src={mail_icon} alt="" /><p>abraheem7121@gmail.com</p>
                    </div>
                    <div className="contact-det">
                        <img src={call_icon} alt="" /><p>+91 8861741348</p>
                    </div>
                    <div className="contact-det">
                        <img src={location_icon} alt="" /><p>Banglore, Karnataka</p>
                    </div>
                </div>
            </div>
            <form onSubmit={onSubmit} className="contact-right">
                <label htmlFor="">Your Name</label>
                <input type="text" placeholder='Enter your name' name='name' />
                <label htmlFor="">Your Email</label>
                <input type="email" placeholder='Enter you email' name='email' />
                <label htmlFor="">Write Your Message Here</label>
                <textarea name="message" rows="8" placeholder='Enter your message'></textarea>
                <button  type='submit' className='contact-submit'>Submit</button>
            </form>
        </div>
      
    </div>
  )
}

export default Contact
