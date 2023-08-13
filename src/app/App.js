import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom/cjs/react-router-dom.min";
import NavBar from "../components/navbar/NavBar";
import api from "../api/axiosConfig";
import "./App.css";
import Home from "../components/home/Home";
import Archive from "../components/archive/Archive";
import Plants from "../components/plants/Plants";
import Seeds from "../components/seeds/Seeds";
import { useEffect, useState } from "react";

function App() {
  const [seeds, setSeeds] = useState([]);
  const [plants, setPlants] = useState([]);

  const getSeeds = async () => {
    try {
      const response = await api.get("/api/v1/seeds");

      setSeeds(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  const getPlants = async () => {
    try {
      const response = await api.get("/api/v1/plants");

      setPlants(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getSeeds();
    getPlants();
  }, []);

  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/seeds">
          <Seeds seeds={seeds} />
        </Route>
        <Route path="/plants">
          <Plants plants={plants} />
        </Route>
        <Route path="/archive">
          <Archive />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
