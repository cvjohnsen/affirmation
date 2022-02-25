const Footer = () => {
  return (
    <div style={container}>
      <h3>Terms & Condition</h3>
      <h3>Contact</h3>
      <h3>More Affirmations</h3>
    </div>
  );
};

const container = {
  display: "flex",
  justifyContent: "space-around",
  backgroundColor: "#A1C6E1",
  fontFamily: "Architects Daughter",
  color: "#FFFFFF",
  marginTop: "350px",
};

export default Footer;
