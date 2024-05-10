import { Button, Col, Form, FormControl, Nav, Navbar } from "react-bootstrap";
import { BsFillBookFill, BsFillHouseDoorFill } from "react-icons/bs";
import logo from "../assets/logo/logo.png";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { logout } from "../redux/actions";
import { setInput } from "../redux/actions";
import { useState } from "react";
const Sidebar = () => {
  const authenticate = useSelector((state) => state.authenticate);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [search, setSearch] = useState("");

  const handleLogout = () => {
    dispatch(logout());

    navigate("/");
  };

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setInput(search));
    setSearch("");
    navigate("/search");
  };

  return (
    <Col md={2} className="sidebar">
      <Navbar
        expand="md"
        fixed="left"
        className="justify-content-between"
        id="sidebar"
      >
        <div className="container flex-column align-items-start">
          <Navbar.Brand as={Link} to={"/home"}>
            <img src={logo} alt="Spotify Logo" width="131" height="40" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarNavAltMarkup" />
          <Navbar.Collapse id="navbarNavAltMarkup">
            <Nav className="flex-column">
              <NavLink
                to={"/home"}
                className=" nav-link d-flex align-items-center"
              >
                <BsFillHouseDoorFill />
                &nbsp; Home
              </NavLink>
              <NavLink
                to={"/yourlibrary"}
                className=" nav-link d-flex align-items-center"
              >
                <BsFillBookFill />
                &nbsp; Your Library
              </NavLink>
              <Form className="mt-3 d-flex" onSubmit={handleSubmit}>
                <FormControl
                  placeholder="Search"
                  aria-label="Search"
                  className="rounded-0 rounded-start "
                  value={search}
                  onChange={handleChange}
                />
                <Button
                  variant="outline-secondary"
                  className="rounded-0 rounded-end"
                  type="submit"
                >
                  GO
                </Button>
              </Form>
            </Nav>
          </Navbar.Collapse>
        </div>
        <div className="nav-btn p-2 mx-auto">
          {authenticate && authenticate.user ? (
            <div>
              <p className="text-white">
                Ciao, {`${authenticate.user.name} ${authenticate.user.surname}`}
              </p>
              <Button className="login-btn" onClick={handleLogout}>
                Logout
              </Button>
            </div>
          ) : (
            <>
              <Button className="signup-btn">Sign Up</Button>
              <Button className="login-btn" onClick={() => navigate("/")}>
                Login
              </Button>
            </>
          )}
          <div>
            <a href="#">Cookie Policy</a> |<a href="#"> Privacy</a>
          </div>
        </div>
      </Navbar>
    </Col>
  );
};

export default Sidebar;
