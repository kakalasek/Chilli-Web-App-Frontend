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
  /* Arrays */
  const [seeds, setSeeds] = useState([]);
  const [plants, setPlants] = useState([]);
  const [archive, setArchive] = useState([]);

  /* Page numbers */
  const [seedsPage, setSeedsPage] = useState(0);
  const [plantsPage, setPlantsPage] = useState(0);
  const [archivePage, setArchivePage] = useState(0);

  /* Seeds GET*/
  const getSeeds = async (page) => {
    try {
      if (page < 0) {
        // So the page would never go under zero
        setSeedsPage(0);
        return;
      }

      const response = await api.get(`/api/v1/seeds/${page}`);

      if (Object.keys(response.data.content).length !== 0) {
        // We dont want to change the page if nothing was retrieved from the API
        setSeeds(response.data.content);
      } else {
        if (seeds.length === 1 && page === 0) {
          // Special case: So the page would update when the last item was removed
          setSeeds(response.data.content);
        }
        if (page > 0) {
          // If nothing was retrieved and page is larger than zero the page decrements back
          setSeedsPage(page - 1);
        }
      }
    } catch (err) {
      console.log(err);
    }
  };

  /* Plants GET */
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
        if (plants.length === 1 && page === 0) {
          setPlants(response.data.content);
        }
        if (page > 0) {
          setPlantsPage(page - 1);
        }
      }
    } catch (err) {
      console.log(err);
    }
  };

  /* Archive GET */
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
        if (archive.length === 1 && page === 0) {
          setArchive(response.data.content);
        }
        if (page > 0) {
          setArchivePage(page - 1);
        }
      }
    } catch (err) {
      console.log(err);
    }
  };

  /* seeds SORT */
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
        if (seeds.length === 1 && page === 0) {
          setSeeds(response.data.content);
        }
        if (page > 0) {
          setSeedsPage(page - 1);
        }
      }
    } catch (err) {
      console.log(err);
    }
  };

  /* Plants SORT */
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
        if (plants.length === 1 && page === 0) {
          setPlants(response.data.content);
        }
        if (page > 0) {
          setPlantsPage(page - 1);
        }
      }
    } catch (err) {
      console.log(err);
    }
  };

  /* Archive SORT */
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
        if (archive.length === 1 && page === 0) {
          setArchive(response.data.content);
        }
        if (page > 0) {
          setArchivePage(page - 1);
        }
      }
    } catch (err) {
      console.log(err);
    }
  };

  /* First page load routines */
  useEffect(() => {
    getPlants(plantsPage);
    getSeeds(seedsPage);
    getArchive(archivePage);
  }, []);

  /* Plants REFRESH */
  const plantsRefresh = (page) => {
    getPlants(page);
    getArchive(0);
  };

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
            refresh={plantsRefresh}
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
