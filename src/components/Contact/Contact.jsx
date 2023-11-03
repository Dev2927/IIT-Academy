import React from "react";
import "./Contact.css";
import building from "../../assets/building.jpg";

function Contact() {
  return (
    <section className="contact-container">
      <div>
        <img src={building} alt="Loading..." className="contact-img" />
      </div>
      <div className="main-container">
        <div className="first-container">
          <h1>Send us message</h1>
          <form>
            <label>First Name</label>
            <br />
            <input type="text" placeholder="Enter your First Name" className="name" required/>
            <input type="text" placeholder="Enter your Last Name" className="name" required/>
            <br />
            <label>Phone No</label>
            <br />
            <input type="number" placeholder="Please enter your No" className="num" required/>
            <br />
            <label>Email Id</label>
            <br />
            <input type="email" placeholder="Enter your Email Id" className="email" required/>
            <br />
            <label>Message</label>
            <br />
            <textarea required rows="8" cols="50"></textarea>
            <br />
            <button>Request to Call Back</button>
          </form>
        </div>

        <div className="second-container">
          <div className="contact-page">
            
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
