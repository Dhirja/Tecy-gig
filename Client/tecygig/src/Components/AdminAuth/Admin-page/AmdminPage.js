import "./Adminpage.css";
import React, { useEffect, useState, useContext } from "react";
import { LoginContext } from "../../ContextProvider/Context";
import { Table, Button } from "react-bootstrap";
import { Footer } from "../../Footer";
import axios from "axios";
import { useHistory } from "react-router-dom";

export const AmdminPage = () => {
  const [users, setUsers] = useState([]);
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
    getUser();
  }, []);

  console.log(logindata?._id);
  const handleAdminLogout = async (id) => {
    // Add your delete logic here
    const res = await axios.delete(`http://localhost:8080/api/v1/auth/${id}`, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!res.success) {
      localStorage.clear();
      setLoginData(false);
      history.push("/profile");
      alert("Logout Successfully");
    } else {
      console.log(`Delete item with id ${id}`);
    }
  };
  return (
    <>
      <div className="adminpage-main-container">
        <Button
          variant="danger"
          onClick={() => handleAdminLogout(logindata?._id)}
        >
          Log Out
        </Button>
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
