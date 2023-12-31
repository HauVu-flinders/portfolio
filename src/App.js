import "./App.css";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Project from "./components/Project";
import Contact from "./components/Contact";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Navbar />
      <div className="main">
        <Routes>
          <Route index element={<About />} />
          <Route path="/project" element={<Project />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
