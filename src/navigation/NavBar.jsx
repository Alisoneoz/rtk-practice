import { NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const NavBar = () => {
  return (
    <div>
      <NavLink to="/">Home</NavLink>
      <HashLink to="/#About">About Us</HashLink>
      <NavLink to="/Menu">Menu</NavLink>
      <NavLink to="/Cart">Cart</NavLink>
    </div>
  )
}

export default NavBar