import Quote from "./Quote";
import axios from "axios";
import { useEffect, useState } from "react";

const Affirmation = () => {
  const [moreAffirmations, setMoreAffirmations] = useState("");

  //useEffect Fetch Affirmation
  useEffect(async () => {
    const data = await axios.get(
      "https://dulce-affirmations-api.herokuapp.com/affirmation"
    );
    console.log(data);
    setMoreAffirmations(data.data[0].phrase);
  }, []);

  //Don't use Button, use useEffect only!
  // const buttonClick = async () => {
  //   const data = await axios.get(
  //     "https://dulce-affirmations-api.herokuapp.com/affirmation"
  //   );
  //   console.log(data);
  //   setMoreAffirmations(data.data[0].phrase);
  // };

  return (
    <div style={fonts}>
      <h1>More Affirmations:</h1>

      <h2>
        <Quote ranData={moreAffirmations} />
      </h2>

      {/* <button onClick={buttonClick}>Affirmation</button> */}
    </div>
  );
};

const fonts = {
  fontFamily: "Architects Daughter",
  color: "#A1C6E1",
  fontSize: "20pt",
};
export default Affirmation;
