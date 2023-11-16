import "./Adminpage.css";
import React, { useEffect, useState } from "react";
import { Table, Button } from "react-bootstrap";
import { Footer } from "../../Footer";
import axios from "axios";

export const AmdminPage = () => {
  const [users, setUsers] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "http://localhost:8080/api/v1/custdata/customardata"
      );
      const result = await response.json();
      setUsers(result.getCustomarQuery);
      console.log(users);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleUpdate = (id) => {
    // Add your update logic here
    console.log(`Update item with id ${id}`);
  };

  const handleDelete = async (id) => {
    // Add your delete logic here
    const res = await axios.delete(
      `http://localhost:8080/api/v1/custdata/${id}`,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (res.data.status === 401 || !res.data) {
      console.log("errror");
    } else {
      console.log(`Delete item with id ${id}`);
      fetchData();
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className="adminpage-main-container">
        <Table striped bordered hover style={{ textAlign: "center" }}>
          <thead>
            <tr>
              <th>Username</th>
              <th>Email</th>
              <th>Phone-No.</th>
              <th>Address</th>
              <th>Price-Range</th>
              <th>Message</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users?.map((user) => (
              <tr key={user._id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>{user.address}</td>
                <td>{user.selectedOption}</td>
                <td>{user.message}</td>
                <td>
                  {/* <Button
                    variant="info"
                    // onClick={() => handleUpdate(users._id)}
                  >
                    Update
                  </Button>{" "} */}
                  <Button
                    variant="danger"
                    onClick={() => handleDelete(user._id)}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
      <Footer />
    </>
  );
};
