import logo from "./logo.svg";
import "./App.css";
import TodoApp from './components/todo/TodoApp.jsx';
import './bootstrap.css';

import { Component } from "react";
import { render } from "@testing-library/react";

class App extends Component {
  render() {
    return <div className="App">
      <TodoApp/>
      </div>;
  }
}

export default App;
