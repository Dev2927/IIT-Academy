import React, { useState } from "react";
import "./NCERT.css";
import { ncertData } from "./ncertData";
import { useNavigate } from "react-router-dom";
import class6 from "../../assets/class6.png";
import class7 from "../../assets/class7.png";
import class8 from "../../assets/class8.png";
import class9 from "../../assets/class9.png";
import class10 from "../../assets/class10.png";
import class11 from "../../assets/class11.png";
import class12 from "../../assets/class12.png";

function NCERT() {
  const navigate = useNavigate();
  const [tab, setTab] = useState(1);

  function activeTab(tabNumber) {
    setTab(tabNumber);
  }

  const sevenTeen = ncertData.filter((data) => data.name === "class6");
  const eighteen = ncertData.filter((data) => data.name === "class7");
  const nineTeen = ncertData.filter((data) => data.name === "class8");
  const twenty = ncertData.filter((data) => data.name === "class9");
  const twentyOne = ncertData.filter((data) => data.name === "class10");
  const twentyTwo = ncertData.filter((data) => data.name === "class11");
  const twentyThree = ncertData.filter((data) => data.name === "class12");

  const ncert =
    tab === 1
      ? sevenTeen
      : tab === 2
      ? eighteen
      : tab === 3
      ? nineTeen
      : tab === 4
      ? twenty
      : tab === 5
      ? twentyOne
      : tab === 6
      ? twentyTwo
      : tab === 7
      ? twentyThree
      : null;

  return (
    <>
      <div className="jee-main">
        <div>
          <button
            className="jeemain-btn"
            onClick={() => {
              navigate("/class7content");
              activeTab(1);
            }}
          >
            <img src={class6} alt="Seven" />
          </button>
        </div>
        <div>
          <button
            className="jeemain-btn"
            onClick={() => {
              navigate("/class7content");
              activeTab(2);
            }}
          >
            <img src={class7} alt="Seven" />
          </button>
        </div>
        <div>
          <button
            className="jeemain-btn"
            onClick={() => {
              navigate("/class7content");
              activeTab(3);
            }}
          >
            <img src={class8} alt="Seven" />
          </button>
        </div>
        <div>
          <button
            className="jeemain-btn"
            onClick={() => {
              navigate("/class10content");
              activeTab(4);
            }}
          >
            <img src={class9} alt="Sten" />
          </button>
        </div>
        <div>
          <button
            className="jeemain-btn"
            onClick={() => {
              navigate("/class10content");
              activeTab(5);
            }}
          >
            <img src={class10} alt="one" />
          </button>
        </div>
        <div>
          <button
            className="jeemain-btn"
            onClick={() => {
              navigate("/advcontent");
              activeTab(6);
            }}
          >
            <img src={class11} alt="two" />
          </button>
        </div>
        <div>
          <button
            className="jeemain-btn"
            onClick={() => {
              navigate("/advcontent");
              activeTab(1);
            }}
          >
            <img src={class12} alt="three" />
          </button>
        </div>
      </div>
      {ncert &&
        ncert.map((value, index) => {
          return (
            <div key={index}>
              <button>
                {/* <h1>{value.title}</h1> */}
              </button>
            </div>
          );
        })}
    </>
  );
}

export default NCERT;
