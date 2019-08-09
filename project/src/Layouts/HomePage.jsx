import React from "react";
//import Signup from './RegistrationForm/RegistrationForm';
//import Login from './LoginForm/LoginForm.js';
import './style.css';
import { Link } from 'react-router-dom';

class HomePage extends React.Component {
    state = {
        users: []
    }

    componentDidMount() {
        this.getProducts();
    }

    getProducts = _ => {
        fetch('http://localhost:3001/')
            .then(response => response.json())
            .then(response => this.setState({ users: response.users }))
            .catch(err => console.error(err))
    }

    showdata = ({ id, username }) => <div key={id}>{username}</div>

    componentWillMount() {
        console.log('Hey seccussfully redirect your page/');
    }

    render() {
        const { users } = this.state;
        return (
            <nav className="navbar navbar-default navbar-fixed-top" id="main-navbar">
                <div>
                    {users.map(this.showdata)}
                </div>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/login'>Login</Link></li>
                    <li><Link to='/signup'>SignUP</Link></li>
                </ul>
            </nav>
        );
    }
}

export default HomePage;