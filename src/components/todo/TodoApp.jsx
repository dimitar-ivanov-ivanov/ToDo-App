import React, { Component } from "react";
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import AuthenticatedRoute from "./AuthenticatedRoute";
import LoginComponent from './LoginComponent';
import ListTodosComponent from './ListTodosComponent';
import HeaderComponent from './HeaderComponent';
import FooterComponent from './FooterComponent';
import ErrorComponent from './ErrorComponent';
import LogoutComponent from './LogoutComponent';
import WelcomeComponent from './WelcomeComponent';
import TodoComponent from './TodoComponent';

class TodoApp extends Component {
  render() {
    return (
      <div className="TodoApp">
        <Router>
        <div>
          <HeaderComponent></HeaderComponent>
          <Switch>
            <Route path = "/login" exact component={LoginComponent}></Route>
            <AuthenticatedRoute path="/welcome/:name" exact component = {WelcomeComponent}></AuthenticatedRoute>
            <AuthenticatedRoute path = "/todos/:id" component={TodoComponent}></AuthenticatedRoute>
            <AuthenticatedRoute path = "/todos" exact component={ListTodosComponent}></AuthenticatedRoute>
            <AuthenticatedRoute path = "/logout" exact component={LogoutComponent}></AuthenticatedRoute>
            <Route path = "/" exact component={LoginComponent}></Route>
            <Route component={ErrorComponent}></Route>
          </Switch>
          <FooterComponent></FooterComponent>
        </div>
       </Router>
       {/*
        <Router>
        <>
           <HeaderComponent></HeaderComponent>
           <Switch> localhost:4200
            <Route path = "/" exact component={LoginComponent}></Route>
            <Route path = "/login" exact component={LoginComponent}></Route>
            <AuthenticatedRoute path="/welcome/:name" exact component = {WelcomeComponent}></AuthenticatedRoute>
            <AuthenticatedRoute path = "/todos/:id" exact component={TodoComponent}></AuthenticatedRoute>
            <AuthenticatedRoute path = "/todos" exact component={ListTodosComponent}></AuthenticatedRoute>
            <AuthenticatedRoute path = "/logout" exact component={LogoutComponent}></AuthenticatedRoute>
            <Route component={ErrorComponent}></Route>
           </Switch>
           <FooterComponent></FooterComponent>
        </>
        </Router> */}
      </div>
    );
}
}

export default TodoApp;
