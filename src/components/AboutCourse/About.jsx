import React from "react";
import img from "../../assets/main.png";
import './About.css'

function About() {
  return (
    <section>
      <div className="image">
        <img src={img} alt="Loading..." />
      </div>
      <div className="about">
        <h1>About</h1>
        <p>
          XYZ Course is specially designed for giving an early advantage to the
          students by starting JEE Advanced preparation immediately after 10th
          Board Examination. The course lays special emphasis on the
          fundamentals for relevant to the syllabus and pattern of JEE (Main +
          Advanced). Students will be given through mentorship for class Xl &
          Xll preparation and focused guidance for the preparation of other
          competitive exams like Olympiads etc.
        </p>
        <p>
          Students joining this program have more time to clear their
          fundamentals and practice extensively for JEE (Advanced), their
          ultimate goal!
        </p>
      </div>
    </section>
  );
}

export default About;
