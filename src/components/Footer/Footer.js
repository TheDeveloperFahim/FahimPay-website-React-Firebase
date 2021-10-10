import { useState } from "react";
import { FooterData } from "./FooterData";

export default function Footer() {
  const [footerItems, setFooterItems] = useState(FooterData);

  return (
    <>
      <footer className="main-footer section-padding">
        <div className="container">
          <div className="row">
            {footerItems.map((value, index) => {
              const { title, desc1, desc2, desc3, desc4 } = value;
              return (
                <div className="col-12 col-lg-3 footer-item">
                  <h3 className="footer-title">{title}</h3>
                  <div className="footer-lists">
                    <ul>
                      <li>{desc1}</li>
                      <li>{desc2}</li>
                      <li>{desc3}</li>
                      <li>{desc4}</li>
                    </ul>
                  </div>
                </div>
              );
            })}
            <div className="col-12 col-lg-3 footer-item">
              <h3 className="footer-title">follow us</h3>
              <div className="social-links">
                <ul>
                  <li>
                    <a
                      href="https://www.facebook.com/TheDeveloperFahim"
                      target="_blank"
                    >
                      <i className="fab fa-facebook-f" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com/TheDeveloperFahim"
                      target="_blank"
                    >
                      <i className="fab fa-instagram" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/in/TheDeveloperFahim"
                      target="_blank"
                    >
                      <i className="fab fa-linkedin-in" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://github.com/DeveloperFahim13"
                      target="_blank"
                    >
                      <i className="fab fa-github" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-text">
            <p>
              Copyright @ {new Date().getFullYear()} FahimPay. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}