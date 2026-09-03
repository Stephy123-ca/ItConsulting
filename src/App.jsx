import React from "react";
// import AdminHome from "./components/AdminHomes/AdminHome";
import { Route, Routes } from "react-router-dom";
import UserHome from "./components/Home/UserHome";
import Login from "./pages/Login";
import UserAbout from "./pages/UserAbout";
import UserServices from "./pages/UserServices";
import UserContact from "./pages/UserContact";
import UserFeedBack from "./pages/UserFeedBack";
import UserTestimonal from "./pages/UserTestimonal";
import UserCareer from "./pages/UserCareer";
import UserPortfolio from "./pages/UserPortfolio";
import UserBlogs from "./pages/UserBlogs";
import AdminLogin from "./pages/AdminLogin";


const App = () => {
  return (
    <>
 <Routes>
  <Route path="/" element={<UserHome/>}/>
        <Route path="/user-login" element={<Login />} />
        <Route path="/user-about" element={<UserAbout />} />
        <Route path="/user-service" element={<UserServices />} />
        <Route path="/user-testimonal" element={<UserTestimonal />} />
        <Route path="/user-feedback" element={<UserFeedBack />} />
        <Route path="/user-contact" element={<UserContact />} />
        <Route path="/user-career" element={<UserCareer />} />
        <Route path="/user-portfolio" element={<UserPortfolio />} />
        <Route path="/user-blog" element={<UserBlogs />} />
        {/* <Route path="/admin-login" element={<AdminLogin />} /> */}
 </Routes>
    </>
  );
};

export default App;
