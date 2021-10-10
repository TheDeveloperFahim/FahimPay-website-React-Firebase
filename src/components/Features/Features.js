import { useState } from "react";
import { FeaturesData } from "./FeaturesData";

export default function Features() {
  const [feaBox, setFeaBox] = useState(FeaturesData);

  return (
    <>
      <section className="main-features section-padding">
        <div className="container">
          <div className="row">
            <div className="section-title">
              <h2>How does it Work</h2>
            </div>
          </div>
          <div className="row row-padding">
            {feaBox.map((value, index) => {
              return (
                <div className="col-12 col-lg-4 features-box" key={index}>
                  <div className="features-icon">
                    <i className={value.icon} />
                  </div>
                  <div className="features-info">
                    <h3 className="ser-title">{value.title}</h3>
                    <p className="main-para">{value.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
