import React from 'react';
import Pulse from './pulseLogo.png'
import './top-info.css'
import { Link } from 'react-router-dom'



export default class TopInfo extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div id = "topInfo">

                <div id = "logo">
                    <img src={Pulse} id = "frontPageLogo"></img>
                    <Link to={'/'}>
                        <div className = "frontPageName">Pulse</div>
                    </Link>
                </div>

            <div id = "buttons">
                <Link to={'/signup'}>
                    <button id = "signupButton" className="loginButton">Sign Up</button>
                </Link>

                <Link to={'/login'}>
                    <button id = "loginButton" className="loginButton">Login</button>
                </Link>
            </div>

            </div>
        );
    }
}