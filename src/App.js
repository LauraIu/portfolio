import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages";
import ContactPage from "./pages/contact";
import "./app.css";

function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="contact" element={<ContactPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
