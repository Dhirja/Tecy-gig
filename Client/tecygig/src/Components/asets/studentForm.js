import React, { useState } from "react";
import "./UserForm.css";
import { Form, Button, Toast } from "react-bootstrap";
import axios from "axios";

const ResmeForm = () => {
  const [title, setTitle] = useState("");
  const [file, setFile] = useState("");

  const [showSuccessToast, setShowSuccessToast] = useState(false);
  const [showErrorToast, setShowErrorToast] = useState(false);

  const addUserData = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", title);
    formData.append("file", file);
    console.log(title, file);

    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };
    const res = await axios.post(
      "http://localhost:8080/api/v1/std/studentform",
      formData,
      config
    );

    if (res.data.status === 401 || !res.data) {
      console.log("errror");
      setShowErrorToast(true);
    } else {
      console.log(res);
      setShowSuccessToast(true);
      setTitle("");
      setFile("");
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
      <form
        style={{
          display: "flex",
          maxWidth: "400px",
          flexDirection: "column",
          alignItems: "center",
          margin: "auto",
          backgroundColor: "#fff",
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
          marginTop: "20px",
        }}
        onSubmit={addUserData}
      >
        <input
          placeholder="write your name"
          style={{
            marginBottom: "20px",
            width: "100%",
            padding: "8px",
            marginBottom: "16px",
            boxSizing: "border-box",
            border: "1px solid #ccc",
            borderRadius: "4px",
            fontSize: "16px",
          }}
          label="Name"
          variant="outlined"
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <label htmlFor="image-upload">
          <input
            style={{
              marginBottom: "20px",
              width: "100%",
              padding: "8px",
              marginBottom: "16px",
              boxSizing: "border-box",
              border: "1px solid #ccc",
              borderRadius: "4px",
              fontSize: "16px",
              overflow: "hidden",
            }}
            id="image-upload"
            type="file"
            accept="application/pdf"
            onChange={(e) => setFile(e.target.files[0])}
            required
          />
        </label>
        <button className="btns" type="submit" variant="contained">
          Submit
        </button>
      </form>
      {/* Success Toast */}
    </>
  );
};

export default ResmeForm;
