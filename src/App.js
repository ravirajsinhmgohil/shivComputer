import React from "react";
import Gallery from "./pages/gallery/Gallery";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Blog from "./pages/blog/Blog";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Course from "./pages/course/Course";
import Home from "./pages/home/Home";
import BlogDetail from "./pages/blog/BlogDetail";
import Contact from "./pages/contact/Contact";
import About from "./pages/about/About";

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blogDetail/:id" element={<BlogDetail />} />
          <Route path="/course" element={<Course />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default App;
