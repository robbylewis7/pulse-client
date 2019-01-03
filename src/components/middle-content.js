import React from 'react';
import teamList from './teamList'
import Feed from './feed.png'
import './middle-content.css'



export default class MiddleContent extends React.Component {
    constructor(props) {
        super(props);
    }



    render() {
        console.log(teamList);

        return (

            <div id="middleDisplay">
                <h2 id="middleDescription">Once you've selected your teams, a feed of aggregated
                 news from the leading sports outlets will appear.</h2>

                <div id="exampleFeed">
                    <div id="exampleTeamList">

                        <li className="teamEx">
                            Lakers
                            <img src={teamList.NBA[13].logo} className="teamIconList"></img>
                        </li>

                        <li className="teamEx">
                            Dodgers
                            <img src={teamList.MLB[14].logo} className="teamIconList"></img>
                        </li>

                        <li className="teamEx">
                            Mets
                            <img src={teamList.MLB[2].logo} className="teamIconList"></img>
                        </li>

                        <li className="teamEx">
                            Rams
                            <img src={teamList.NFL[24].logo} className="teamIconList"></img>
                        </li>

                        <li className="teamEx">
                            Knicks
                            <img src={teamList.NBA[19].logo} className="teamIconList"></img>
                        </li>
                    </div>
                    <div id="exampleArticles">
                        <img src={Feed} id="feedIcon"></img>


                    </div>
                </div>
            </div>
        );
    }
}