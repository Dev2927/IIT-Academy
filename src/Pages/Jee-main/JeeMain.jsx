import React, { useState } from "react";
import "./JeeMain.css";
import { jeeMainData } from "./JeeMainData";
import { useNavigate } from "react-router-dom";
import seventeen from '../../assets/2017.png';
import eight from '../../assets/2018.png'
import nine from '../../assets/2019.png'
import ten from '../../assets/2020.png'
import one from '../../assets/2021.png'
import two from '../../assets/2022.png'
import three from '../../assets/2023.png'

function JeeMain() {
  const navigate = useNavigate();
  const [tab, setTab] = useState(1);

  function activeTab(tabNumber) {
    setTab(tabNumber);
  }

  const sevenTeen = jeeMainData.filter((data) => data.name === "2017");
  const eighteen = jeeMainData.filter((data) => data.name === "2018");
  const nineTeen = jeeMainData.filter((data) => data.name === "2019");
  const twenty = jeeMainData.filter((data) => data.name === "2020");
  const twentyOne = jeeMainData.filter((data) => data.name === "2021");
  const twentyTwo = jeeMainData.filter((data) => data.name === "2022");
  const twentyThree = jeeMainData.filter((data) => data.name === "2023");

  const jeeData =
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
              navigate("/maincontent");
              activeTab(1);
            }}
          >
            <img src={seventeen} alt="Seven"/>
          </button>
        </div>
        <div>
          <button
            className="jeemain-btn"
            onClick={() => {
              navigate("/maincontent");
              activeTab(2);
            }}
          >
            <img src={eight} alt="Seven"/>
          </button>
        </div>
        <div>
          <button
            className="jeemain-btn"
            onClick={() => {
              navigate("/maincontent");
              activeTab(3);
            }}
          >
            <img src={nine} alt="Seven"/>
          </button>
        </div>
        <div>
          <button
            className="jeemain-btn"
            onClick={() => {
              navigate("/maincontent");
              activeTab(4);
            }}
          >
            <img src={ten} alt="Sten"/>
          </button>
        </div>
        <div>
          <button
            className="jeemain-btn"
            onClick={() => {
              navigate("/maincontent");
              activeTab(5);
            }}
          >
            <img src={one} alt="one"/>
          </button>
        </div>
        <div>
          <button
            className="jeemain-btn"
            onClick={() => {
              navigate("/maincontent");
              activeTab(6);
            }}
          >
            <img src={two} alt="two"/>
          </button>
        </div>
        <div>
          <button
            className="jeemain-btn"
            onClick={() => {
              navigate("/maincontent");
              activeTab(1);
            }}
          >
            <img src={three} alt="three"/>
          </button>
        </div>
      </div>
      {jeeData &&
        jeeData.map((value, index) => {
          return (
            <div key={index}>
              <button>
                <h1>{value.title}</h1>
              </button>
            </div>
          );
        })}
    </>
  );
}

export default JeeMain;
