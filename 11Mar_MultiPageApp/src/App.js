import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Home from "./pages/Home";
import Weather from "./pages/Weather";
import About from "./pages/About";

function App() {
  return (
    <Router>
      <style>{`
        body { margin: 0; font-family: Arial; }
        nav {
          background: #333;
          color: white;
          padding: 15px;
          display: flex;
          justify-content: space-between;
        }
        a {
          color: white;
          margin: 0 10px;
          text-decoration: none;
        }
        a:hover {
          text-decoration: underline;
        }
      `}</style>

      <nav>
        <h2>My App</h2>
        <div>
          <Link to="/">Home</Link>
          <Link to="/weather">Weather</Link>
          <Link to="/about">About</Link>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/weather" element={<Weather />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;