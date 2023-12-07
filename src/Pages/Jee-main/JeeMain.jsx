import React, { useState } from "react";
import "./JeeMain.css";
import { jeeMainData } from "./JeeMainData";
import { useNavigate } from "react-router-dom";

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
            onClick={() =>  navigate("./maincontent")}
          >
            <h1>2017</h1>
          </button>
        </div>
        <div>
          <button className="jeemain-btn" onClick={() => activeTab(2)}>
            <h1>2018</h1>
          </button>
        </div>
        <div>
          <button className="jeemain-btn" onClick={() => activeTab(3)}>
            <h1>2019</h1>
          </button>
        </div>
        <div>
          <button className="jeemain-btn" onClick={() => activeTab(4)}>
            <h1>2020</h1>
          </button>
        </div>
        <div>
          <button className="jeemain-btn" onClick={() => activeTab(5)}>
            <h1>2021</h1>
          </button>
        </div>
        <div>
          <button className="jeemain-btn" onClick={() => activeTab(6)}>
            <h1>2022</h1>
          </button>
        </div>
        <div>
          <button className="jeemain-btn" onClick={() => activeTab(7)}>
            <h1>2023</h1>
          </button>
        </div>
      </div>
      {jeeData.map((value, index) => {
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
