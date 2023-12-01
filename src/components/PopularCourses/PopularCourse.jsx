import React, { useState } from "react";
import "./Tabs.css";
import { courseData } from "../PopularCourses/CourseData";

function PopularCourse() {
  const [tab, setTab] = useState(1);

  function activeTab(tabNumber) {
    setTab(tabNumber);
  }

  const engineer = courseData.filter((course) => course.item === "engineering");

  const medicalCourse = courseData.filter(
    (course) => course.item === "medical"
  );

  const foudations = courseData.filter(
    (course) => course.item === "foundation"
  );

  const distanceLearning = courseData.filter(
    (course) => course.item === "distance"
  );

  const boards = courseData.filter((course) => course.item === "board");

  const data =
    tab === 1
      ? engineer
      : tab === 2
      ? medicalCourse
      : tab === 3
      ? foudations
      : tab === 4
      ? distanceLearning
      : tab === 5
      ? boards
      : null;

  return (
    <div className="course-container">
      <h1 className="course-heading">Our Courses</h1>
      <p className="course-para">
        Being true mentors, our objective is to guide the students on the track
        of their academic growth by bringing out their latent potential
      </p>
      <div className="course">
        <div onClick={() => activeTab(1)} className="course-btn course-btns radius">
          Engineering
        </div>
        <div onClick={() => activeTab(2)} className="course-btn course-btns">
          Medical
        </div>
        <div onClick={() => activeTab(3)} className="course-btn course-btns">
          Foundation
        </div>
        <div onClick={() => activeTab(4)} className="course-btn course-btns">
          Distance Learning
        </div>
        <div onClick={() => activeTab(5)} className="course-btn course-btns radius1">
          Boards
        </div>
      </div>
      <div>
        {data && data.map((value) => {
          return (
            <div>
              <span>{value.title}</span>
              <span>{value.description}</span>
            </div>
          )
        })}
      </div>
    </div>
  );
}

export default PopularCourse;
