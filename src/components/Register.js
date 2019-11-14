import React, { Component } from "react";
import axios from "axios";
import { setUser } from "../redux/reducer";
import { connect } from "react-redux";
import "../App.css";

class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: null,
      typedUser: "",
      password: "",
      email: ""
    };
  }

  register = () => {
    axios
      .post("/api/register", {
        username: this.state.typedUser,
        password: this.state.password,
        email: this.state.email
      })
      .then(res => {
        this.props.setUser(res.data);
        this.props.history.push("/");
      })
      .catch(err => console.log(err));
  };

  goToLogin = () => {
    this.props.history.push("/");
  };

  changeHandler(property, value) {
    this.setState({
      [property]: value
    });
  }

  render() {
    return (
      <div>
        <h2>Create New Account</h2>
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
        <input
          className="Input"
          name="email"
          value={this.state.email}
          onChange={event =>
            this.changeHandler(event.target.name, event.target.value)
          }
          placeholder="email"
        />
        <button className="Button" onClick={this.register}>Register</button>
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

export default connectInvoked(Register);
