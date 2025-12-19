import React from 'react'
import './Education.css'
import theme from '../../assets/theme_pattern.svg'
import Education_Data from '../../assets/educaion_data'

const Education = () => {
  return (
    <div id='edu' className='education'>
      <div className="edu-title">
        <h1>Education Details</h1>
        <img src={theme} alt="" />
      </div>
      <div className="edu-container">
            {Education_Data.map((edu,index)=>{
                return <div key={index} className="edu-format">
                        <h4>{edu.s_no}</h4>
                        <h1>{edu.s_name}</h1>
                        <h3>{edu.s_desc}</h3>
                        <h2>{edu.s_marks}</h2>
                </div>
            })}
      </div>
    </div>
  )
}

export default Education
