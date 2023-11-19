import React, { useState, useEffect, useContext } from "react";
import { LoginContext } from "../../ContextProvider/Context";
import { Form, Button, Table, Container, Modal, Alert } from "react-bootstrap";
import "./Hrpage.css";
import { Footer } from "../../Footer";
import axios from "axios";
import { useHistory } from "react-router-dom";

const HrPage = () => {
  const { logindata, setLoginData } = useContext(LoginContext);
  const getUser = async () => {
    const res = await fetch("http://localhost:8080/api/v1/auth/current-user", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")} `,
      },
    });
    const data = await res.json();
    if (!data.success) {
      console.log("current user not getted");
    } else {
      console.log("user verify", data);

      if (data?.user?.role == "admin") {
        const userData = JSON.stringify(data.user);
        localStorage.setItem("userData", userData);
        const userDatas = JSON.parse(localStorage.getItem("userData"));
        setLoginData(userDatas);
        console.log(logindata);
        history.push("/admin");
      } else {
        const userData = JSON.stringify(data.user);
        localStorage.setItem("userData", userData);
        const userDatas = JSON.parse(localStorage.getItem("userData"));
        setLoginData(userDatas);
        console.log(logindata);
        history.push("/Hr");
      }
    }
  };

  const history = useHistory();
  // jobs data getting part **********************************************
  const [jobsdata, setjobsData] = useState(null);
  const fetchjobsData = async () => {
    try {
      const response = await fetch(
        "http://localhost:8080/api/v1/job/getalljobs"
      );
      const result = await response.json();
      setjobsData(result.jobs);
      console.log(jobsdata);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handlejobDelete = async (id) => {
    const res = await axios.delete(`http://localhost:8080/api/v1/job/${id}`, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (res.data.status === 401 || !res.data) {
      console.log("errror");
    } else {
      console.log(`Delete item with id ${id}`);
      alert("deleted Successgully");
      fetchjobsData();
    }
  };

  //**********resumes section related code start*******************
  const [allImage, setAllImage] = useState(null);
  const [pdfFile, setPdfFile] = useState(null);

  const [showModal, setShowModal] = useState(false);
  const handleCloseModal = () => {
    setShowModal(false);
  };
  const getPdf = async () => {
    try {
      const result = await axios.get(
        "http://localhost:8080/api/v1/job/getResume"
      );
      console.log(result.data.getResume);
      setAllImage(result.data.getResume);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  const showPdf = (pdf) => {
    // window.open(`http://localhost:5000/files/${pdf}`, "_blank", "noreferrer");
    setPdfFile(`http://localhost:8080/files/${pdf}`);
    setShowModal(true);
    console.log(pdfFile);
  };
  const handleDelete = async (resume_id) => {
    // Add your delete logic here
    const res = await axios.delete(
      `http://localhost:8080/api/v1/job/resume-delete/${resume_id}`,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (res.data.status === 401 || !res.data) {
      console.log("errror");
    } else {
      console.log(`Delete item with id ${resume_id}`);
      getPdf();
    }
  };

  useEffect(() => {
    getUser();
    fetchjobsData();
    getPdf();
  }, []);

  //****************job creation form related section code start****************
  const [formData, setFormData] = useState({
    position: "",
    experience: "",
    openings: "",
  });
  // State to manage validation errors
  const [errors, setErrors] = useState({});
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    // Clear validation error when user starts typing
    setErrors({
      ...errors,
      [name]: null,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple validation
    const newErrors = {};
    if (!formData.position.trim()) {
      newErrors.position = "Position is required.";
    }
    if (!formData.experience.trim()) {
      newErrors.experience = "Experience is required.";
    }
    if (!formData.openings.trim()) {
      newErrors.openings = "Openings is required.";
    }

    // If there are validation errors, set them in the state and prevent form submission
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    fetch("http://localhost:8080/api/v1/job/createjob", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Data submitted successfully:", data);
        fetchjobsData();
        alert("Job Created successfully");

        // You can perform further actions here after successful submission
      })
      .catch((error) => {
        console.error("Error submitting data:", error);
        // Handle error scenarios
      });

    setFormData({
      position: "",
      experience: "",
      openings: "",
    });
  };

  // **********hr logout part **********************************************************
  // const hruser = JSON.parse(localStorage.getItem("userData"));
  const handleLogout = async (id) => {
    // Add your delete logic here
    const res = await axios.delete(`http://localhost:8080/api/v1/auth/${id}`, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!res.success) {
      localStorage.clear();
      history.push("/profile");
      setLoginData(false);
      alert("Logout Successfully");
    } else {
      console.log(`user not logged out`);
    }
  };

  return (
    <>
      <div className="hr-main-container">
        <Button variant="danger" onClick={() => handleLogout(logindata?._id)}>
          Log Out
        </Button>
        <h1 style={{ textAlign: "center" }}>Welcome to Hr Section</h1>
        <Form onSubmit={handleSubmit} className="p-2 m-3 shadow">
          {/* Position Field */}
          <Form.Group controlId="position">
            <Form.Label>Position</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter position"
              name="position"
              value={formData.position}
              onChange={handleInputChange}
              isInvalid={!!errors.position}
            />
            <Form.Control.Feedback type="invalid">
              {errors.position}
            </Form.Control.Feedback>
          </Form.Group>
          {/* Experience Field */}
          <Form.Group controlId="experience">
            <Form.Label>Experience</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter experience"
              name="experience"
              value={formData.experience}
              onChange={handleInputChange}
              isInvalid={!!errors.experience}
            />
            <Form.Control.Feedback type="invalid">
              {errors.experience}
            </Form.Control.Feedback>
          </Form.Group>
          {/* Openings Field */}
          <Form.Group controlId="openings">
            <Form.Label>Openings</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter openings"
              name="openings"
              value={formData.openings}
              onChange={handleInputChange}
              isInvalid={!!errors.openings}
            />
            <Form.Control.Feedback type="invalid">
              {errors.openings}
            </Form.Control.Feedback>
          </Form.Group>
          {/* Submit Button */}
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>

      <h1 style={{ textAlign: "center" }}>All Jobs Created</h1>
      <Container>
        <Table striped bordered hover style={{ textAlign: "center" }}>
          <thead>
            <tr>
              <th>Experience</th>
              <th>Openings</th>
              <th>Position </th>
            </tr>
          </thead>
          <tbody>
            {jobsdata?.map((job) => (
              <tr key={job._id}>
                <td>{job.experience}</td>
                <td>{job.openings}</td>
                <td>{job.position}</td>
                <td>
                  {/* <Button
                    variant="info"
                    // onClick={() => handleUpdate(jobs._id)}
                  >
                    Update
                  </Button>{" "} */}
                  <Button
                    variant="danger"
                    onClick={() => handlejobDelete(job._id)}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>

      <h1 style={{ textAlign: "center" }}>Students Resume</h1>
      <Container style={{ textAlign: "center" }}>
        <Table striped bordered hover sm={8}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {allImage?.map((item) => (
              <tr key={item._id}>
                <td>{item.title}</td>
                <td>
                  <Button variant="primary" onClick={() => showPdf(item.pdf)}>
                    View Resume
                  </Button>{" "}
                  {/* <Button
                    variant="success"
                    // onClick={() => handleDownloadPDF(item.pdfLink)}
                  >
                    Download PDF
                  </Button> */}
                  <Button
                    variant="danger"
                    onClick={() => handleDelete(item._id)}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>

      <Modal show={showModal} onHide={handleCloseModal} size="lg" centered>
        <Modal.Header closeButton>
          <Modal.Title>PDF Viewer</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <iframe
            title="PDF Viewer"
            src={pdfFile}
            width="100%"
            height="500px"
          ></iframe>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default HrPage;
