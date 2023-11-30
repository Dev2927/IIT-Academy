"use client";
import { Accordion } from "keep-react";
import { CaretDown, CaretUp } from "phosphor-react";
import "./Accordian.css";

export default function AccordionComponent() {
  return (
    <Accordion
      openIcon={<CaretUp />}
      closeIcon={<CaretDown />}
      iconPosition="right"
      flush={true}
      className="home-accordion"
      showIcon={true}
    >
      <h1 className="accordion-heading">Frequently Asked Questions</h1>
      <Accordion.Panel>
        <Accordion.Title className="accordion-ques">
          Q-1:- Why should I go for IIT Academy?
        </Accordion.Title>
        <Accordion.Content className="accordion-ans">
          <p>
            IIT Academy is one of the best JEE & NEET preparation institutes.
            IIT Academy provides students with the best education curriculum,
            innovative teaching methodology, study material and exam patterned
            test series.
          </p>
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title className="accordion-ques">
          Q-2:- What medium of study does IIT Academy offer in JEE, NEET &
          Foundation courses?
        </Accordion.Title>
        <Accordion.Content className="accordion-ans">
          <p>
            We deal in both English and Hindi medium in JEE & NEET. Classes will
            be separate for both English and Hindi medium students. Study
            material and test series also will be offered according to your
            choice of language medium.
          </p>
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title className="accordion-ques">
          Q-3:- What special features does IIT Academy methodology contains and
          how does it assist to crack JEE & NEET exam?
        </Accordion.Title>
        <Accordion.Content className="accordion-ans">
          <p>
            We, at IIT Academy developed the curriculum in such a manner that
            each topic and concept is taught in simple and sequential manner. We
            make students practice more with lots of questions and brain
            storming exercises, practice sheets and DPPs. Our test series is
            designed so thoughtfully which covers previous years JEE & NEET
            questions. Each test of our test series proves to be an asset when
            you are thinking about JEE & NEET. Questions are prepared by subject
            experts which matches the level of JEE & NEET examination.
          </p>
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title className="accordion-ques">
          Q-4:- Will the preparation at IIT Academy help my ward to undertake
          JEE (Main/ Advanced) competently ?
        </Accordion.Title>
        <Accordion.Content className="accordion-ans">
          <p>
            The course curriculum of IIT Academy will comprise of coverage of
            JEE (Main / Advanced) & NEET level questions of Physics, Chemistry,
            Mathematics and Biology. Preparation of JEE (Main / Advanced) & NEET
            at IIT Academy gives a student accuracy and confidence that is
            essential to qualify such exams.
          </p>
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title className="accordion-ques">
          Q-5:- How can one get admission in IIT Academy?
        </Accordion.Title>
        <Accordion.Content className="accordion-ans">
          <p>
            Admission is based on First cum First serve basis for the various
            programmes of JEE & NEET. You can know about IIT Academy, it's
            courses and other information either by dialing on:
            8453307045/7366831500 or you can visit us at our corporate office.
            IIT Academy' s website can also assist you getting detailed
            information regarding admission.
          </p>
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title className="accordion-ques">
          Q-6:- What are the courses offered by IIT Academy?
        </Accordion.Title>
        <Accordion.Content className="accordion-ans">
          <p>
            IIT Academy offers different courses for different classes both
            offline and online. (Yet to add)
          </p>
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title className="accordion-ques">
          Q-7:- How shall we come to know about our ward's attendance &
          performance ?
        </Accordion.Title>
        <Accordion.Content className="accordion-ans">
          <p>
            At IIT Academy, we offer the mentioned services to keep the parents
            informed and updated about their ward's performance and attendance.
            Student's Attendance in Regular Classes: We do take the attendance
            of students coming to the class on a daily basis. Any student
            whosoever is found absent in the class without any prior intimation
            or a sanctioned leave then a SMS will be sent on the parent's mobile
            number of that student intimating them about their ward’s absence.
            In case, of a long absenteeism, the parents are informed
            telephonically. The same procedure is followed in the periodic
            tests. Student's Academic Performance: A Personal telephonic
            communication to the parents about the ward’s performance is also
            made by the institute. Result of each test is sent by text messages
            to the registered phone number of parents.
          </p>
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title className="accordion-ques">
          Q-8:- Can I prepare for JEE/NEET from my home?
        </Accordion.Title>
        <Accordion.Content className="accordion-ans">
          <p>
            Yes, you can prepare for JEE/NEET from your home with IIT Academy
            easily. With the help of digital technology & advance animation ,
            you will be able to visualize and understand even toughest concepts
            easily at the comfort of your home.
          </p>
        </Accordion.Content>
      </Accordion.Panel>
    </Accordion>
  );
}
