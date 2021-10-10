import { useState } from "react";
import { ServicesAPI } from "./ServicesAPI";

export default function Services() {
  const [serData, setSerData] = useState(ServicesAPI);
  return (
    <>
      <section className="main-services section-padding">
        <div className="container">
          <div className="row">
            <div className="section-title">
              <h2>How to send money</h2>
            </div>
          </div>
          <div className="row row-padding">
            {serData.map((value, index) => {
              const { icon, title, description } = value;
              return (
                <div className="col-12 col-lg-4 services-box" key={index}>
                  <div className="ser-icon">
                    <i className={icon} />
                  </div>
                  <div className="ser-info">
                    <h3 className="ser-title">{title}</h3>
                    <p className="main-para">{description}</p>
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
