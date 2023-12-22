import React from "react";
import Header from "../common/header/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../home/Home";
import Footer from "../common/footer/Footer";
import About from "../about/About";
import Services from "../services/Services";
import Contact from "../contact/Contact";
import SignIn from "../signin/signin";
import SignUp from "../Signup/signup";
import Sewa from "../sewa/sewa";
import AddUser from "../contact/AddUser";
import Edit from "../contact/EditUser";

function Pages() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/sewa" element={<Sewa />} />
          <Route path="/add" element={<AddUser />} />
          <Route path="/update/:id" element={<Edit />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default Pages;
