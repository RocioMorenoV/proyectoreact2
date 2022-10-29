import Logo from "./Logo";
import "../styles/navBar.css";
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";
import { useCart } from "../context/Context";

const NavBar = () => {
  const { count } = useCart();
  return (
    <>
      <div className="navBar-Container">
        <Logo />
        <div className="navBar-Links">
          <li className="marginAuto">
            <Link to={`/category/1`} className="navBar-Links-Item">
              Dice
            </Link>
          </li>
          <li className="marginAuto">
            <Link to={`/category/2`} className="navBar-Links-Item">
              Manuals
            </Link>
          </li>
          <li className="marginAuto">
            <Link to={`/category/3`} className="navBar-Links-Item">
              Accesories
            </Link>
          </li>
          <li className="marginAuto">
            <Link to={`/category/4`} className="navBar-Links-Item">
              Maps
            </Link>
          </li>
          <Link to={`/cart`} className="navBar-Links-Item">
            <div className="cart-widget-containe">
              {count > 0 && <span className="cart-counter">{count}</span>}
              <CartWidget />
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};
export default NavBar;
