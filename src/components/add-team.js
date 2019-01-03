import React from 'react';
import './add-team.css';
import cancelIcon from './noun_cancel_405808.svg'
import add from './add.png';
import teamList from './teamList';


export default class AddTeam extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            editing: false,
            checked: false,
        }
        this.handleCheck = this.handleCheck.bind(this);
    }


    onSubmit(event) {
        event.preventDefault();
        var checked = document.querySelectorAll('.input:checked');
        var selectedTeams = Array.from(checked).map(function (team) {
            return team.value
        });
        // console.log('checked', selectedTeams)
        this.props.onUpdate(selectedTeams)
        this.setState({
            editing: false
        });
    }


    setEditing(editing) {
        this.setState({
            editing,
        });
        this.props.onEdit(!editing)
    }

    handleCheck() {
        var checked = document.querySelectorAll('.input:checked');
        var selectedTeams = Array.from(checked).map(function (team) {
            return team.value
        });

        console.log('checked', selectedTeams);
        this.setState({
            checked: !this.state.checked
        });
    }

    refreshPage() {
        window.location.reload();
    }


    render() {



        if (!this.state.editing) {
            return (
                <div className="add-button">
                <h1 id = "team">Teams</h1>
                    <button id="addTeam"
                        onClick={() => this.setEditing(true)}
                    ><img src={add} id="addImg" alt = "Add your teams"></img></button>
                </div>
            );
        }

        let savedTeams = this.props.savedTeams.team;
        // console.log(savedTeams);
        let nbaTeams = teamList.NBA.map((team, index) => {
            return (
                <div className="form-check" key={index}>
                    <img src={team.logo} className="teamLogo" alt = "NBA team logo"></img>
                    <label className="teamLabel">
                        <input type="checkbox"
                            value={team.team}
                            className="form-check-input input"
                            onChange={this.handleCheck}
                            defaultChecked={savedTeams.includes(team.team) ? true : false}
                        />
                        {team.team}
                    </label>

                </div>
            )
        })

        let mlbTeams = teamList.MLB.map((team, index) => {
            return (
                <div className="form-check" key={index}>
                    <img src={team.logo} className="teamLogo" alt = "MLB team logo"></img>
                    <label className="teamLabel">
                        <input type="checkbox" value={team.team}
                            className="form-check-input input"
                            onChange={this.handleCheck}
                            defaultChecked={savedTeams.includes(team.team) ? true : false}
                        />
                        {team.team}
                    </label>
                </div>
            )
        })

        let nflTeams = teamList.NFL.map((team, index) => {
            return (
                <div className="form-check" key={index}>
                    <img src={team.logo} className="teamLogo" alt = "NFL team logo"></img>
                    <label className="teamLabel">
                        <input type="checkbox" value={team.team}
                            className="form-check-input input"
                            onChange={this.handleCheck}
                            defaultChecked={savedTeams.includes(team.team) ? true : false}
                        />
                        {team.team}
                    </label>
                </div>
            )
        })

        let nhlTeams = teamList.NHL.map((team, index) => {
            return (
                <div className="form-check" key={index}>
                    <img src={team.logo} className="teamLogo" alt = "NHL team logo"></img>
                    <label className="teamLabel">
                        <input type="checkbox" value={team.team}
                            className="form-check-input input"
                            onChange={this.handleCheck}
                            defaultChecked={savedTeams.includes(team.team) ? true : false}
                        />
                        {team.team}
                    </label>
                </div>
            )
        })




        return (

            <div className="container">
                <button type="button" id="cancel"
                    onClick={() => this.setEditing(false)}
                >
                    <img src={cancelIcon} id="cancelImg" alt = "Cancel"></img>
                </button>

                <form onSubmit={(e) => this.onSubmit(e)}>
                    <div id="leagues">
                        <div id="nba" className="league">
                            <h2>NBA</h2>
                            <hr />
                            {nbaTeams}
                        </div>


                        <div id="mlb" className="league">
                            <h2>MLB</h2>
                            <hr />
                            {mlbTeams}
                        </div>



                        <div id="nfl" className="league">
                            <h2>NFL</h2>
                            <hr />
                            {nflTeams}
                        </div>

                        <div id="nhl" className="league">
                            <h2>NHL</h2>
                            <hr />
                            {nhlTeams}
                        </div>

                    </div>



                    <div className="form-group submitButton" onClick={this.refreshPage} >
                        <button className="saveButton" >
                            Save
                        </button>

                    </div>

                </form>
            </div>
        );
    }
}