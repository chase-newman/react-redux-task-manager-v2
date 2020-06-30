import React, {Component} from 'react';
import Login from './Components/Login/Login';
import TaskManager from './Components/TaskManager/TaskManager';
import TaskList from './Components/TaskList/TaskList';
import { Route } from 'react-router-dom';
import './App.css';

class App extends Component {
  
  
  render() {
    return (
      <div className="container">
        <Route path="/" exact component={Login} />
        <Route path="/task-manager" >
          <TaskManager />
          <TaskList />
        </Route>
      </div>
    );
  }
}

export default App;
