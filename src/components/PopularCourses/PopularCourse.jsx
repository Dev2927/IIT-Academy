import React, { useState } from "react";
import "./Tabs.css";
import { courseData } from "../PopularCourses/CourseData";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import previous from "../../assets/previous.png";
import next from "../../assets/next.png";

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

  const settings = {
    dots: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    previous: <CustomPrevArrow />,
    next: <CustomNextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="course-container">
      <h1 className="course-heading">Our Courses</h1>
      <p className="course-para">
        Being true mentors, our objective is to guide the students on the track
        of their academic growth by bringing out their latent potential
      </p>
      <div className="course">
        <div className="course">
          <div
            onClick={() => activeTab(1)}
            className={`course-btn course-btns radius ${
              tab === 1 ? "active-tab" : ""
            }`}
          >
            Engineering
          </div>
          <div
            onClick={() => activeTab(2)}
            className={`course-btn course-btns ${
              tab === 2 ? "active-tab" : ""
            }`}
          >
            Medical
          </div>
          <div
            onClick={() => activeTab(3)}
            className={`course-btn course-btns ${
              tab === 3 ? "active-tab" : ""
            }`}
          >
            Foundation
          </div>
          <div
            onClick={() => activeTab(4)}
            className={`course-btn course-btns ${
              tab === 4 ? "active-tab" : ""
            }`}
          >
            Distance Learning
          </div>
          <div
            onClick={() => activeTab(5)}
            className={`course-btn course-btns radius1 ${
              tab === 5 ? "active-tab" : ""
            }`}
          >
            Boards
          </div>
        </div>
      </div>

      <div className="detail-box">
        <Slider {...settings}>
          {data &&
            data.map((value, index) => {
              return (
                <div key={index} className="card-detail">
                  <img
                    src={value.img}
                    alt={value.description}
                    width="400px"
                    height="300px"
                    className="card-img"
                  />
                  <div className="details-btns">
                    <p className="details-desc">{value.description}</p>
                    <button className="details-btn">Details</button>
                  </div>
                </div>
              );
            })}
        </Slider>
      </div>
    </div>
  );
}

const CustomPrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        width: "50px",
        height: "50px",
        backgroundImage: `url(${previous})`, // Fix: Change prevArrow to previous
      }}
      onClick={onClick}
    />
  );
};

const CustomNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        width: "50px",
        height: "50px",
        backgroundImage: `url(${next})`, // Fix: Change nextArrow to next
      }}
      onClick={onClick}
    />
  );
};

export default PopularCourse;
