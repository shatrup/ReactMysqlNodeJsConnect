import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom"
import HomePage from './Layouts/HomePage'
import Signup from './RegistrationForm/RegistrationForm';
import Login from './LoginForm/LoginForm'

class App extends React.Component {
  componentWillMount() {
    //console.log("App::componentWillMount");
    this.setState({
      routes: [
        { path: "/", component: HomePage, exact: true },
        { path: "/login", component: Login, exact: true },
        { path: "/signup", component: Signup, exact: true }


      ]
    })
  }

  componentDidMount() {
    console.log("App::componentDidMount");
  }

  render() {
    //console.log("App::render");
    return (
      <React.Fragment>
        <Router>
          {this.state.routes.map((route, key) => <Route key={route.path}
            path={route.path} component={route.component}
          />)}
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
