import { useState } from "react";

const Form = (props) => {
  const [newAffirmation, setNewAffirmation] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newAffirm = {
      newAffirmation: newAffirmation,
    };
    console.log(newAffirm);
    //Updating State adding in new affirmation
    props.setMoreAffirmations((prevState) => [newAffirm, ...prevState]);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="newAffirmation"
        value={newAffirmation}
        onChange={(e) => setNewAffirmation(e.target.value)}
      />
      <br />
      <input type="submit" />
    </form>
  );
};

export default Form;
