import React from 'react';
import Aux from '../hoc/Aux';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import classes from './Landing.module.css';
import undraw from '../../undraw.svg';


const landingPage = (props) => {
    
    let rowStyle = `row justify-content-center ${classes.Row}`;
    let imgStyle = `img-fluid ${classes.IMG}`;
    return(
        <Aux>
           <div className={rowStyle}>
                <div className="col-lg-4 col-md-4 col-sm-12">
                    <h1>Task Manager</h1>
                    <p>Organize your teams tasks and workflow with Task Manager</p>
                    {!props.auth ?
                    <Link 
                        className="btn btn-success btn-block"
                        to="/login">Sign Up or Login to use Task Manager</Link> :
                     <Link 
                        className="btn btn-success btn-block"
                        to="/task-manager">Go to Task Manager</Link>   
                    }
                </div>
                <div className="col-lg-8 col-md-8 col-sm-12">
                    <img
                        src={undraw}
                        className={imgStyle} 
                        alt="task-screenshot"/>
                </div>
            </div>
        </Aux>
    );
};


const mapStateToProps = state => {
    return {
        auth: state.auth,
        newTaskImg: state.newTaskImg,
        taskListImg: state.taskListImg
    }
}


export default connect(mapStateToProps)(landingPage);


