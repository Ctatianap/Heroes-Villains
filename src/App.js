import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import ContainerHeroes from "./components/ContainerHeroes";
import InfoHero from "./pages/InfoHero";
import "bootstrap/dist/css/bootstrap.min.css";
import "./scss/main.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SuperHeroesService from "./SuperHeroesService";
import Pagination from "./components/Pagination";
import Footer from "./components/Footer";

function App() {
  const [heroes, setHeroes] = useState([]);
  const [pageActual, setPageActual] = useState(1);

  useEffect(() => {
    SuperHeroesService.getSuperHeroes({
      page: pageActual,
      pageSize: 9,
    }).then((data) => {
      setHeroes(data);
    });
  }, [setHeroes, pageActual]);

  return (
    <div className="App">
      <Header />
      <Router>
        <Switch>
          <Route path="/infoHero/:slug">
            <InfoHero heroes={heroes} />
          </Route>
          <Route path="/">
            <ContainerHeroes heroes={heroes} />
            <Pagination page={pageActual} setPage={setPageActual} />
          </Route>
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
