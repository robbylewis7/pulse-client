import React from 'react';
import './bottom-content.css'


export default class BottomContent extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div id = "bottomContent">
                <h2 className = "landingHeaderText"><span id = "italicize">Some</span> of our sources</h2>
                <img src = "https://icon-locator.herokuapp.com/icon?url=http://www.bbc.co.uk/sport&size=70..120..200" className="sourcIcons" alt = "Article sourece logo"></img>
                <img src = "https://icon-locator.herokuapp.com/icon?url=http://www.bleacherreport.com&size=70..120..200" className="sourcIcons" alt = "Article sourece logo"></img>
                <img src = "https://icon-locator.herokuapp.com/icon?url=http://espn.go.com&size=70..120..200" className="sourcIcons"></img>
                <img src = "https://icon-locator.herokuapp.com/icon?url=http://www.foxsports.com&size=70..120..200" className="sourcIcons" alt = "Article sourece logo"></img>
                <img src = "https://icon-locator.herokuapp.com/icon?url=https://news.google.com&size=70..120..200" className="sourcIcons" alt = "Article sourece logo"></img>
                <img src = "https://icon-locator.herokuapp.com/icon?url=http://www.nhl.com/news&size=70..120..200" className="sourcIcons" alt = "Article sourece logo"></img>
                <img src = "https://icon-locator.herokuapp.com/icon?url=http://www.nfl.com/news&size=70..120..200" className="sourcIcons" alt = "Article sourece logo"></img>
                <img src = "https://icon-locator.herokuapp.com/icon?url=http://www.mlb.com/news&size=70..120..200" className="sourcIcons" alt = "Article sourece logo"></img>
                <img src = "https://icon-locator.herokuapp.com/icon?url=https://news.vice.com&size=70..120..200" className="sourcIcons" alt = "Article sourece logo"></img>
                <img src = "https://icon-locator.herokuapp.com/icon?url=http://www.usatoday.com/news&size=70..120..200" className="sourcIcons" alt = "Article sourece logo"></img>
            </div>
        );
    }
}