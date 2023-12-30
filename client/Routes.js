import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { withRouter, Route, Switch, Redirect } from "react-router-dom";
import { Login, Signup } from "./components/AuthForm";
import Home from "./components/Home";
import Math from "./components/Math/index";
import ScienceIndex from "./components/Science/Science";
import VocabularyIndex from "./components/Vocabulary/Vocabulary";
import { me } from "./store";
import Addition from "./components/Math/Addition";
import Subtraction from "./components/Math/Substraction";
import Multiplication from "./components/Math/Multiplication";
import Division from "./components/Math/Division";
import Astronomy from "./components/Science/Astronomy";
import Biology from "./components/Science/Biology";
import Chemistry from "./components/Science/Chemistry";
import Physics from "./components/Science/Physics";
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
            <Route path="/science/astronomy" component={Astronomy} />
            <Route path="/science/biology" component={Biology} />
            <Route path="/science/chemistry" component={Chemistry} />
            <Route path="/science/physics" component={Physics} />
            <Route path="/math/addition" component={Addition} />
            <Route path="/math/subtraction" component={Subtraction} />
            <Route path="/math/multiplication" component={Multiplication} />
            <Route path="/math/division" component={Division} />
            <Route path="/vocabulary" component={VocabularyIndex} />
            <Route path="/science" component={ScienceIndex} />
            <Route path="/math" component={Math} />
            <Route path="/home" component={Home} />
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
    // Being 'logged in' for our purposes will be defined has having a state.auth that has a truthy id.
    // Otherwise, state.auth will be an empty object, and state.auth.id will be falsey
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

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(connect(mapState, mapDispatch)(Routes));
