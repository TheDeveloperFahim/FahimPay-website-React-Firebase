import { useState } from "react";
import { AboutInfoAPI } from "./AboutInfoAPI";

export default function About() {
  const [aboutListItem, setAboutListItem] = useState(AboutInfoAPI);

  return (
    <>
      <section className="main-about section-padding">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-5 text-center about-img">
              <img src="./images/hero3.jpg" alt="aboutImage" />
            </div>
            <div className="col-12 col-lg-7 about-content">
              <div className="about-content-title">
                <p>-- AVAILABLE @ GOOGLE AND IOS APP STORE ONLY</p>
                <h3>How to use the App?</h3>
              </div>
              {aboutListItem.map((value, index) => {
                return (
                  <div className="about-content-list">
                    <div className="row" key={index}>
                      <div className="col-1 about-list-number">
                        {value.number}
                      </div>
                      <div className="col-10 about-list-info">
                        <h2>{value.title}</h2>
                        <p className="main-para">{value.description}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
              <button className="btn about-btn">Learn more</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
