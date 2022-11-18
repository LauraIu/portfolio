import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
// import { Navigate } from "react-router-dom";
import Home from "./pages/index.js";
import ContactPage from "./pages/contact.js";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}

export default App;

function ErrorPage() {
  return (
    <div className="error-page">
      <h1>404 </h1>
      <h2>Something went wrong!</h2>
      <hr />
      <p>
        <Link to="/">Go back to the home page</Link>
        {/* <Navigate to="/" /> */}
      </p>
    </div>
  );
}
