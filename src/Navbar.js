import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import logo from './logo.png';
import './Navbar.scss';

class Navbar extends Component {
    render() {
        return (
            <div className="App-header">
                <header>
                    <div className="container">
                        <Link
                            to={'/'}
                            className='logo'>
                            <img src={logo} className="App-logo" alt="logo" /> <h2>nverter</h2>
                        </Link>

                        <Link
                            to={'/encodes'}
                            className='button'>
                            Encode History
                        </Link>
                    </div>
                </header>
            </div>
        );
    }
}

export default Navbar;
