import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from "./pages/Home/Home";
import data from './data.json';
import Login from './pages/Login/Login';
import SignUp from './pages/SignUp/SignUp'
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state={
      loggedUser: false
  }
  }

  login = () => {
    this.setState({loggedUser: true})
    this.props.history.push("/");
  }

  logout = () => {
    this.setState({loggedUser: false})
    this.props.history.push("/login");
  }

  render() {
    const {loggedUser} = this.state;

    return (
      <Switch>
        <Route exact path="/" render={props => <Home data={data} loggedUser={loggedUser} logout={this.logout} {...props} />} />
        <Route exact path="/login" render={props => <Login loggedUser={loggedUser} {...props} />} />
        <Route exact path="/signup" render={props => <SignUp loggedUser={loggedUser} {...props} />} />
        
        <SignUp />
      
      </Switch>

  );
  }
}

export default App;
