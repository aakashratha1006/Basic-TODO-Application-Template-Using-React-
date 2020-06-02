import React, { Component } from 'react';
import "@fortawesome/fontawesome-free/css/all.min.css";
import { v4 as uuidv4 } from 'uuid'; 
import bootstrap from 'bootstrap/dist/css/bootstrap.min.css';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

uuidv4();
class App extends Component{
  state = {
    items : [],
    id : uuidv4(),
    item : '',
    editItem : false
  };
    handleChange = (e) => {
      this.setState({
        item : e.target.value
      });
    };
    handleSubmit = (e) => {
      e.preventDefault();
      const newItem = {
        id : this.state.id,
        title : this.state.item
      }
      const updatedItems = [...this.state.items, newItem];
      this.setState({
        items : updatedItems,
        id : uuidv4(),
        item : '',
        editItem : false
      }, console.log(this.state))
    }
    clearList    = ()  => {
      this.setState({
        items: []
      });
    }
    handleEdit   = (id) => {
      const filteredItems = this.state.items.filter(item => item.id !== id)
      const selectedItems = this.state.items.filter(item => item.id == id)
      this.setState({
        items : filteredItems,
        item : selectedItems,
        id: id,
        editItem: true
      });
    };
    handleDelete = (id) => {
      const filteredItems = this.state.items.filter(item =>item.id !== id);
      this.setState({
        items: filteredItems
      })
    }
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
            <TodoList items={this.state.items} clearList={this.clearList} handleEdit={this.handleEdit} handleDelete={this.handleDelete} />
        </div>
      </div>
    )
  }
}

export default App;
