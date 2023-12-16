import React from 'react'
import physics from '../../../assets/physics.png'
import chemistry from '../../../assets/chemistry.png'
import biology from '../../../assets/biology.png'

function NeetContent() {
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
      <img src={biology} alt="biology"/>
      </button>
    </div>
  </div>
  )
}

export default NeetContent
