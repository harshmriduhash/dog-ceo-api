import React, { Component } from "react";
import { Redirect } from 'react-router';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import "./App.css";
import { setCurrentUser, logoutUser } from "./actions/authActions";
import { Provider } from "react-redux";
import store from "./store";


import Navbar from "./components/layout/Navbar";
import Landing from "./components/layout/Landing";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import PrivateRoute from "./components/private-route/PrivateRoute";
import Dashboard from "./components/dashboard/Dashboard";
import Details from "./components/dashboard/Details"

import "./App.css";

var token;
// Check for token to keep user logged in
if (localStorage.jwtToken) {
  // Set auth token header auth
  token = localStorage.jwtToken;
  setAuthToken(token);

  // Decode token and get user info and exp
  const decoded = jwt_decode(token);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));

  // Check for expired token
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());

    // Redirect to login
    window.location.href = "./login";
  }
}
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jwtToken: null
    }
  }
  componentDidMount() {
    this.setState({ jwtToken: token })
    console.log(this.state.jwtToken)
  }
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Switch>
              <PrivateRoute exact path="/dashboard" component={Dashboard} />
              <Route exact path="/details/:breedName" component={Details} />
            </Switch>
            <Route exact path="/" component={() => this.state.jwtToken ? <Dashboard /> : <Landing />} />
          </div>
        </Router>
      </Provider >
    );
  }
}
export default App;
