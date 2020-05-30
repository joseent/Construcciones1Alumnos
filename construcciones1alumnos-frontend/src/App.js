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
import Publicity from "./pages/publicHomeInformation/Publicity";
import Catedra from "./pages/publicHomeInformation/Catedra";
import Seminars from "./pages/publicHomeInformation/Seminars";

import "./App.css"
import InfoFau from "./pages/publicHomeInformation/InfoFau";
import Metodologia from "./pages/publicHomeInformation/Metodologia";
import PrivateRoute from "./components/PrivateRoute";
import ScrollToTop from "./components/ScrollToTop";


export default function App() {
  return (
    <Router>
      <div className="bgColor">
      <ScrollToTop/>
        <Switch>
          <PrivateRoute path="/userinfo/:id">
            <UserInfo />
          </PrivateRoute>
          <PrivateRoute path="/userinfoteachers/:id">
            <UserInfoTeachers />
          </PrivateRoute>
          <PrivateRoute path="/forumbyid/:id">
            <ForumByIDPage />
          </PrivateRoute>
          <PrivateRoute path="/forumbyidteachers/:id">
            <ForumByIDTeachers />
          </PrivateRoute>
          <PrivateRoute path="/info/:id">
            <InfoByIDPage />
          </PrivateRoute>
          <PrivateRoute path="/infoteachers/:id">
            <InfoByIDTeachers />
          </PrivateRoute>
          <Route path="/publicity">
            <Publicity />
          </Route>
          <Route path="/fau">
            <InfoFau />
          </Route>
          <Route path="/catedra">
            <Catedra />
          </Route>
          <Route path="/metodologia">
            <Metodologia />
          </Route>
          <Route path="/seminars">
            <Seminars />
          </Route>
          <PrivateRoute path="/forumnew">
            <ForumNew />
          </PrivateRoute>
          <Route path="/register">
            <Register />
          </Route>
          <PrivateRoute path="/inscriptions">
            <Inscriptions />
          </PrivateRoute>
          <PrivateRoute path="/inscriptionsteachers">
            <InscriptionsTeachers />
          </PrivateRoute>
          <PrivateRoute path="/info">
            <Info />
          </PrivateRoute>
          <PrivateRoute path="/infoteachers">
            <InfoTeachers />
          </PrivateRoute>
          <PrivateRoute path="/forum">
            <Forum />
          </PrivateRoute>
          <PrivateRoute path="/forumteachers">
            <ForumTeachers />
          </PrivateRoute>
          <Route path="/login">
            <Login />
          </Route>
          <PrivateRoute path="/home">
            <Home />
          </PrivateRoute>
          <PrivateRoute path="/hometeachers">
            <HomeTeachers />
          </PrivateRoute>
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
