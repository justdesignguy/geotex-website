import { Nav, Navbar, NavbarToggler, Collapse, NavItem } from "reactstrap";
// import { Link } from 'react-router-dom';
import logo from "../../../assets/logo.png";
import { Link } from "react-scroll";
import React, { useState } from "react";

const NavBar = () => {
  const [isNavOpen, setisNavOpen] = useState(false);
  return (
    <>
      <div className="main-logo-block">
        <img
          className="main-logo-img"
          src={logo}
          height="50"
          width="80"
          alt="geotex"
        />
      </div>
      <div style={{ border: "3.2px solid #CD6E3B" }}></div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Navbar expand="lg">
          <div className="container">
            <NavbarToggler onClick={() => setisNavOpen(!isNavOpen)} />

            {/* <span style={{ fontSize: '26px', fontWeight: 600 }}>GEOTEX</span> */}

            <Collapse isOpen={isNavOpen} navbar>
              <Nav navbar className="ml-auto" style={{ fontSize: "1.2rem" }}>
                <NavItem>
                  <Link
                    className="nav-link ml-2 mr-2 text-dark"
                    to="/"
                    onClick={() =>
                      window.screen.width <= 770 ? setisNavOpen(!isNavOpen) : ""
                    }
                  >
                    <span
                      style={{
                        fontFamily: "Poppins",
                        fontWeight: 900,
                        fontSize: "23px",
                      }}
                    >
                      Home
                    </span>
                  </Link>
                </NavItem>

                <NavItem>
                  <Link
                    spy={true}
                    smooth={true}
                    duration={100}
                    className="nav-link ml-2 mr-2 text-dark"
                    to="aboutus"
                    onClick={() =>
                      window.screen.width <= 770 ? setisNavOpen(!isNavOpen) : ""
                    }
                  >
                    <span
                      style={{
                        fontFamily: "Poppins",
                        fontWeight: 900,
                        fontSize: "23px",
                      }}
                    >
                      About Us
                    </span>
                  </Link>
                </NavItem>

                <NavItem>
                  <Link
                    spy={true}
                    smooth={true}
                    duration={100}
                    className="nav-link ml-2 mr-2 text-dark"
                    to="principals"
                    onClick={() =>
                      window.screen.width <= 770 ? setisNavOpen(!isNavOpen) : ""
                    }
                  >
                    <span
                      style={{
                        fontFamily: "Poppins",
                        fontWeight: 900,
                        fontSize: "23px",
                      }}
                    >
                      Principals
                    </span>
                  </Link>
                </NavItem>

                <NavItem>
                  <Link
                    spy={true}
                    smooth={true}
                    duration={100}
                    className="nav-link ml-2 mr-2 text-dark"
                    to="products"
                    onClick={() =>
                      window.screen.width <= 770 ? setisNavOpen(!isNavOpen) : ""
                    }
                  >
                    <span
                      style={{
                        fontFamily: "Poppins",
                        fontWeight: 900,
                        fontSize: "23px",
                      }}
                    >
                      Products
                    </span>
                  </Link>
                </NavItem>
              </Nav>
            </Collapse>
          </div>
        </Navbar>
      </div>
    </>
  );
};

export default NavBar;
