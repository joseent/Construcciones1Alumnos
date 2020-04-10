//@ts-check
import React from "react";
import "./NavBar.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Inscriptions from "../../../pages/inscriptionRelated/Inscriptions";
import Info from "../../../pages/infoRelated/Info";
import Forum from "../../../pages/forumRelated/Forum";
import Home from "../../../pages/Home";

export default function NavBar() {
  return (
    <div>
      <Router>
        <nav className="navbar navbar-expand-lg ">
          <Link className="navbar-brand" to="/">
            CONSTRUCCIONES I
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="navbar-brand" to="/">
                  HOME
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-item nav-link" to="/inscriptions">
                  INSCRIPCIONES
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-item nav-link" to="/info">
                  INFORMACION
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-item nav-link" to="/forum">
                  FORO
                </Link>
              </li>
            </ul>
          </div>
        </nav>

        <Switch>
          <Route path="/inscriptions">
            <Inscriptions />
          </Route>
          <Route path="/info">
            <Info />
          </Route>
          <Route path="/forum">
            <Forum />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
