import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Upload from "./Components/Upload";
import Report from "./Components/Report";

function App() {
  return (
    <div>
      <Router>
    <Navbar></Navbar>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/report" element={<Report />} />
        </Routes>
z    </Router>
    <Footer></Footer>
    </div>

  );
}

export default App;
