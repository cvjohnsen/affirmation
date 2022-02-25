import { Link } from "react-router-dom";
import logo from "../affirmation_logo.png";

const NavBar = () => {
  return (
    <nav style={container}>
      <div>
        <Link to="/">
          <img src={logo} width="40px" alt="" />
        </Link>
      </div>

      <Link to="/" style={{ color: "white" }}>
        Home
      </Link>
      <Link to="/affirmation" style={{ color: "white" }}>
        Affirmation
      </Link>
    </nav>
  );
};

const container = {
  display: "flex",
  justifyContent: "space-around",
  backgroundColor: "#E5CAD8",
  color: "white",
  height: "40px",
  fontFamily: "Architects Daughter",
};

export default NavBar;
