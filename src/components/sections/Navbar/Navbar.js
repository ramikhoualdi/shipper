import { Link } from "react-router-dom";
import "./styles.css";
// import { useSelector } from 'react-redux'

const Navbar = () => {
  let userS = false;
  let userC = false;

  return (
    <div className="navbar">
      <div className="container">
        <div className="inner">
          <div className="logo">
            <Link to="/">
              <img
                src={process.env.PUBLIC_URL + "/images/logo.png"}
                alt="logo"
              />
            </Link>
          </div>
          <div className="custom-menu">
            <ul>
              <li>
                {userS ? (
                  <Link to="/shipper">Shipper</Link>
                ) : (
                  <Link to="/signinshipper">Shipper</Link>
                )}
              </li>
              <li>
                {userC ? (
                  <Link to="/carrier">Carrier</Link>
                ) : (
                  <Link to="/signincarrier">Carrier</Link>
                )}
              </li>
            </ul>
          </div>
          <div className="site-menu">
            <div>
              <ul>
                <li>
                  <Link to="/logistics">Logistics</Link>
                </li>
                <li>
                  <Link to="/services">Services</Link>
                </li>
                <li>
                  <Link to="/news">News</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="hamburger-menu">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className="navbar-button">
            <Link to="/">GET STARTED</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
