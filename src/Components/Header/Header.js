import React from 'react';
import { Link } from 'react-router-dom';
import classes from './Header.module.css';

const header = () => {
    
    let navbarBrand = `navbar-brand ${classes.Header}`;
    
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <span className={navbarBrand} to="#" disabled>Task Manager</span>
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
              <Link className="nav-item nav-link active" to="/login">Login <span className="sr-only">(current)</span></Link>
              <Link className="nav-item nav-link" to="/task-manager">Task List</Link>
            </div>
          </div>
        </nav>
    );
    
    
}


export default header;