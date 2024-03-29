import React from "react";
import Header from "../common/header/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../home/Home";
import Footer from "../common/footer/Footer";
import Services from "../services/Services";
import Contact from "../contact/Contact";
import SignIn from "../signin/signin";
import Sewa from "../sewa/sewa";
import AddUser from "../contact/AddUser";
import Edit from "../contact/EditUser";
import MaybeShowHeader from "../Maybe/MaybeShowHeader/MaybeShowHeader";
import MaybeShowFooter from "../Maybe/MaybeShowFooter/MaybeShowFooter";

function Pages() {
  return (
    <>
      <Router>
        <MaybeShowHeader>
          <Header />
        </MaybeShowHeader>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/sewa" element={<Sewa />} />
          <Route path="/add" element={<AddUser />} />
          <Route path="/update/:id" element={<Edit />} />
        </Routes>
        <MaybeShowFooter>
          <Footer />
        </MaybeShowFooter>
      </Router>
    </>
  );
}

export default Pages;
