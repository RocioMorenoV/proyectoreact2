import "../styles/navBar.css";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to={`/`}>
      <div className="flexContainer">
        <img
          src="https://cdn-icons-png.flaticon.com/512/246/246569.png"
          alt="yoast seo"
          height="75"
          width="75"
        />
        <h1>Critical Hit</h1>
      </div>
    </Link>
  );
};
export default Logo;
