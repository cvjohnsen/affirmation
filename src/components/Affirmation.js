import Home from "./Home";

const Affirmation = ({ data }) => {
  return (
    <div style={fonts}>
      <h1>More Affirmations</h1>
      <h2>{data}</h2>
   
    </div>
  );
};

const fonts = {
  fontFamily: "Architects Daughter",
  color: "#A1C6E1",
  fontSize: "20pt",
};
export default Affirmation;