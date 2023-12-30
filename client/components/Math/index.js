import React from "react";
import { Link, Route, Switch, useRouteMatch } from "react-router-dom";
import Navbar from "../Navbar";
import Addition from "./Addition";
import Subtraction from "./Substraction";
import Multiplication from "./Multiplication";
import Division from "./Division";

const LearningProcess = () => {
  let { path, url } = useRouteMatch();

  return (
    <div className="learning-process">
      <Navbar />
      <div className="content-container">
        <div className="learning-content">
          <h1>Learning Process</h1>
          <p>
            Welcome to the Math Learning Process! Here, you can practice various
            math topics to improve your skills.
          </p>
          <p>
            Select a category from the menu on the right to get started. Each
            category will present you with math problems to solve.
          </p>
        </div>
      </div>
      <div className="math-categories">
        <h2>Math Categories</h2>
        <ol className="category-list">
          <li>
            <Link to={`${url}/addition`}>Addition</Link>
          </li>
          <li>
            <Link to={`${url}/subtraction`}>Subtraction</Link>
          </li>
          <li>
            <Link to={`${url}/multiplication`}>Multiplication</Link>
          </li>
          <li>
            <Link to={`${url}/division`}>Division</Link>
          </li>
        </ol>
      </div>
      <Switch>
        <Route exact path={path}>
          <div className="selected-category">
            <h3>Please select a category to start learning.</h3>
          </div>
        </Route>
        <Route path={`${path}/addition`} component={Addition} />
        <Route path={`${path}/subtraction`} component={Subtraction} />
        <Route path={`${path}/multiplication`} component={Multiplication} />
        <Route path={`${path}/division`} component={Division} />
      </Switch>
    </div>
  );
};

export default LearningProcess;
