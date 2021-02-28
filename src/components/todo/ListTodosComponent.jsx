import React, { Component } from 'react';
import TodoDataService from '../../api/TodoDataService.js';
import AuthenticationService from './AuthenticationService.js';
import moment from 'moment';

class ListTodosComponent extends Component{
    constructor(props){
        super(props);
        this.state = {
            message : '',
            todos: [{description: 'learn to dance',done:false,targetDate:moment(new Date()).format('MM-DD-YYYY')}]
        }

        this.deleteTodoClicked = this.deleteTodoClicked.bind(this);
        this.updateTodoClicked = this.updateTodoClicked.bind(this);
        this.refreshTodos = this.refreshTodos.bind(this);
        this.addTodoClicked = this.addTodoClicked.bind(this); 
    }

    componentDidMount(){
        //this.refreshTodos();
    }

    refreshTodos(){
        let username = AuthenticationService.getLoggedInUserName();
        TodoDataService.retrieveAllTodos(username)
        .then(
          response =>{
              this.setState({
                  todos:response.data
              })
          }
        );
    }

    deleteTodoClicked(id){
       let username = AuthenticationService.getLoggedInUserName();
       console.log(username + " " + id);
       TodoDataService.deleteTodo(username,id)
       .then(response =>{
        this.setState({
            message: `Delete of todo ${id} successful`
        })
        this.refreshTodos();
       });
    }

    updateTodoClicked(id){
      console.log(id + "aa");
      this.props.history.push(`/todos/${id}`);     
    }

    addTodoClicked(){    
        this.props.history.push("/todos/-1");
    }

    render(){
        return(
            <div>
                 <h1>List Todos</h1>
                {this.state.message && <div className="alert alert-success" >{this.state.message}</div>}
                 <div className="container">
                 <table className="table">
                     <thead>
                         <tr>
                             <th>Description</th>
                             <th>Is Completed?</th>
                             <th>Target Date</th>
                             <th>Update</th>
                             <th>Delete</th>
                         </tr>
                     </thead>
                     <tbody>
                         {
                             this.state.todos.map(todo=>
                                <tr key={todo.id}>
                                   <td>{todo.description}</td> 
                                   <td>{todo.done.toString()}</td> 
                                   <td>{moment(todo.targetDate).format('YYYY-MM-DD')}</td> 
                                   <td><button className="btn btn-success" onClick={() => this.updateTodoClicked(todo.id)}>Update</button></td>
                                   <td><button className="btn btn-warning" onClick={() => this.deleteTodoClicked(todo.id)}>Delete</button></td>
                                </tr>)
                         }
                     </tbody>
                 </table>
                 <div className="row">
                     <button className="btn btn-success" onClick={this.addTodoClicked}>Add</button>
                 </div>
                </div>
            </div>
        )
    }
}

export default ListTodosComponent;