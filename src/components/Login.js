import React, { Component } from "react";
import axios from "axios";
import { setUser } from "../redux/reducer";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import "../App.css";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      typedUser: "",
      password: ""
    };
  }

  login = () => {
    axios
      .post("/api/login", {
        username: this.state.typedUser,
        password: this.state.password
      })
      .then(res => {
        this.props.setUser(res.data);
        // this.props.history.push("/main");
      });
  };

  goToRegister = () => {
    this.props.history.push("/register");
  };

  changeHandler(property, value) {
    this.setState({
      [property]: value
    });
    // console.log("hit")
  }

  render() {
    // const { typedUser, password } = this.state;
    // console.log(this.state)
    return (
      <div>
        <header className="header">DAM HABIT TRACKER
        <h1>Login</h1>
        <input 
            className="Input"
            name="typedUser"
            value={this.state.typedUser}
            onChange={event => 
                this.changeHandler(event.target.name, event.target.value)
            }
            placeholder="username"
        />
        <input 
            className="Input"
            type="password"
            name="password"
            value={this.state.password}
            onChange={event => 
                this.changeHandler(event.target.name, event.target.value)
            }
            placeholder="password"
        />
        <button className="Button" onClick={this.login}>Login</button>
        <button className="Button" onClick={this.goToRegister}>Let's register</button>
        </header>

      </div>
    );
  }
}

function mapReduxStateToProps(reduxState) {
  return reduxState;
}

const mapDispatchToProps = {
  setUser
};

const connectInvoked = connect(mapReduxStateToProps, mapDispatchToProps);

export default withRouter(connectInvoked(Login));
