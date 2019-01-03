import React from 'react';
import './teams.css'
import teamList from './teamList';

export default class Teams extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {

        let teams = this.props.team;
        
        let aggLeagues = [];
        

        teamList.NBA.map((team) => {
            aggLeagues.push(team);
        });

        teamList.MLB.map((team) => {
            aggLeagues.push(team);
        });

        teamList.NFL.map((team) => {
            aggLeagues.push(team);
        });

        teamList.NHL.map((team) => {
            aggLeagues.push(team);
        });
        



 

        let team = teams.map((team, index) => {

            let teamIndex = aggLeagues.map(function(team){

                return team.team;

            }).indexOf(team); 







           return <li key={index} className={"teams"}>{team}
            
           <img src={aggLeagues[teamIndex].logo} className="teamIconList"></img>


           
           </li>                

        });

        return (

            <>

                {team}

            </>

        );

    }
}


