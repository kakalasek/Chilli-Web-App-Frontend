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
  const [archive, setArchive] = useState([]);

  const [seedsPage, setSeedsPage] = useState(0);
  const [plantsPage, setPlantsPage] = useState(0);
  const [archivePage, setArchivePage] = useState(0);

  const getSeeds = async (page) => {
    try {
      if (page < 0) {
        setSeedsPage(0);
        return;
      }

      const response = await api.get(`/api/v1/seeds/${page}`);

      if (Object.keys(response.data.content).length !== 0) {
        setSeeds(response.data.content);
      } else {
        if (page > 0) {
          setSeedsPage(page - 1);
        }
      }
    } catch (err) {
      console.log(err);
    }
  };

  const getPlants = async (page) => {
    try {
      if (page < 0) {
        setPlantsPage(0);
        return;
      }

      const response = await api.get(`/api/v1/plants/${page}`);

      if (Object.keys(response.data.content).length !== 0) {
        setPlants(response.data.content);
      } else {
        if (page > 0) {
          setPlantsPage(page - 1);
        }
      }
    } catch (err) {
      console.log(err);
    }
  };

  const getArchive = async (page) => {
    try {
      if (page < 0) {
        setArchivePage(0);
        return;
      }

      const response = await api.get(`/api/v1/archive/${page}`);

      if (Object.keys(response.data.content).length !== 0) {
        setArchive(response.data.content);
      } else {
        console.log(page);
        if (page > 0) {
          setArchivePage(page - 1);
        }
      }
    } catch (err) {
      console.log(err);
    }
  };

  const sortByAge = async (page, asc) => {
    try {
      if (page < 0) {
        setSeedsPage(0);
        return;
      }

      const response = await api.get(`/api/v1/seeds/${page}/${asc}`);

      if (Object.keys(response.data.content).length !== 0) {
        setSeeds(response.data.content);
      } else {
        if (page > 0) {
          setSeedsPage(page - 1);
        }
      }
    } catch (err) {
      console.log(err);
    }
  };

  const sortPlants = async (page, byWhat, asc) => {
    try {
      if (page < 0) {
        setPlantsPage(0);
        return;
      }

      const response = await api.get(`/api/v1/plants/${page}/${byWhat}/${asc}`);

      if (Object.keys(response.data.content).length !== 0) {
        setPlants(response.data.content);
      } else {
        if (page > 0) {
          setPlantsPage(page - 1);
        }
      }
    } catch (err) {
      console.log(err);
    }
  };

  const sortArchive = async (page, byWhat, asc) => {
    try {
      if (page < 0) {
        setArchivePage(0);
        return;
      }

      const response = await api.get(
        `/api/v1/archive/${page}/${byWhat}/${asc}`
      );

      if (Object.keys(response.data.content).length !== 0) {
        setArchive(response.data.content);
      } else {
        if (page > 0) {
          setArchivePage(page - 1);
        }
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getPlants(plantsPage);
    getSeeds(seedsPage);
    getArchive(archivePage);
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
            setPage={setSeedsPage}
          />
        </Route>
        <Route path="/plants">
          <Plants
            plants={plants}
            refresh={getPlants}
            sort={sortPlants}
            page={plantsPage}
            setPage={setPlantsPage}
          />
        </Route>
        <Route path="/archive">
          <Archive
            archive={archive}
            refresh={getArchive}
            sort={sortArchive}
            page={archivePage}
            setPage={setArchivePage}
          />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
