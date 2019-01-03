import React from 'react';
import TopInfo from './top-info'
import './signup.css'


export default class Signup extends React.Component {
        constructor(props) {
          super(props);
          this.state = {
              username: '',
              lastName: '',
              firstName: '',
              password: '',
              showError: false,
              errorMessage: ''
            };
      
          this.handleInputChange = this.handleInputChange.bind(this);
          this.handleSubmit = this.handleSubmit.bind(this);
          this.handleFocus = this.handleFocus.bind(this);

        }
      
        handleInputChange(event) {
            this.setState({ 
                [event.target.name]: event.target.value,
                showError: false
            });
          }

        handleFocus(){
            this.setState({
              showError: false
            })
          }

          addTeam(username){
            fetch('http://localhost:8080/teams',{
              method: "POST",
              body: JSON.stringify({
                  team: [],
                  user: username
              }),
              headers: {
                "Content-type": "application/json; charset=UTF-8"
              }
          })
          .then(res => {
              if (!res.ok) { return Promise.reject(res.statusText); }
              return res.json()
          })
          .then(data => {
              console.log(data);
          })
          .catch(error => {
              console.log(error);
          });
          }

          handleSubmit(event) {
            console.log('A name was submitted: ' + this.state.username);
            event.preventDefault();
            // window.location = '/login';
            fetch('http://localhost:8080/api/users',{
              method: "POST",
              body: JSON.stringify({
                  username: this.state.username,
                  lastName: this.state.lastName,
                  firstName: this.state.firstName,
                  password: this.state.password
              }),
              headers: {
                "Content-type": "application/json; charset=UTF-8"
              }
          })
          .then(res => {
            console.log(res);
            // if (!res.ok) { return Promise.reject(res.statusText); }
              return res.json();
              this.redirectLogin();
          })
          .then(data => {
            console.log(data);
            if (!data.ok) { return Promise.reject(data); }
          })
          .catch(error => {
              console.log(error);
              this.setState({
                showError: true,
                errorMessage: error.message
              })
          })          
          this.addTeam(this.state.username)
          }

          redirectLogin(){
            window.location = '/login'
          }



      
        render() {

          return (
            <div>
              <TopInfo />

              <div id = "signup">
              
                <form onSubmit={this.handleSubmit}>
                {this.state.showError &&
                      <p className = "error">{this.state.errorMessage}</p>
                    
                    }
                    <input type="text" placeholder = "First Name" name = "firstName" value={this.state.firstName} onChange={this.handleInputChange} className = "inputLogin"/>
                    <input type="text" placeholder = "Last Name" name = "lastName" value={this.state.lastName} onChange={this.handleInputChange} className = "inputLogin"/>
                    <input type="text" placeholder = "Username" minLength = "1" name = "username" value={this.state.username} onFocus={this.handleFocus} onChange={this.handleInputChange} className = "inputLogin" required />
                    <input type="password" placeholder = "Password" minLength = "8" maxLength = "72" name = "password" value={this.state.password} onChange={this.handleInputChange} className = "inputLogin" required/>
                  <input type="submit" id = "submitButtonLogin" className="loginButton" value="Let's Do It" />
                </form>
              </div>
            </div>
          );
        }
      }
