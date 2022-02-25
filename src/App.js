import { Switch, Route } from "react-router-dom";
import "./App.css";

import Home from "./components/Home";
import Affirmation from "./components/Affirmation";

import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App" style={body}>
      <NavBar />
      <Switch>
        <Route path="/affirmation" component={Affirmation} />
        <Route path="/" component={Home} />
      </Switch>
      <Footer />
    </div>
  );
}
const body = {
  backgroundColor: "#f9f9f9",
};

export default App;
