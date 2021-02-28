import React, { Component } from 'react';
import AuthenticationService from './AuthenticationService.js';

class LoginComponent extends Component {
    constructor(props){
       super(props);
       this.state = {
           username: 'in28minutes',
           password: '',
           hasLoginFailed: false,
           showSuccessMessage: false
       };
 
       this.handleChange = this.handleChange.bind(this);
       this.loginClicked = this.loginClicked.bind(this);
    }
   
    render() {
     return (
       <div>
         <h1>Login</h1> 
         <div className="container">
         {this.state.hasLoginFailed && <div className="alert alert-warning">Invalid Credentials</div>}
         User Name: <input type="text" name="username" value={this.state.username} onChange ={this.handleChange}  />
         Password: <input type="password" name="password" value = {this.state.password} onChange ={this.handleChange} />
        <button className="btn btn-success" onClick={this.loginClicked}>Login</button>
         </div>
       </div>
     );
   }
 
   handleChange(event){
    this.setState({[event.target.name]: event.target.value});
   }
 
   loginClicked(event){
       //in28minutes,dummy   
     if(this.state.username === 'in28minutes' &&  this.state.password==='dummy'){
       AuthenticationService.registerSuccessfulLogin(this.state.username,this.state.password);
       this.props.history.push(`/welcome/${this.state.username}`);     
      } else{
         this.setState({showSuccessMessage:false});
         this.setState({hasLoginFailed:true});
     }
   }
 }

 export default LoginComponent;