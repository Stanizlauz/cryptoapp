import React from "react";
// import ReactDOM from "react-dom/client";
import { Route, Routes } from "react-router-dom";
import AboutUs from "./component/AboutUs";
import Contact from "./component/Contact";
import FAQS from "./component/FAQS";
import HomePageBody from "./component/HomePageBody";
import Login from "./component/Login";
import Register from "./component/Register";


export default function Router() {
  return (
    <>
      <Routes>
      <Route  path="/" element={<HomePageBody />} />
      <Route  path="/about" element={<AboutUs />} />
      <Route  path="/faqs" element={<FAQS />} />
      <Route  path="/contact" element={<Contact />} />


        <Route  path="*" element={<HomePageBody />} />
      </Routes>
    </>
  );
}

export function AppRoutes() {
  return (
    <>
      <Routes>
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />

        <Route  path="*" element={<Login />} />

      </Routes>
    </>
  );
}
