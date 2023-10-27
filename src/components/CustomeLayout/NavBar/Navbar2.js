import { Nav, Navbar, NavbarToggler, Collapse, NavItem } from "reactstrap";
// import { Link } from 'react-router-dom';
import { Link } from "react-scroll";
import React, { useState } from "react";
import logo from "../../../assets/logo.png";

const NavBar2 = () => {
  const [isNavOpen, setisNavOpen] = useState(false);
  return (
    <Navbar className="bg-white" light expand="lg">
      <div className="container">
        <NavbarToggler onClick={() => setisNavOpen(!isNavOpen)} />
        <img
          src={logo}
          height="50"
          width="80"
          alt="geotex"
          //   style={{ marginTop: '-12px' }}
        />
        {/* <span style={{ fontSize: '26px', fontWeight: 600 }}>GEOTEX</span> */}

        <Collapse isOpen={isNavOpen} navbar className="home-texture">
          <Nav navbar className="ml-auto" style={{ fontSize: "1.2rem" }}>
            <NavItem>
              <Link
                className="nav-link ml-2 mr-2 text-dark"
                to="/"
                onClick={() =>
                  window.screen.width <= 770 ? setisNavOpen(!isNavOpen) : ""
                }
              >
                Home
              </Link>
            </NavItem>

            <NavItem>
              <Link
                spy={true}
                smooth={true}
                duration={100}
                className="nav-link ml-2 mr-2 text-dark"
                to="aboutusForMobile"
                onClick={() =>
                  window.screen.width <= 770 ? setisNavOpen(!isNavOpen) : ""
                }
              >
                About us
              </Link>
            </NavItem>

            <NavItem>
              <Link
                spy={true}
                smooth={true}
                duration={100}
                offset={-200}
                className="nav-link ml-2 mr-2 text-dark"
                to="principals"
                onClick={() =>
                  window.screen.width <= 770 ? setisNavOpen(!isNavOpen) : ""
                }
              >
                Principals
              </Link>
            </NavItem>

            <NavItem>
              <Link
                spy={true}
                smooth={true}
                duration={100}
                offset={-200}
                className="nav-link ml-2 mr-2 text-dark"
                to="products"
                onClick={() =>
                  window.screen.width <= 770 ? setisNavOpen(!isNavOpen) : ""
                }
              >
                Products
              </Link>
            </NavItem>
          </Nav>
        </Collapse>
      </div>
    </Navbar>
  );
};

export default NavBar2;
