import React from 'react';
import Aux from '../hoc/Aux';
import { Link } from 'react-router-dom';
import classes from './Landing.module.css';


const landingPage = (props) => {
    
    let rowStyle = `row justify-content-center ${classes.Row}`;
    return(
        <Aux>
           <div className={rowStyle}>
                <div className="col-6">
                    <h1>Task Manager</h1>
                    <p>Organize your tasks and workflow with Task Manager</p>
                    <Link 
                        className="btn btn-success btn-block"
                        to="/login">Sign Up or Login to use Task Manager</Link>
                </div>
            </div>
            <div className={rowStyle}>
                <div className="col-lg-6 col-sm-10">
                    <img
                        src={props.taskListImg}
                        className="img-fluid" 
                        alt="task-screenshot"/>
                </div>
                <div className="col-lg-6 col-sm-10">
                    <img
                        src={props.newTaskImg}
                        className="img-fluid" 
                        alt="task-screenshot"/>
                </div>
            </div>
        </Aux>
    );
};



export default landingPage;


