import React from "react";
import { Route } from "react-router-dom";
import ArticleList from "./containers/ArticleListView";
import ArticleDetailedList from "./containers/ArticleDetailedView";
import Login from './containers/Login';
import Signup from './containers/Signup';

const BaseRouter = () => {
  return (
    <>
      <Route exact path="/" component={ArticleList} />
      <Route exact path="/article/:articleID/" component={ArticleDetailedList} />
      <Route exact path="/login/" component={Login} />
      <Route exact path="/signup/" component={Signup} />
    </>
  );
};

export default BaseRouter;
