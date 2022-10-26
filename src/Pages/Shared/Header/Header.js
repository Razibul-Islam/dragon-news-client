import React, { useContext } from "react";
import { Button, Image } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../AuthProvider/AuthProvider/AuthProvider";
import LeftSideNav from "../LeftSideNav/LeftSideNav";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogout = () => {
    logOut()
      .then(result => { })
      .catch(() => { })
  }


  return (
    <Navbar
      collapseOnSelect
      className="mb-4 sticky-top"
      expand="lg"
      bg="light"
      variant="light"
    >
      <Container>
        <Link to="/" className="btn">
          <Navbar.Brand>DRAGON-NEWS</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <div className="d-none d-lg-block ms-auto">
            <Nav>
              <Nav.Link href="">
                {user?.uid ? (
                  <>
                    <span>{user?.displayName}</span>
                    <Button variant="light" onClick={handleLogout}>
                      Log Out
                    </Button>
                  </>
                ) : (
                  <>
                    <Link to="/login">
                      <button>Log In</button>
                    </Link>
                    <Link to="/register">
                      <button>Register</button>
                    </Link>
                  </>
                )}
              </Nav.Link>
              <Nav.Link href="">
                {user?.photoURL ? (
                  <>
                    <Image
                      style={{ height: "30px" }}
                      roundedCircle
                      src={user?.photoURL}
                    ></Image>
                  </>
                ) : (
                  <FaUser></FaUser>
                )}
              </Nav.Link>
            </Nav>
          </div>
          <div className="d-block d-lg-none">
            <LeftSideNav></LeftSideNav>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
