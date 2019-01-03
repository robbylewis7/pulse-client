import React from 'react';
import Pulse from './pulse.png'
import { Link } from 'react-router-dom'


export default class Header extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {

        this.handleClick = () => {
            localStorage.clear();
            window.location = '/login';
        };


        return (

            <div id = "header">
                <div id = "logoHeader">
                    <img src={Pulse} id="logo"></img>
                    <div id = "mainLogoName">Pulse</div>
                </div>

                <Link to={'/main'}>
                    <button id = "logoutButton" onClick={this.handleClick}>Logout</button>
                </Link>
            </div>


        );
    }
}

