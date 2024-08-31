import React from "react";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Upload from "./Components/Upload";
import Table from "./Components/Table";
import About from "./Components/About";
import Report from "./Components/Report";

function App() {
  return (
      <Router>
      <div className="flex flex-col min-h-screen">
        <div className="flex-grow">
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/upload" element={<Upload />} />
          <Route path="/table" element={<Table />} />{" "}
          <Route path="/about" element={<About />} />
          <Route path="/report" element={<Report />} />
        </Routes>
        </div>
      <Footer />
      </div>
      </Router>

  );
}

export default App;
