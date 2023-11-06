import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

function FormComponent() {
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      address: '',
      message: '',
    });
  
    const [formErrors, setFormErrors] = useState({});
  
    const validateForm = () => {
      const errors = {};
  
      if (!formData.name.trim()) {
        errors.name = 'Name is required';
      }
  
      if (!formData.email.trim()) {
        errors.email = 'Email is required';
      } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
        errors.email = 'Invalid email address';
      }
  
      if (!formData.address.trim()) {
        errors.address = 'Address is required';
      }
  
      if (!formData.message.trim()) {
        errors.message = 'Message is required';
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
        console.log('Form data:', formData);
        setFormData({
            name: '',
            email: '',
            address: '',
            message: '',
          });
  
        // You can use a library like Axios or the built-in fetch function to send the data to the server.
        // Example with fetch:
        // fetch('your-server-url', {
        //   method: 'POST',
        //   body: JSON.stringify(formData),
        //   headers: {
        //     'Content-Type': 'application/json',
        //   },
        // })
        //   .then((response) => response.json())
        //   .then((data) => {
        //     console.log('Data sent to the server:', data);
        //   })
        //   .catch((error) => {
        //     console.error('Error sending data:', error);
        //   });

        
      }
      

    };
  
    return (
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formName">
          <Form.Label>Name</Form.Label>
          <Form.Control
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
          <Form.Label>Email</Form.Label>
          <Form.Control
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
  
        <Form.Group controlId="formAddress">
          <Form.Label>Address</Form.Label>
          <Form.Control
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
  
        <Form.Group controlId="formMessage">
          <Form.Label>Message</Form.Label>
          <Form.Control
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
  
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    );
  }
  
  export default FormComponent;