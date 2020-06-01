import React, { Component } from 'react';
import "@fortawesome/fontawesome-free/css/all.min.css";
import { v4 as uuidv4 } from 'uuid'; 
import bootstrap from 'bootstrap/dist/css/bootstrap.min.css';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

uuidv4();
class App extends Component{
  state = {
    items : [{id: 1, title: 'Wake Up'},
            {id: 2, title: 'Make breakfast'}
            ],
    id : uuidv4(),
    item : '',
    editItem : false
  };
    handleChange = (e) => {console.log("Handle Change");}
    handleSubmit = (e) => {console.log("Handle Submit");}
    clearList    = ()  => {console.log("Clear List");}
    handleEdit   = (id) => {console.log(`handle edit ${id}`);}
    handleDelete = (id) => {console.log(`handle delete ${id}`);}
  render(){
    return(
      <div className="App">
        <div className="container">
          <div className="row">
            <div className="col-10 mx-auto col-md-8 mt-5">
              <h3 className="text-capitalize text-center">Todo Input</h3>
            </div>
          </div>
            <TodoInput item={this.state.item} handleSubmit={this.handleSubmit} handleChange={this.handleChange} editItem={this.state.editItem} />
            <TodoList items={this.state.items} clearList={this.clearList} handleEdit={this.handleEdit} handleDelete={this.state.handleDelete}/>        </div>
      </div>
    )
  }
}

export default App;
