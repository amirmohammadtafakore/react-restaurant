import React, { createContext, useContext, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home"
import Foods from "./pages/Foods";
import Cart from "./pages/Cart";
import AboutUs from "./pages/AboutUs";
import Header from "./components/Header";
import SingleFood from "./pages/SingleFood";

export const ThemeContext = createContext();
export default function App() {
  const [theme , setTheme] = useState('dark')
  return (
    <>
      <ThemeContext.Provider value={{theme , setTheme}}>
        <BrowserRouter>
          <div className="flex flex-row">
            <Header />
            <Routes >
              <Route path="/" element={<Home />} />
              <Route path="/foods" element={<Foods />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/aboutus" element={<AboutUs />} />
              <Route path="/singlefood/*" element={<SingleFood />} />
              <Route path="/*" element={<h1>Page Not Found 404</h1>} />
            </Routes>
          </div>
        </BrowserRouter>
      </ThemeContext.Provider>
    </>

  )
}
