import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter, Route, Switch, Redirect } from "react-router-dom";
import { Login, Signup } from "./components/AuthForm";
import Home from "./components/Home";
import BasicAddition from "./components/Math/Age-5-6/BasicAddition";

import { me } from "./store/auth";

/**
 * COMPONENT
 */
class Routes extends Component {
  componentDidMount() {
    this.props.loadInitialData();
  }

  render() {
    const { isLoggedIn } = this.props;
    if (isLoggedIn === undefined) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        {isLoggedIn ? (
          <Switch>
            <Route
              path="/math/age-5-6/basic-addition"
              component={BasicAddition}
            />
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
