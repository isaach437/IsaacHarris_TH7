import React from "react";
import { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [uName, setUName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [num, setNumber] = useState("");

  return (
    <form className="App">
      <label htmlFor="name">Full Name:</label>
      <input type="text" id="name"></input>

      <label htmlFor="userName">Username:</label>
      <input type="text" id="userName"></input>

      <label htmlFor="email">Email:</label>
      <input type="text" id="email"></input>

      <label htmlFor="address">Address:</label>
      <input type="text" id="address"></input>

      <label htmlFor="pnum">Phone Number:</label>
      <input type="text" id="pnum"></input>

      <input
        type="submit"
        onClick={(event) => {
          event.preventDefault();
          setName(document.getElementById("name").value);
          setUName(document.getElementById("userName").value);
          setEmail(document.getElementById("email").value);
          setAddress(document.getElementById("address").value);
          setNumber(document.getElementById("pnum").value);
          console.log("Name: " + name);
          console.log("Username: " + uName);
          console.log("Email: " + email);
          console.log("Address: " + address);
          console.log("Number: " + num);
        }}
      ></input>
    </form>
  );
}

export default App;
