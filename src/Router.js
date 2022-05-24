import React from "react";
// import ReactDOM from "react-dom/client";
import { Route, Routes } from "react-router-dom";
import AboutUs from "./component/AboutUs";
import Contact from "./component/Contact";
import FAQS from "./component/FAQS";
import HomePageBody from "./component/HomePageBody";
import Login from "./component/Login";
import Register from "./component/Register";
import Dashboard from "./component/UserPages.js/Dashboard";
import Deposit from "./component/UserPages.js/Deposit";
import Plans from "./component/UserPages.js/Plans";
import Profile from "./component/UserPages.js/Profile";
import Transaction from "./component/UserPages.js/Transaction";
import Withdraw from "./component/UserPages.js/Withdraw";


export default function Router() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePageBody />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/faqs" element={<FAQS />} />
        <Route path="/contact" element={<Contact />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />

        <Route path="*" element={<Login />} />
      </Routes>
    </>
  );
}

export function AppRoutes() {
  return (
    <>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/deposit" element={<Deposit />} />
        <Route path="/plans" element={<Plans />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/transactions" element={<Transaction />} />
        <Route path="/withdraw" element={<Withdraw />} />

        <Route path="*" element={<Dashboard />} />

      </Routes>
    </>
  );
}
