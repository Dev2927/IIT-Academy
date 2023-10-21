import React from "react";
import "./Benefits.css";
import excellence from "../../assets/excellence.jpg";
import computerbased from "../../assets/computer-based.jpg";
import doubt from "../../assets/doubt.png";
import improve from "../../assets/improvemtn.jpg";
import exam from "../../assets/exam.png";
import dpp from "../../assets/dpp.jpg";
import periodic from "../../assets/test.jpg";
import worksheet from "../../assets/work.avif";
import orientation from "../../assets/orientations.png";
import performance from "../../assets/performances.jpg";
import feedback from "../../assets/feedbacks.jpg";
import studymaterial from "../../assets/studymaterial.png";
import video from "../../assets/video.jpg";
import makeup from "../../assets/makeup.jpg";

function Benefits() {
  return (
    <>
      <h1 className="heading">What are the Course Benefits?</h1>
      <div className="box-container">
        <div className="box">
          <span></span>
          <h4>Excellent Faculty</h4>
          <img src={excellence} alt="Image 1" />
          <p>
            Outstanding and highly qualified faculty members who help students
            in every aspect of their study life.
          </p>
        </div>
        <div className="box">
          <span></span>
          <h4>Computer Based Tests</h4>
          <img src={computerbased} alt="Image 1" />
          <p>
            Online tests will be conducted as per the new change in the pattern,
            for better practice of our students.
          </p>
        </div>
        <div className="box">
          <span></span>
          <h4>Doubt Classes</h4>
          <img src={doubt} alt="Image 1" />
          <p>
            1 on 1 doubt classes are conducted for students to provide them with
            customized solution.
          </p>
        </div>
        <div className="box">
          <span></span>
          <h4>Board Improvement Program</h4>
          <img src={improve} alt="Image 1" />
          <p>
            Special board classes for the students who are improving in any
            subject of board.
          </p>
        </div>
        <div className="box">
          <span></span>
          <h4>Competitive Exam Support</h4>
          <img src={exam} alt="Image 1" />
          <p>
            Special classes are designed for other exams like Olympiads, KVPY.
            Study material are provided and regular tests are conducted.
          </p>
        </div>
        <div className="box">
          <span></span>
          <h4>Daily Practice Problems</h4>
          <img src={dpp} alt="Image 1" />
          <p>
            Designed for a student's self-understanding of a topic. DPPs are
            handed over daily to the students for practice after every session.
          </p>
        </div>
        <div className="box">
          <span></span>
          <h4>Periodic Tests</h4>
          <img src={periodic} alt="Image 1" />
          <p>
            Periodic Tests are conducted regularly, allowing students to solve
            all kinds of questions asked in the competitive exams of JEE.
          </p>
        </div>
        <div className="box">
          <span></span>
          <h4>Board Worksheets</h4>
          <img src={worksheet} alt="Image 1" />
          <p>
            On the basis of NCERT ans state Boards, worksheets for students are
            created. This runs parallel with the course curriculum.
          </p>
        </div>
        <div className="box">
          <span></span>
          <h4>Orientation Classes</h4>
          <img src={orientation} alt="Image 1" />
          <p>
            Orientation classes are conducted for students to motivate them and
            make them familiar with the insitute.
          </p>
        </div>
        <div className="box">
          <span></span>
          <h4>Performance Tracker</h4>
          <img src={performance} alt="Image 1" />
          <p>
            Every student's progress is tracked by giving a constant feedback on
            their performance in the tests.
          </p>
        </div>
        <div className="box">
          <span></span>
          <h4>Feedback System</h4>
          <img src={feedback} alt="Image 1" />
          <p>
            Regular feedbacks are taken by the students in order to improve the
            learning process qualitatively and listens to all student's queries.
          </p>
        </div>
        <div className="box">
          <span></span>
          <h4>Study Material</h4>
          <img src={studymaterial} alt="Image 1" />
          <p>
            Topic-wise study material with all the key concepts, problems for
            practice and important questions are updated regularly.
          </p>
        </div>
        <div className="box">
          <span></span>
          <h4>Recorded Video Lecture</h4>
          <img src={video} alt="Image 1" />
          <p>
            Students who have missed classes can watch recorded video lectures
            in computer lab to cover up the topics.
          </p>
        </div>
        <div className="box">
          <span></span>
          <h4>B:MUS (Make up classes)</h4>
          <img src={makeup} alt="Image 1" />
          <p>
            Especially organized for the students who have missed the classes or
            have doubt in particular topic or chapter.
          </p>
        </div>
      </div>
    </>
  );
}

export default Benefits;
