import React from "react";
import { Link, Route, Switch, useRouteMatch } from "react-router-dom";
import ScienceCategory from "./ScienceCategory";

const ScienceIndex = () => {
  let { path, url } = useRouteMatch();

  return (
    <div className="science-index">
      <h1>Science Learning Process</h1>
      <p>
        Explore the wonders of science! Select a topic below to start learning
        with AI-generated questions.
      </p>
      <ol className="category-list">
        {["astronomy", "biology", "chemistry", "physics"].map((category) => (
          <li key={category}>
            <Link to={`${url}/${category}`}>
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </Link>
          </li>
        ))}
      </ol>
      <Switch>
        <Route
          exact
          path={path}
          render={() => <h3>Please select a science category.</h3>}
        />
        <Route path={`${path}/:subcategory`} component={ScienceCategory} />
      </Switch>
    </div>
  );
};

export default ScienceIndex;
