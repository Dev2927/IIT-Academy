import React from "react";
import './MainContent.css'
import physics from '../../../assets/physics.png'
import chemistry from '../../../assets/chemistry.png'
import maths from '../../../assets/maths.png'

function MainContent() {
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
    </div>
  );
}

export default MainContent;
