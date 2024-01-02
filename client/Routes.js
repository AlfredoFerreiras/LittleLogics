import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter, Route, Switch, Redirect } from "react-router-dom";
import { Login, Signup } from "./components/AuthForm";
import Home from "./components/Home";
import MathIndex from "./components/Math";
import MathCategory from "./components/Math/MathCategory"; // Unified Math component
import ScienceCategory from "./components/Science/ScienceCategory";
import ScienceIndex from "./components/Science/Science"; // Unified Science component
import VocabularyIndex from "./components/Vocabulary/Vocabulary";

import { me } from "./store";

/**
 * COMPONENT
 */
class Routes extends Component {
  componentDidMount() {
    this.props.loadInitialData();
  }

  render() {
    const { isLoggedIn } = this.props;

    return (
      <div>
        {isLoggedIn ? (
          <Switch>
            {/* Protected Routes */}
            <Route path="/science/:subcategory" component={ScienceCategory} />

            <Route path="/math/:subcategory" component={MathCategory} />
            <Route path="/math" component={MathIndex} />
            <Route path="/science" component={ScienceIndex} />

            <Route path="/vocabulary" component={VocabularyIndex} />

            <Route exact path="/math" component={MathCategory} />
            <Route exact path="/home" component={Home} />
            <Redirect to="/home" />
          </Switch>
        ) : (
          <Switch>
            {/* Public Routes */}
            <Route path="/" exact component={Login} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
            {/* Redirect any other path to Login */}
            <Redirect to="/login" />
          </Switch>
        )}
      </div>
    );
  }
}

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    isLoggedIn: !!state.auth.id,
  };
};

const mapDispatch = (dispatch) => {
  return {
    loadInitialData() {
      dispatch(me());
    },
  };
};

export default withRouter(connect(mapState, mapDispatch)(Routes));
