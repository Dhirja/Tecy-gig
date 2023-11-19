import React, { useState } from "react";
import { Form, Button, Toast } from "react-bootstrap";
import "./UserForm.css";

function FormComponent() {
  const [showSuccessToast, setShowSuccessToast] = useState(false);
  const [showErrorToast, setShowErrorToast] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    selectedOption: "",
    message: "",
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

    if (!formData.phone.trim()) {
      errors.phone = "Phone number is required";
    } else if (!/^\d{10}$/.test(formData.phone)) {
      errors.phone = "Invalid phone numbe (10 digit)";
    }

    if (!formData.address.trim()) {
      errors.address = "Address is required";
    }

    if (!formData.selectedOption) {
      errors.selectedOption = "Please select an option";
    }

    if (!formData.message.trim()) {
      errors.message = "Message is required";
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
      fetch("http://localhost:8080/api/v1/customer/register", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((data) => {
          setShowSuccessToast(true);
          console.log("Data sent to the server:", data);
        })
        .catch((error) => {
          console.error("Error sending data:", error);
        });

      setFormData({
        name: "",
        email: "",
        phone: "",
        address: "",
        selectedOption: "",
        message: "",
      });
    }
  };

  return (
    <>
      <Toast
        show={showSuccessToast}
        onClose={() => setShowSuccessToast(false)}
        delay={6000}
        autohide
      >
        <Toast.Header>
          <strong className="mr-auto">Success!</strong>
        </Toast.Header>
        <Toast.Body style={{ color: "green", fontSize: "16px" }}>
          Your form was submitted successfully. Our team will respond you in
          your email soon
        </Toast.Body>
      </Toast>
      {/* Error Toast */}
      <Toast
        show={showErrorToast}
        onClose={() => setShowErrorToast(false)}
        delay={3000}
        autohide
      >
        <Toast.Header>
          <strong className="mr-auto">Error!</strong>
        </Toast.Header>
        <Toast.Body style={{ color: "red", fontSize: "16px" }}>
          There was an error submitting your form. Please try again.
        </Toast.Body>
      </Toast>
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
          <Form.Label>Phone Number</Form.Label>
          <Form.Control
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            isInvalid={!!formErrors.phone}
          />
          <Form.Control.Feedback type="invalid">
            {formErrors.phone}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="formAddress">
          <Form.Label>Address</Form.Label>
          <Form.Control
            className="responsive-input"
            type="text"
            name="address"
            value={formData.address}
            onChange={handleInputChange}
            isInvalid={formErrors.address}
          />
          <Form.Control.Feedback type="invalid">
            {formErrors.address}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group>
          <Form.Label>Select Your Price Range:</Form.Label>
          <Form.Control
            className="responsive-input"
            as="select"
            name="selectedOption"
            value={formData.selectedOption}
            onChange={handleInputChange}
            isInvalid={!!formErrors.selectedOption}
          >
            <option value="" disabled>
              Select an option
            </option>
            <option value="10000-20000 Rs"> 10000-20000 Rs</option>
            <option value="20000-40000 Rs"> 20000-40000 Rs</option>
            <option value="40000-70000 Rs"> 40000-70000 Rs</option>
            <option value=">70000Rs"> More than 70000 Rs</option>
          </Form.Control>
          <Form.Control.Feedback type="invalid">
            {formErrors.selectedOption}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="formMessage">
          <Form.Label>Message</Form.Label>
          <Form.Control
            className="responsive-input"
            as="textarea"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            isInvalid={formErrors.message}
          />
          <Form.Control.Feedback type="invalid">
            {formErrors.message}
          </Form.Control.Feedback>
        </Form.Group>

        <Button className="responsive-button" variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
}

export default FormComponent;
