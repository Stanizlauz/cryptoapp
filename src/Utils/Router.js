import React from "react";
// import ReactDOM from "react-dom/client";
import { Route, Routes } from "react-router-dom";
import AboutUs from "../component/AboutUs";
import Charts from "../component/Charts";
import ConfirmEmail from "../component/confirmEmail";
import Contact from "../component/Contact";
import Cryptohopper from "../component/Cryptohopper";
import FAQS from "../component/FAQS";
import ForgotPassword from "../component/ForgotPassword";
import HomePageBody from "../component/HomePageBody";
import Login from "../component/Login";
import NotFound from "../component/NotFound";
import Register from "../component/Register";
import ResetPassword from "../component/ResetPassword";
// import Slider from "../component/slider";
import AdminWallet from "../component/UserPages.js/AdminWallet";
import ChangePassword from "../component/UserPages.js/ChangePassword";
import Dashboard from "../component/UserPages.js/Dashboard";
import Deposit from "../component/UserPages.js/Deposit";
import EditProfile from "../component/UserPages.js/EditProfile";
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
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route exact path="/user/confirm/:id" element={<ConfirmEmail />} />
        <Route exact path="/user/resetpassword/:id" element={<ResetPassword />} />
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
        {/* <Route path="/slide" element={<Slider />} /> */}
        <Route path="/userprofile" element={<UserProfile />} />
        <Route path="/" element={<HomePageBody />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/faqs" element={<FAQS />} />
        <Route path="/charts" element={<Charts />} />
        <Route path="/hopper" element={<Cryptohopper />} />
        <Route path="/changepassword" element={<ChangePassword />} />
        <Route path="/contact" element={<Contact />} />
        <Route element={<ProtectedRoutes />}>
          <Route path="/admin/wallet" element={<AdminWallet />} />
          <Route path="/users" element={<UsersList />} />
        </Route>
        <Route path="/editprofile" element={<EditProfile />} />
        <Route path="/404" element={<NotFound />} />

        <Route path="*" element={<Dashboard />} />
      </Routes>
    </>
  );
}


