import React from 'react';
import './articles.css';


export default class Articles extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            articles: []
        }
        this.refreshArticles = this.refreshArticles.bind(this);
    }

    

    getNews(teamsForNewsString){
        let fromDate = new Date(); 
        let x = 5
        fromDate.setDate(fromDate.getDate() - x);

        var dd = fromDate.getDate();
        var mm = fromDate.getMonth() + 1; 
        var yyyy = fromDate.getFullYear();
        if(dd<10) {
            dd = '0'+dd
        } 
        
        if(mm<10) {
            mm = '0'+mm
        } 
        
        fromDate = yyyy + '-' + mm + '-' + dd;

        console.log(fromDate);
        var url = 'https://newsapi.org/v2/everything?' +
        `q="${teamsForNewsString}"&` +
        `from=${fromDate}&` +
        'language=en&' +
        'sortBy=relevancy&' +
        'pageSize=100&' +
        'apiKey=508b1fda120441e68b78ef8483883676';

        var req = new Request(url);

        fetch(req)
        .then(function(res) {
            return res.json()
        }).then(data => this.setState({
            articles: data.articles
        })
        )

    }

    componentDidMount(){
        this.refreshArticles();
    }

    refreshArticles(){
        console.log('refresh');
        fetch('http://localhost:8080/teams/'+localStorage.getItem('username'))
        .then(res => {
            if (!res.ok) { return Promise.reject(res.statusText); }
            return res.json()
        })
        .then(data => {
            console.log(data);
            this.setState({
                teams: data.teams,
                id: data.teams[0].id
            })
            let teams = data.teams[0].team.toString();
             let teamsForNewsString = teams.replace(/,/g, '" OR "');
            
            console.log(teamsForNewsString);
            this.getNews(teamsForNewsString);
        })
        .catch(error => {
            console.log(error);
        })
    }

    refreshPage() {
        window.location.reload();
      }


    render() {


    
      

        const {articles} = this.state;
        let test = articles.map((article, index)=>{
            return <div className = "article" key={index}>
                        <div className = "content">  
                            <a href={article.url} id = "articleLink" target="_blank">
                            <p className="source">{article.source.name}</p>

                                <p className="articleTitle">{article.title}</p>
                                <img src={article.urlToImage} className = "articleImg"></img>
                            </a>
                        </div>   
                    </div>
        })

       
            return (

                <div className = "articles">
                {/* <button onClick={this.refreshArticles}>Refresh</button> */}
                {test}
                </div>
            );

}
}