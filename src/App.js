import React, {Component} from 'react';
import Aux from './Components/hoc/Aux';
import Login from './Components/Login/Login';
import TaskManager from './Components/TaskManager/TaskManager';
import TaskList from './Components/TaskList/TaskList';
import { Route } from 'react-router-dom';
import Header from './Components/Header/Header';
import './App.css';

class App extends Component {
  
  
  render() {
    return (
      <Aux>
        <Header />
        <div className="container">
          <Route path="/login" component={Login} />
          <Route path="/task-manager" >
            <TaskManager />
            <TaskList />
          </Route>
        </div>
      </Aux>
    );
  }
}

export default App;
