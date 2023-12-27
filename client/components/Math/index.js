import React from "react";
import { Link, Route, Switch, useRouteMatch } from "react-router-dom";
import Addition from "./Addition";
import minus from "./Substraction";
import Multiplication from "./Multiplication";
import Division from "./Division";

const MathIndex = () => {
  let { path, url } = useRouteMatch();

  return (
    <div className="math-index">
      <h1>Math Categories</h1>
      <ol className="category-list">
        <li>
          <Link to={"/home"}>home</Link>
        </li>
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

      <Switch>
        <Route
          exact
          path={path}
          render={() => <h3>Please select a category.</h3>}
        />
        <Route path={`${path}/addition`} component={Addition} />
        <Route path={`${path}/subtraction`} component={minus} />
        <Route path={`${path}/multiplication`} component={Multiplication} />
        <Route path={`${path}/division`} component={Division} />
      </Switch>
    </div>
  );
};

export default MathIndex;
