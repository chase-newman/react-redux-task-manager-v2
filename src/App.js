import React, {Component} from 'react';
import Aux from './Components/hoc/Aux';
import Login from './Components/Login/Login';
import TaskManager from './Components/TaskManager/TaskManager';
import TaskList from './Components/TaskList/TaskList';
import LandingPage from './Components/LandingPage/LandingPage';
import { Route } from 'react-router-dom';
import Header from './Components/Header/Header';
import './App.css';

class App extends Component {
  state = {
    newTaskImg: "./assets/new-task.png",
    taskListImg: "./assets/task-list.png"
  }
  
  
  render() {
    return (
      <Aux>
        <Header />
        <div className="container">
          <Route 
            path="/" 
            exact 
            render={() => {
              return <LandingPage />
            }} />
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
