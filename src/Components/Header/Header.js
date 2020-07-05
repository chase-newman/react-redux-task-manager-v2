import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actionCreators from '../../store/actions';
import classes from './Header.module.css';

const header = (props) => {
    
    let navbarBrand = `navbar-brand ${classes.Header}`;
    let logoutBtnStyle = `nav-item nav-link ${classes.Button}`
    
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Link className={navbarBrand} to="/" >Task Manager</Link>
          <button 
            className="navbar-toggler" 
            type="button" 
            data-toggle="collapse" 
            data-target="#navbarNavAltMarkup" 
            aria-controls="navbarNavAltMarkup" 
            aria-expanded="false" 
            ria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              {!props.user ? <Link className="nav-item nav-link" to="/login">Login</Link> : 
              <Link 
                className={logoutBtnStyle}
                onClick={props.logoutHandler}
                >Logout</Link>}
              <Link className="nav-item nav-link" to="/task-manager">Task List</Link>
            </div>
          </div>
        </nav>
    );
    
    
}

const mapStateToProps = state => {
  return {
    user: state.payload.user
  }
}

const mapDispatchToProps = dispatch => {
  return {
    logoutHandler: () => dispatch(actionCreators.logout)
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(header);