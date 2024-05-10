import { Button, Col, Container, Row, Form } from "react-bootstrap";
import logo from "../assets/spotify-logo.png";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { loginSuccess, loginError } from "../redux/actions";
import { useNavigate } from "react-router-dom";

const Login = () => {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [userData, setUserData] = useState({
    email: "",
    password: "",
    name: "",
    surname: "",
  });

  const [showError, setShowError] = useState(false);

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password, name, surname } = userData;

    if (email === "epicodeschool@gmail.com" && password === "FS202402") {
      dispatch(loginSuccess({ email, password, name, surname }));
      navigate("/home");
    } else {
      dispatch(loginError("Wrong credentials"));
      setShowError(true);
    }
  };

  return (
    <div className="login">
      <Container>
        <Row className="vh-100">
          <Col
            xs={10}
            sm={8}
            md={6}
            lg={4}
            className="mx-auto bg-dark p-4 rounded rounded-5 text-light my-auto"
            style={{ minHeight: "400px" }}
          >
            <div className="d-flex flex-column justify-content-between align-items-center h-100">
              <img
                src={logo}
                alt="Spotify logo"
                style={{ width: "40%" }}
                className="mb-3"
              />
              <div className="signin">
                <h5>SIGN IN</h5>
              </div>
              <Form className="w-100 p-4 text-center " onSubmit={handleSubmit}>
                <Form.Group>
                  <Form.Control
                    type="text"
                    placeholder="Name"
                    value={userData.name}
                    onChange={handleChange}
                    required
                    className="rounded rounded-pill mb-3 py-2"
                    size="lg"
                    name="name"
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Control
                    type="text"
                    placeholder="Surname"
                    value={userData.surname}
                    onChange={handleChange}
                    required
                    className="rounded rounded-pill mb-3 py-2"
                    size="lg"
                    name="surname"
                  />
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                  <Form.Control
                    type="email"
                    placeholder="Email: epicodeschool@gmail.com"
                    value={userData.email}
                    onChange={handleChange}
                    required
                    className="rounded rounded-pill mb-3 py-2"
                    size="lg"
                    name="email"
                  />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                  <Form.Control
                    type="password"
                    placeholder="Password: FS202402"
                    value={userData.password}
                    onChange={handleChange}
                    required
                    className="rounded rounded-pill mb-3 py-2"
                    size="lg"
                    name="password"
                  />
                </Form.Group>

                <hr />

                {showError && (
                  <div className="errorAuthenticateMessage">
                    Wrong Credentials
                  </div>
                )}

                <Button
                  className="btn w-100 rounded rounded-pill mt-4 p-3 loginButton fw-semibold"
                  type="submit"
                >
                  SIGN IN
                </Button>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Login;
