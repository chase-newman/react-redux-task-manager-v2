import React, {Component} from 'react';
import Aux from './Components/hoc/Aux';
import Login from './Components/Login/Login';
import TaskManager from './Components/TaskManager/TaskManager';
import TaskList from './Components/TaskList/TaskList';
import LandingPage from './Components/LandingPage/LandingPage';
import { Route } from 'react-router-dom';
import Header from './Components/Header/Header';
import { connect } from 'react-redux';
import * as actionCreators from './store/actions';
import './App.css';

class App extends Component {
  
  componentDidMount() {
    if(localStorage.token) {
      this.props.onCheckAuth();
    } 
  }
  
  render() {
    return (
      <Aux>
        <Header />
        <div className="container">
          <Route path="/" exact component={LandingPage} />
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


const mapDispatchToProps = dispatch => {
  return {
    onCheckAuth: () => dispatch(actionCreators.checkAuth())
  }
}
export default connect(null, mapDispatchToProps)(App);
