import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
// import { Navigate } from "react-router-dom";
import Main from "./pages/main";
import ContactPage from "./pages/contact.js";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Main />} />
      <Route exact path="/contact" element={<ContactPage />} />
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
        <Link to="/portfolio">Go back to the home page</Link>
        {/* <Navigate to="/" /> */}
      </p>
    </div>
  );
}
