import { BrowserRouter, Routes, Route } from "react-router-dom"
//components importation
import NavBar from "./NavBar";
import Home from "../pages/home/Home";
import Menu from "../pages/Menu";
import Cart from "../pages/Cart"
import Access from "../pages/account/Access"

const Navigation = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Menu" element={<Menu />} />
        <Route path="/" element={<Cart />} />
        <Route path="/" element={<Access />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Navigation