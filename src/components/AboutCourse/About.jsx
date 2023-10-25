import React from "react";
import img from "../../assets/main.png";
import "./About.css";
import { Link } from "react-router-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function About() {
  return (
    <section>
      <div className="image">
        <img src={img} alt="Loading..." />
      </div>
      <div className="about">
        <h1>About</h1>
        <p>
          - XYZ Course is specially designed for giving an early advantage to
          the students by starting JEE Advanced preparation immediately after
          10th Board Examination. The course lays special emphasis on the
          fundamentals for relevant to the syllabus and pattern of JEE (Main +
          Advanced). Students will be given through mentorship for class Xl &
          Xll preparation and focused guidance for the preparation of other
          competitive exams like Olympiads etc.
        </p>
        <p>
          - Students joining this program have more time to clear their
          fundamentals and practice extensively for JEE (Advanced), their
          ultimate goal!
        </p>
      </div>

      <div className="details">
        <h2 className="heading-details">Fee & Scholarship Details</h2>

        <div className="detail-box">
          Fee Structure For Course (1 Year)
          <table>
            <thead>
              <tr>
                <th>Admission + infra. + study material free</th>
                <th>Tution Fee(TF)</th>
                <th>Caution Money</th>
                <th>Gross Total Fee (if paid in inst.)</th>
                <th>1st inst.</th>
                <th>2nd inst.</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>25,000</td>
                <td>1,20,000</td>
                <td>3,000</td>
                <td>1,48,000</td>
                <td>88,800</td>
                <td>59,200</td>
              </tr>
            </tbody>
          </table>
          <p>
            1st Installment is 60% of the total fee & 2nd Installment is 40% in
            Single Year Course. 1st Installment at the time of admission while
            2nd installment on or before 60 days of course commencement. For
            students who deposit the fees in 2 installment, it is mandatory for
            them to submit a Post Dated Cheque (PDC) of the remaining
            installment.
          </p>
          <div>
            <h1>Scholarship Criteria</h1>
            <ul>
              <li>
                Scholarship based on <b>Board Exam Marks.</b>
              </li>
              <li>
                Scholarship based on <b>Competitive Exam Performance.</b>
              </li>
              <li>
                To Know More
                <Link to='/fee'>
                  <button>Click Here</button>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
