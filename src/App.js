import React, { Component } from 'react';
import "@fortawesome/fontawesome-free/css/all.min.css";
import { v4 as uuidv4 } from 'uuid'; 
import bootstrap from 'bootstrap/dist/css/bootstrap.min.css';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

uuidv4();
class App extends Component{
  render(){
    return(
      <div className="App">
        <TodoInput/>
        <TodoList/>
      </div>
    )
  }
}

export default App;
