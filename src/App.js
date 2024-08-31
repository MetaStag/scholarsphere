import React from "react";
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Upload from "./Components/Upload";
import Table from "./Components/Table";
import About from "./Components/About";
import Report from "./Components/Report";

function App() {
  return (
    <div className="data-theme='light'">
      <Router>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/upload" element={<Upload />} />
          <Route path="/table" element={<Table />} />{" "}
          <Route path="/about" element={<About />} />
          <Route path="/report" element={<Report />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
