import Logo from "./Logo";
import "../styles/navBar.css";
import CartWidget from "./CartWidget";

const NavBar = () => {
  return (
    <>
      <div className="navBar-Container">
        <Logo />
        <div className="navBar-Links">
          <li className="marginAuto">
            <a href="" className="navBar-Links-Item">
              Dice
            </a>
          </li>
          <li className="marginAuto">
            <a href="" className="navBar-Links-Item">
              Manuals
            </a>
          </li>
          <li className="marginAuto">
            <a href="" className="navBar-Links-Item">
              Accesories
            </a>
          </li>
          <li className="marginAuto">
            <a href="" className="navBar-Links-Item">
              Maps
            </a>
          </li>
          <CartWidget />
        </div>
      </div>
    </>
  );
};
export default NavBar;
