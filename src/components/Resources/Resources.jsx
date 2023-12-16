import React from "react";
import { useNavigate } from "react-router-dom";
import "./Resources.css";
import jeeMain from "../../assets/jeeMain.png";
import jeeAdv from "../../assets/jeeAdv.png";
import neet from "../../assets/neet.png";
import boards from "../../assets/boards.png";
import ncert from "../../assets/ncert.png";
import kvpy from "../../assets/kvpy.png";
import others from "../../assets/others.png";

function Resources() {
  const navigate = useNavigate();

  return (
    <div className="resources-container">
      <div>
        <button onClick={() => navigate("/jeemain")} className="resources-card">
          {/* <Flask size={60} color="#0112f3" weight="duotone" /> */}
          <img src={jeeMain} alt="jeeMain" />
        </button>
      </div>
      <div>
        <button onClick={() => navigate("/jeeadv")} className="resources-card">
          {/* <Atom size={52} color="#0112f3" weight="duotone" /> */}
          <img src={jeeAdv} alt="jeeAdv" />
        </button>
      </div>
      <div>
        <button onClick={() => navigate("/neet")} className="resources-card">
          {/* <Bandaids size={52} color="#0112f3" weight="duotone" /> */}
          <img src={neet} alt="neet" />
        </button>
      </div>
      <div>
        <button onClick={() => navigate("/boards")} className="resources-card">
          {/* <ClipboardText size={52} color="#0112f3" weight="duotone" /> */}
          <img src={boards} alt="boards" />
        </button>
      </div>
      <div>
        <button onClick={() => navigate("/kvpy")} className="resources-card">
          {/* <BookOpen size={52} color="#0112f3" weight="duotone" /> */}
          <img src={kvpy} alt="kvpy" />
        </button>
      </div>
      <div>
        <button onClick={() => navigate("/ncert")} className="resources-card">
          {/* <Book size={52} color="#0112f3" weight="duotone" /> */}
          <img src={ncert} alt="ncert" />
        </button>
      </div>
      <div>
        <button onClick={() => navigate("/other")} className="resources-card">
          <img src={others} alt="others" />
        </button>
      </div>
    </div>
  );
}

export default Resources;
