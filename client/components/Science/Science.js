import React from "react";
import { Link, Route, Switch, useRouteMatch } from "react-router-dom";
import Astronomy from "./Astronomy";
import Biology from "./Biology";
import Chemistry from "./Chemistry";
import Physics from "./Physics";

const ScienceIndex = () => {
  let { path, url } = useRouteMatch();

  return (
    <div className="science-index">
      <h1>Science Categories</h1>
      <ol className="category-list">
        <li>
          <Link to={"/home"}>Home</Link>
        </li>
        <li>
          <Link to={`${url}/astronomy`}>Astronomy</Link>
        </li>
        <li>
          <Link to={`${url}/biology`}>Biology</Link>
        </li>
        <li>
          <Link to={`${url}/chemistry`}>Chemistry</Link>
        </li>
        <li>
          <Link to={`${url}/physics`}>Physics</Link>
        </li>
      </ol>

      <Switch>
        <Route
          exact
          path={path}
          render={() => <h3>Please select a science category.</h3>}
        />
        <Route path={`${path}/astronomy`} component={Astronomy} />
        <Route path={`${path}/biology`} component={Biology} />
        <Route path={`${path}/chemistry`} component={Chemistry} />
        <Route path={`${path}/physics`} component={Physics} />
      </Switch>
    </div>
  );
};

export default ScienceIndex;
