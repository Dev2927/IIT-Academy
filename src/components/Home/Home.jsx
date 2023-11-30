import React from "react";
import "./Home.css";
import img from "../../assets/main.png";
import PopularCourse from "../PopularCourses/PopularCourse";
import Accordian from '../Accordian/Accordian'

export default function Home() {
  return (
    <section className="home-container">
      <div className="home-img">
        <img src={img} alt="Loading..." />
      </div>

      <PopularCourse />
      {/* <Accordian /> */}
    </section>
  );
}
