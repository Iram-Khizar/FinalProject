import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./pages/Home";
import Cars from "./pages/Cars";
import About from "./pages/About";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="cars" element={<Cars />} />
          <Route path="About" element={<About />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
