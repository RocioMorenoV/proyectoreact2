import Logo from "./Logo";
import "../styles/navBar.css";
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <div className="navBar-Container">
        <Logo />
        <div className="navBar-Links">
          <li className="marginAuto">
            <Link to={`/item/1`} className="navBar-Links-Item">
              Dice
            </Link>
          </li>
          <li className="marginAuto">
            <Link to={`/item/2`} className="navBar-Links-Item">
              Manuals
            </Link>
          </li>
          <li className="marginAuto">
            <Link to={`/item/3`} className="navBar-Links-Item">
              Accesories
            </Link>
          </li>
          <li className="marginAuto">
            <Link to={`/item/4`} className="navBar-Links-Item">
              Maps
            </Link>
          </li>
          <CartWidget />
        </div>
      </div>
    </>
  );
};
export default NavBar;
