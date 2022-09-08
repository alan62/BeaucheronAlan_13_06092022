import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "../pages/Home/Home"
import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer"
import SignIn from "../pages/SignIn/SignIn"
import Profile from "../pages/Profile/Profile"
import PageNotFound from "../pages/PageNotFound/PageNotFound"
/**
 * Router
 * @returns {Router}
 */
const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<PageNotFound />} /> 
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default Router