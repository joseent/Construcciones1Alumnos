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
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import HomeTeachers from "./pagesTeachers/HomeTeachers";
import PublicHomeTeachers from "./pagesTeachers/PublicHomeTeachers";
import ForumTeachers from "./pagesTeachers/forumRelated/ForumTeachers";
import InfoTeachers from "./pagesTeachers/infoRelated/InfoTeachers";
import InfoByIDTeachers from "./pagesTeachers/infoRelated/InfoByIDTeachers";
import InscriptionsTeachers from "./pagesTeachers/inscriptionRelated/InscriptionsTeachers";
import ForumByIDTeachers from "./pagesTeachers/forumRelated/ForumByIDTeachers";
import UserInfoTeachers from "./pagesTeachers/userRelated/UserInfoTeachers";


export default function App() {
  return (
    <Router>
      <div className="bg-black">
        <Switch>
          <Route path="/userinfo/:id">
            <UserInfo />
          </Route>
          <Route path="/userinfoteachers/:id">
            <UserInfoTeachers />
          </Route>
          <Route path="/forumbyid/:id">
            <ForumByIDPage />
          </Route>
          <Route path="/forumbyidteachers/:id">
            <ForumByIDTeachers />
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
          <Route path="/inscriptionsteachers">
            <InscriptionsTeachers />
          </Route>
          <Route path="/info/:id">
            <InfoByIDPage />
          </Route>
          <Route path="/infoteachers/:id">
            <InfoByIDTeachers />
          </Route>
          <Route path="/info">
            <Info />
          </Route>
          <Route path="/infoteachers">
            <InfoTeachers />
          </Route>
          <Route path="/forum">
            <Forum />
          </Route>
          <Route path="/forumteachers">
            <ForumTeachers />
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
