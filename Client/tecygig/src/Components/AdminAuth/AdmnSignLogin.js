import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Alert } from "react-bootstrap";
import "./AdminSignLogin.css";
import { useHistory, NavLink } from "react-router-dom";

const AdmnSignLogin = () => {
  const history = useHistory();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "",
  });

  const [formErrors, setFormErrors] = useState({});

  const validateForm = () => {
    const errors = {};

    if (!formData.name.trim()) {
      errors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      errors.email = "Invalid email address";
    }

    if (formData.password.length < 6) {
      errors.password = "Password must be at least 6 characters";
    }

    if (!formData.role) {
      errors.role = "Please select an option";
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

      fetch("http://localhost:8080/api/v1/auth/signup", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Data sent to the server:", data);
          if (data.message == "Email already registered") {
            alert("user already exist please go to the log In");
          } else if (data.message == "Admin role is already exist") {
            alert("Admin role is already exist");
          } else {
            alert(`you are successfully Signed In as ${data.user.role}`);
            history.push("/login");
          }
        })
        .catch((error) => {
          console.error("Error sending data:", error);
        });

      setFormData({
        name: "",
        email: "",
        password: "",
        role: "",
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
              <Form.Group controlId="formName">
                <Form.Label>Your Name</Form.Label>
                <Form.Control
                  className="responsive-input"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  isInvalid={formErrors.name}
                />
                <Form.Control.Feedback type="invalid">
                  {formErrors.name}
                </Form.Control.Feedback>
              </Form.Group>

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

              <Form.Group>
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
                  <option value="Hr">Hr</option>
                  <option value="admin">Admin</option>
                </Form.Control>
                {formErrors.role && (
                  <div className="text-danger">{formErrors.role}</div>
                )}
              </Form.Group>

              <div className="d-flex justify-content-between">
                <Button
                  className="responsive-button"
                  variant="primary"
                  type="submit"
                >
                  Sign Up
                </Button>

                <p className="m-3">
                  Already have an account? <NavLink to="/login">Log In</NavLink>
                </p>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AdmnSignLogin;
