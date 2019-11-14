import React, { Component } from "react";
import { Route, Switch, NavLink } from "react-router-dom";
import { setUser } from "./redux/reducer";
import { connect } from "react-redux";
import Login from "./components/Login";
import Register from "./components/Register";
// import logo from './logo.svg';
import "./App.css";
import axios from "axios";

class App extends Component {
  componentDidMount() {
    axios.post("/api/user_session").then(res => {
      this.props.setUser(res.data);
    })
  }
  render() {
    return <div className="App">
    <Switch>
      <Route exact path="/" component={Login} />
      <Route path="/register" component={Register}/>
    </Switch>

    </div>;
  }
}

function mapReduxStateToProps(reduxState) {
  return reduxState;
}

const mapDispatchToProps = {
  setUser
};

const connectInvoked = connect(
  mapReduxStateToProps,
  mapDispatchToProps
);

export default connectInvoked(App);
