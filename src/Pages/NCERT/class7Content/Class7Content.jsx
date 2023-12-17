import React from 'react'
import './Class7Content.css'
import maths from '../../../assets/maths.png'
import science from '../../../assets/science.png'

function Class7Content() {
  return (
    <div className="class7-container">
      <div>
        <button className="class7-card">
          <img src={maths} alt="maths"/>
        </button>
      </div>
      <div>
        <button className="class7-card">
        <img src={science} alt="science"/>
        </button>
      </div>
    </div>
  )
}

export default Class7Content
