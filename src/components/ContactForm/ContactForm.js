import { useState } from "react";
import Form from "./Form";

export default function ContactForm() {
  const [userData, setUserData] = useState({
    fname: "",
    lname: "",
    phone: "",
    email: "",
    address: "",
    message: "",
  });

  // get user data from input value
  function getUserData(event) {
    const { name, value } = event.target;
    setUserData({ ...userData, [name]: value });
  }

  // Post user data on Firebase
  function postUserData(event) {
    event.preventDefault();

    const { fname, lname, phone, email, address, message } = userData;

    const res = fetch(
      "https://contact-form-fahimpay-default-rtdb.firebaseio.com/userInfo.json",
      {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          fname,
          lname,
          phone,
          email,
          address,
          message,
        }),
      }
    );

    if (res) {
      setUserData({
        fname: "",
        lname: "",
        phone: "",
        email: "",
        address: "",
        message: "",
      });
      alert("Form Submitted Successfully");
    }
  }

  return (
    <>
      <section className="contact-form-container section-padding">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-4 contact-form-content">
              <h2 className="contact-form-title">
                Connect With Our Sales Team.
              </h2>
              <p className="main-para">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Deserunt eaque alias similique.
              </p>
              <div className="contact-form-img">
                <img src="./images/hero1.jpg" alt="contact_form_img" />
              </div>
            </div>
            <div className="col-12 col-lg-8 contact-form">
              <Form
                postUserData={postUserData}
                getUserData={getUserData}
                userData={userData}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
