import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import './UserForm.css'

function FormComponent() {
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      address: '',
      selectedOption: '',
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

      if (!formData.selectedOption) {
        errors.selectedOption = 'Please select an option';
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

        //for empty the form field
        setFormData({
            name: '',
            email: '',
            address: '',
            selectedOption: '',
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
      <Form onSubmit={handleSubmit} >
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
        >
          <option value="" disabled>
            Select an option
          </option>
          <option value="option1"> 5000-10000 Rs</option>
          <option value="option2"> 10000-20000 Rs</option>
          <option value="option3"> 20000-40000 Rs</option>
        </Form.Control>
        <div className="text-danger">{formErrors.selectedOption}</div>
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
  
        <Button  className='responsive-button' variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    );
  }
  
  export default FormComponent;