import React from "react";
import { Link, Route, Switch, useRouteMatch } from "react-router-dom";
import BookCategory from "./BookCategory";
import BookDetail from "./BookDetail";
import BookReader from "./BookReader";

const VocabularyIndex = () => {
  let { path, url } = useRouteMatch();

  return (
    <div className="vocabulary-index">
      <h1>Vocabulary Categories</h1>
      <ol className="category-list">
        <li>
          <Link to={"/home"}>Home</Link>
        </li>
        <li>
          <Link to={`${url}/fairy-tale`}>Fairy Tale</Link>
        </li>
        <li>
          <Link to={`${url}/scary`}>Scary</Link>
        </li>
        <li>
          <Link to={`${url}/adventure`}>Adventure</Link>
        </li>
      </ol>

      <Switch>
        <Route
          exact
          path={path}
          render={() => <h3>Please select a vocabulary category.</h3>}
        />
        <Route
          path={`${path}/fairy-tale`}
          render={(props) => <BookCategory {...props} category="Fairy Tale" />}
        />
        <Route
          path={`${path}/scary`}
          render={(props) => <BookCategory {...props} category="Scary" />}
        />
        <Route
          path={`${path}/adventure`}
          render={(props) => <BookCategory {...props} category="Adventure" />}
        />
        <Route path={`${path}/:category/:bookId`} component={BookDetail} />
        <Route path={`${path}/:category/:bookId/read`} component={BookReader} />
      </Switch>
    </div>
  );
};

export default VocabularyIndex;
