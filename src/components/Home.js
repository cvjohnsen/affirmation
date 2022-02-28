import { useState } from "react";
import logo from "../affirmation_logo.png";
import axios from "axios";

const Home = () => {
  const [affirmations, setAffirmations] = useState("");

  //Get Affirmation
  const handleClick = async () => {
    const data = await axios.get(
      "https://dulce-affirmations-api.herokuapp.com/affirmation"
    );
    console.log(data);
    setAffirmations(data.data[0].phrase);
  };

  return (
    <div style={fonts}>
      <h1>Pick Your Daily Affirmation!</h1>
      <img src={logo} width="300px" onClick={handleClick} alt="" />
      {/*Use Ternary if not array*/}
      {affirmations ? <h2>"{affirmations}"</h2> : ""}
    </div>
  );
};

const fonts = {
  fontFamily: "Architects Daughter",
  color: "#A1C6E1",
  fontSize: "20pt",
};

export default Home;
