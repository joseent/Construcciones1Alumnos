// @ts-check
import React, { useState, useEffect } from "react";
import BottomBar from "./components/general/bottomBar/BottomBar";
import PublicHome from "./pages/PublicHome";
import UserInfo from "./pages/userRelated/UserInfo";
import ForumByIDPage from "./pages/forumRelated/ForumByID";
import ForumNew from "./pages/forumRelated/ForumNew";
import Register from "./pages/userRelated/Register";
import Inscriptions from "./pages/inscriptionRelated/Inscriptions";
import InfoByIDPage from "./pages/infoRelated/InfoByIDpage";
import Info from "./pages/infoRelated/Info";
import Forum from "./pages/forumRelated/Forum";
import Login from "./pages/userRelated/LogIn";
import Home from "./pages/Home";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import HomeTeachers from "./pagesTeachers/HomeTeachers";
import PublicHomeTeachers from "./pagesTeachers/PublicHomeTeachers";

export default function App() {
  
  return (
    <Router>
      <div className="bg-black">
           
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
          <Route path="/info/:id">
            <InfoByIDPage />
          </Route>
          <Route path="/info">
            <Info />
          </Route>
          <Route path="/forum">
            <Forum />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/hometeachers">
            <HomeTeachers />
          </Route>
          <Route path="/publichometeachers">
            <PublicHomeTeachers />
          </Route>
          <Route path="/">
            <PublicHome />
          </Route>

        </Switch>
        <BottomBar />
      </div>
    </Router>
  );
}
