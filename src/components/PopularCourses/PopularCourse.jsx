import React, { useState } from "react";
import "./Tabs.css";
import { courseData } from "../PopularCourses/CourseData";
import previous from "../../assets/previous.png";
import next from "../../assets/next.png";

function PopularCourse() {
  const [tab, setTab] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);

  function activeTab(tabNumber) {
    setTab(tabNumber);
    setCurrentPage(1);
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

  const pageSize = 3;
  const totalPageCount = Math.ceil(data.length / pageSize);

  const handlePrevious = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const handleNext = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPageCount));
  };

  const startIndex = (currentPage - 1) * pageSize;
  const visibleData = data && data.slice(startIndex, startIndex + pageSize);

  return (
    <div className="course-container">
      <h1 className="course-heading">Our Courses</h1>
      <p className="course-para">
        Being true mentors, our objective is to guide the students on the track
        of their academic growth by bringing out their latent potential
      </p>
      <div className="course">
        <div
          onClick={() => activeTab(1)}
          className="course-btn course-btns radius"
        >
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
        <div
          onClick={() => activeTab(5)}
          className="course-btn course-btns radius1"
        >
          Boards
        </div>
      </div>
      <div className="detail-box">
        {visibleData &&
          visibleData.map((value, index) => {
            return (
              <div key={index} className="card-detail">
                <img
                  src={value.img}
                  alt={value.description}
                  width="300px"
                  height="300px"
                />
                <p className="details-desc">{value.description}</p>
                <div className="details-btns">
                  <button className="details-btn">Details</button>
                </div>
              </div>
            );
          })}
        {data && data.length > pageSize && (
          <div className="slider-buttons">
            {currentPage > 1 && (
              <button onClick={handlePrevious} className="img-prev">
                <img src={previous} alt="Prev Img.." className="img-previous"/>
              </button>
            )}
            {currentPage < totalPageCount && (
              <button onClick={handleNext} className="img-nex">
                <img src={next} alt="Next Img" className="img-next"/>
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default PopularCourse;
