import React from 'react';
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Upload from "./Components/Upload";

function App() {
  return (
    <div>
    <Navbar></Navbar>
      <Router>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/upload" element={<Upload />} />
        </Routes>
z    </Router>
    <Footer></Footer>
    </div>

  );
}

export default App;
