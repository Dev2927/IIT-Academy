import React from 'react'
import './BoardsContent.css'
import physics from '../../../assets/physics.png'
import chemistry from '../../../assets/chemistry.png'
import maths from '../../../assets/maths.png'
import biology1 from '../../../assets/biology1.png'
import english from '../../../assets/english.png'
import painting from '../../../assets/painting.png'

function BoardsContent() {
  return (
    <div className="jeeContent-container">
      <div>
        <button className="jeeContent-card">
          <img src={physics} alt="physics"/>
        </button>
      </div>
      <div>
        <button className="jeeContent-card">
        <img src={chemistry} alt="chemistry"/>
        </button>
      </div>
      <div>
        <button className="jeeContent-card">
        <img src={maths} alt="maths"/>
        </button>
      </div>
      <div>
        <button className="jeeContent-card">
        <img src={biology1} alt="biology1"/>
        </button>
      </div>
      <div>
        <button className="jeeContent-card">
        <img src={english} alt="english"/>
        </button>
      </div>
      <div>
        <button className="jeeContent-card">
        <img src={painting} alt="painting"/>
        </button>
      </div>
    </div>
  )
}

export default BoardsContent
