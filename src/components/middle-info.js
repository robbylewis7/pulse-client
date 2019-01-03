import React from 'react';
import { Link } from 'react-router-dom'
import Article from './article.png'
import './middle-info.css'


export default class MiddleInfo extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div id = "middleInfo">
                <div>
                <img src={Article} id="article"></img>
                </div>
                <div id = "middleContent">
                    <p id = "descrition">A one-stop source of aggregated news articles based on only the favorite teams that you've selected. </p>
                    <Link to={'/signup'}>
                        <button id = "getStarted" >Choose your teams</button>
                    </Link>
                    </div>
            </div>
        );
    }
}
