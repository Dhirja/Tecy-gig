import "./App.css";
import React, { useEffect, useState, useLayoutEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavbarComp } from "./Components/NavbarComp";
import ScrollToTopButton from "./Components/ScrolTopbutton";
import WhatsAppIntegration from "./Components/Watsppintegrate";
import { AmdminPage } from "./Components/AdminAuth/Admin-page/AmdminPage";
import ChatApp from "./Components/Chatboat";
import { useHistory } from "react-router-dom";

function App() {
  let token = localStorage.getItem("token");

  //get user current
  // const getUser = async () => {
  //   const res = await fetch("http://localhost:8080/api/v1/auth/current-user", {
  //     method: "GET",
  //     headers: {
  //       "Content-Type": "application/json",
  //       Authorization: `Bearer ${localStorage.getItem("token")} `,
  //     },
  //   });
  //   const data = await res.json();
  //   if (!data.success || !data) {
  //     console.log("current user not getted");
  //   } else {
  //     console.log("user verify", data.user.role);
  //     if (data.user.role == "admin") {
  //       // setLoginData(data);
  //       history.push("/admin-page");
  //     } else {
  //       // setLoginData(data);
  //       history.push("/hr-page");
  //     }
  //     // window.location.reload();
  //   }
  // };

  return (
    <div className="App">
      <NavbarComp />
      <WhatsAppIntegration />
      <ChatApp />
      <ScrollToTopButton />
    </div>
  );
}

export default App;
