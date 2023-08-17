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

  const [seedsPage, setSeedsPage] = useState(0);
  const [plantsPage, setPlantsPage] = useState(0);

  const getSeeds = async (page) => {
    try {
      const response = await api.get(`/api/v1/seeds/${page}`);

      setSeeds(response.data.content);
    } catch (err) {
      console.log(err);
    }
  };

  const getPlants = async (page) => {
    try {
      const response = await api.get(`/api/v1/plants/${page}`);

      setPlants(response.data.content);
    } catch (err) {
      console.log(err);
    }
  };

  const sortByAge = async (page, asc) => {
    try {
      const response = await api.get(`/api/v1/seeds/${page}/${asc}`);

      setSeeds(response.data.content);
    } catch (err) {
      console.log(err);
    }
  };

  const sortPlants = async (page, byWhat, asc) => {
    try {
      const response = await api.get(`/api/v1/plants/${page}/${byWhat}/${asc}`);

      setPlants(response.data.content);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getSeeds(seedsPage);
    getPlants(plantsPage);
  }, []);

  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/seeds">
          <Seeds
            seeds={seeds}
            refresh={getSeeds}
            sort={sortByAge}
            page={seedsPage}
          />
        </Route>
        <Route path="/plants">
          <Plants
            plants={plants}
            refresh={getPlants}
            sort={sortPlants}
            page={plantsPage}
          />
        </Route>
        <Route path="/archive">
          <Archive />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
