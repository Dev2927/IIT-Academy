import React from "react";
import physics from "../../../assets/physics.png";
import chemistry from "../../../assets/chemistry.png";
import maths from "../../../assets/maths.png";

function Class10Content() {
  return (
    <div className="jeeContent-container">
      <div>
        <button className="jeeContent-card">
          <img src={physics} alt="physics" />
        </button>
      </div>
      <div>
        <button className="jeeContent-card">
          <img src={chemistry} alt="chemistry" />
        </button>
      </div>
      <div>
        <button className="jeeContent-card">
          <img src={maths} alt="maths" />
        </button>
      </div>
    </div>
  );
}

export default Class10Content;
