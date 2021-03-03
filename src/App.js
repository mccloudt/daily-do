import logo from './logo.svg';
import './App.css';
import LoginPage from './Components/LoginPage'
import styles from './styles/loginpage.module.scss';
import utilStyles from './styles/utils.module.scss';
import SignUpForm from './Components/SignUpForm';
import LoginForm from './Components/LoginForm';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link, Redirect
} from "react-router-dom";
import React, { Component } from 'react';
import Header from './Components/Header';
import Nav from './Components/Nav'
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      loggedIn: false,
      userEmail: '',
    }
    this.handleLogin = this.handleLogin.bind(this);
  }

  handleLogin(userEmail){
    this.setState({loggedIn: true, userEmail: userEmail});
    
  }

  render(){
    return (
      <>
      <Router>
        <Nav loggedIn={this.state.loggedIn} email={this.state.userEmail}/>
          <Switch>
          <Route path="/sign-up">
              <SignUpForm/>
          </Route>
          <Route path="/login">
              <LoginForm handleLogin={this.handleLogin}/>
          </Route>
          {this.state.loggedIn ? <Redirect to="/"/> : null}
          </Switch>
      </Router>
          
      <footer>
          Made with ❤️ by Tom McCloud
      </footer>
      </>
    );
  }
}

export default App;
