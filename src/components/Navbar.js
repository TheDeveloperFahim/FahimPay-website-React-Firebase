import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Navba() {
  // this hook use for hide & show navbar
  const [show, setShow] = useState(false);

  return (
    <>
      <header className="navbar-bg">
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="container">
            <a className="navbar-brand" href="#">
              fahimPay
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarContent"
              aria-controls="navbarContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
              onClick={() => setShow(!show)}
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className={`collapse navbar-collapse ${show ? "show" : ""}`}>
              {/* Menu Section */}
              <ul className="navbar-nav ms-auto">
                <li className="nav-item ">
                  <NavLink
                    to="/"
                    exact
                    activeClassName="active"
                    className="nav-link"
                  >
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="/Services"
                    exact
                    activeClassName="active"
                    className="nav-link"
                  >
                    Services
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="/About"
                    exact
                    activeClassName="active"
                    className="nav-link"
                  >
                    about
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="/Contact"
                    exact
                    activeClassName="active"
                    className="nav-link"
                  >
                    contact
                  </NavLink>
                </li>
              </ul>
              {/* Login and Sing Up Button */}
              <div class="d-flex">
                <button class="btn  btn-style">sing up</button>
                <button class="btn  btn-style btn-style-bdr">login</button>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
