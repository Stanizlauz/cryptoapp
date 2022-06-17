import React from "react";
// import ReactDOM from "react-dom/client";
import { Route, Routes } from "react-router-dom";
import AboutUs from "../component/AboutUs";
import Contact from "../component/Contact";
import FAQS from "../component/FAQS";
import HomePageBody from "../component/HomePageBody";
import Login from "../component/Login";
import NotFound from "../component/NotFound";
import Register from "../component/Register";
import AdminWallet from "../component/UserPages.js/AdminWallet";
import Dashboard from "../component/UserPages.js/Dashboard";
import Deposit from "../component/UserPages.js/Deposit";
import EditTransaction from "../component/UserPages.js/EditTransaction";
import Plans from "../component/UserPages.js/Plans";
import Profile from "../component/UserPages.js/Profile";
import Transaction from "../component/UserPages.js/Transaction";
import UserProfile from "../component/UserPages.js/UserProfile";
import UsersList from "../component/UserPages.js/UsersList";
import ViewTransaction from "../component/UserPages.js/ViewTransaction";
import Withdraw from "../component/UserPages.js/Withdraw";
import ProtectedRoutes from "./ProtectedRoutes";


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
        <Route path="/edittransactions/:id" element={<EditTransaction />} />
        <Route path="/viewtransactions/:id" element={<ViewTransaction />} />
        <Route path="/withdraw" element={<Withdraw />} />
        <Route path="/userprofile" element={<UserProfile />} />
        <Route path="/" element={<HomePageBody />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/faqs" element={<FAQS />} />
        <Route path="/contact" element={<Contact />} />
        <Route element={<ProtectedRoutes />}>
          <Route path="/admin/wallet" element={<AdminWallet />} />
          <Route path="/users" element={<UsersList />} />
        </Route>
        <Route path="/404" element={<NotFound />} />

        <Route path="*" element={<Dashboard />} />
      </Routes>
    </>
  );
}


