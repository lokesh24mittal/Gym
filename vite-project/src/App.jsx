import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Calculator from "./components/Calculator";
import NavBar from "./components/NavBar";
import FeeDetails from "./components/FeeDetails";
import Home from "./components/Home";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calculate" element={<Calculator />} />
        <Route path="/feeDetails" element={<FeeDetails />} />
      </Routes>
    </>
  );
}

export default App;
