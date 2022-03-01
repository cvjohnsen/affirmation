import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div style={container}>
      <Link to="/affirmation" style={{ color: "white" }}>
        <h3>Affirmation</h3>
      </Link>
      <h3>Terms & Condition</h3>
      <h3>Contact</h3>
    </div>
  );
};

const container = {
  display: "flex",
  justifyContent: "space-around",
  backgroundColor: "#A1C6E1",
  fontFamily: "Architects Daughter",
  color: "#FFFFFF",
  marginTop: "300px",
};

export default Footer;
