//@ts-check
import React from "react";
import "./NavBar.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Inscriptions from "../../../pages/inscriptionRelated/Inscriptions";
import Info from "../../../pages/infoRelated/Info";
import Forum from "../../../pages/forumRelated/Forum";
import Home from "../../../pages/Home";
import ForumNew from "../../../pages/forumRelated/ForumNew";
import c1Logo from "../../loginForm/c1Logo.jpg";
import ForumByIDPage from "../../../pages/forumRelated/ForumByID";
import UserInfo from "../../../pages/userRelated/UserInfo";
import Register from "../../../pages/userRelated/Register";

const handleOnClick = () => {
  var x = document.getElementById("myLinksblock");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
};

export default function NavBar() {
  return (
    <div>
      <Router>
        <nav className="topnav flex items-center justify-between flex-wrap bg-black p-6">
          <div className="flex items-center flex-shrink-0 text-yellow-600 mr-6">
            <img className="w-16 rounded-full" src={c1Logo} alt="c1Logo" />
            <Link
              to="/"
              className="c1Text font-bold text-xl tracking-tight ml-3"
            >
              CONSTRUCCIONES I
            </Link>
          </div>
          <div className="block lg:hidden">
            <button
              className="flex items-center text-yellow-600 border-yellow-600 px-3 py-2 border rounded hover:text-black hover:border-black hover:bg-yellow-600 focus"
              onClick={handleOnClick}
            >
              <svg
                className="icon fill-current h-3 w-3"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
              </svg>
            </button>
          </div>
          <div className="w-full flex flex-grow lg:flex lg:w-auto">
            <div id="myLinksblock" className="w-full text-sm lg:flex-grow text-yellow-600 flexcolmedia">
              <Link
                className=" mt-4 lg:mt-0 hover:text-black hover:bg-yellow-600 font-bold mr-4 p-4"
                to="/"
              >
                HOME
              </Link>
              <Link
                className=" mt-4 lg:mt-0 hover:text-black hover:bg-yellow-600 font-bold mr-4 p-4"
                to="/inscriptions"
              >
                INSCRIPCIONES
              </Link>
              <Link
                className=" mt-4 lg:mt-0 hover:text-black hover:bg-yellow-600 font-bold mr-4 p-4"
                to="/info"
              >
                INFORMACION
              </Link>
              <Link
                className="mt-4 lg:mt-0 hover:text-black hover:bg-yellow-600 font-bold mr-4 p-4"
                to="/forum"
              >
                FORO
              </Link>
              <Link
                className="mt-4 lg:mt-0 hover:text-black hover:bg-yellow-600 font-bold mr-4 p-4"
                to="/userinfo/:id"
              >
                USUARIO
              </Link>
            </div>
          </div>
        </nav>

        <Switch>
          <Route path="/userinfo/:id">
            <UserInfo />
          </Route>
          <Route path="/forumbyid/:id">
            <ForumByIDPage />
          </Route>
          <Route path="/forumnew">
            <ForumNew />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
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
