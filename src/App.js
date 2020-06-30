import React, {Component} from 'react';
import TaskManager from './Components/TaskManager/TaskManager';
import TaskList from './Components/TaskList/TaskList';
import './App.css';

class App extends Component {
  
  
  render() {
    return (
      <div className="container">
        <TaskManager />
        <TaskList />
      </div>
    );
  }
}

export default App;
