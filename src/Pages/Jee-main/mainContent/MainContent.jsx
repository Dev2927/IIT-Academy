import React from "react";
import './MainContent.css'

function MainContent() {
  return (
    <div className="jeeContent-container">
      <div>
        <button className="jeeContent-card">
          <h1>Physics</h1>
        </button>
      </div>
      <div>
        <button className="jeeContent-card">
          <h1>Chemistry</h1>
        </button>
      </div>
      <div>
        <button className="jeeContent-card">
          <h1>Maths</h1>
        </button>
      </div>
    </div>
  );
}

export default MainContent;
