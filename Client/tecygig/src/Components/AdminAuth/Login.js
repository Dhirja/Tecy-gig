import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "./AdminSignLogin.css";
import { useHistory, NavLink } from "react-router-dom";

export const Login = () => {
  const history = useHistory();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [formErrors, setFormErrors] = useState({});

  const validateForm = () => {
    const errors = {};

    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      errors.email = "Invalid email address";
    }

    if (formData.password.length < 6) {
      errors.password = "Password must be at least 6 characters";
    }
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      // Send the form data to the server here
      console.log("Form data:", formData);

      // You can use a library like Axios or the built-in fetch function to send the data to the server.
      // Example with fetch:
      fetch("http://localhost:8080/api/v1/auth/login", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Data sent to the server:", data);
          if (data.success == false) {
            alert("Invalid Credential");
          } else if (data.success && data.user.role == "admin") {
            alert(data.message);
            localStorage.setItem("token", data.token);
            history.push("/admin");
          } else if (data.success && data.user.role == "Hr") {
            localStorage.setItem("token", data.token);
            history.push("/Hr");
          }
        })
        .catch((error) => {
          console.error("Error sending data:", error);
        });

      setFormData({
        email: "",
        password: "",
      });
    }
  };

  return (
    <div className="signlog-main-container">
      <Container className="mt-5 ">
        <Row>
          <Col md={{ span: 6, offset: 3 }} className="border p-4 shadow">
            <h2>
              <img
                height={80}
                src="https://www.tecygig.com/img/tecygiglogo.png"
              />
            </h2>

            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formEmail">
                <Form.Label>Your Email</Form.Label>
                <Form.Control
                  className="responsive-input"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  isInvalid={formErrors.email}
                />
                <Form.Control.Feedback type="invalid">
                  {formErrors.email}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group>
                <Form.Label>Password</Form.Label>
                <Form.Control
                  className="responsive-input"
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                />
                {formErrors.password && (
                  <div className="text-danger">{formErrors.password}</div>
                )}
              </Form.Group>

              {/* <Form.Group>
                <Form.Label>Role</Form.Label>
                <Form.Control
                  className="responsive-input"
                  as="select"
                  name="role"
                  value={formData.role}
                  onChange={handleInputChange}
                >
                  <option value="" disabled>
                    Select Role
                  </option>
                  <option value="user">User</option>
                  <option value="admin">Admin</option>
                </Form.Control>
                <Form.Control.Feedback type="invalid">
                  {formErrors.selectedOption}
                </Form.Control.Feedback>
              </Form.Group> */}

              <div className="d-flex justify-content-between">
                <Button
                  className="responsive-button"
                  variant="primary"
                  type="Log In"
                >
                  Log In
                </Button>
                <p className="m-3">
                  Don't have an account?{" "}
                  <NavLink to="/profile">Sign Up</NavLink>
                </p>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
