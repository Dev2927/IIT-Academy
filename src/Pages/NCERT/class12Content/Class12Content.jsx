import React from "react";
import physics1 from "../../../assets/physics1.png";
import chemistry1 from "../../../assets/chemistry1.png";
import maths1 from "../../../assets/maths1.png";
import physics2 from "../../../assets/physics2.png";
import chemistry2 from "../../../assets/chemistry2.png";
import maths2 from "../../../assets/maths2.png";

function Class12Content() {
  return (
    <div className="jeeContent-container">
      <div>
        <button className="jeeContent-card">
          <img src={physics1} alt="physics1" />
        </button>
      </div>
      <div>
        <button className="jeeContent-card">
          <img src={chemistry1} alt="chemistry1" />
        </button>
      </div>
      <div>
        <button className="jeeContent-card">
          <img src={maths1} alt="maths1" />
        </button>
      </div>
      <div>
        <button className="jeeContent-card">
          <img src={physics2} alt="physics2" />
        </button>
      </div>
      <div>
        <button className="jeeContent-card">
          <img src={chemistry2} alt="chemistry2" />
        </button>
      </div>
      <div>
        <button className="jeeContent-card">
          <img src={maths2} alt="maths2" />
        </button>
      </div>
    </div>
  );
}

export default Class12Content;
