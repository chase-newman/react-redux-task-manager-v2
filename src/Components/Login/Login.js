import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Aux from '../hoc/Aux';
import classes from "./Login.module.css";
import * as actionCreators from '../../store/actions';


const login = (props) => {
    
    let rowStyle = `row justify-content-center ${classes.Row}`;
    let colStyle = `col-6 ${classes.Col}`
    
    return(
         <Aux>
            {!props.auth ? <div className={rowStyle}>
                <div className={colStyle} style={{borderRight: "2px solid black"}}>
                    <h3>Sign Up</h3>
                        <div className="form-group">
                            <label>Username</label>
                            <input 
                                type="text" 
                                className="form-control"
                                onChange={props.usernameChange}
                                />
                        </div>
                    
                        <div className="form-group">
                            <label>Email</label>
                            <input 
                                type="email" 
                                className="form-control" 
                                onChange={props.onEmailChange}
                                />
                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <input 
                                type="password" 
                                className="form-control"
                                onChange={props.onPasswordChange}
                                />
                        </div>
                        <button 
                            className="btn btn-block btn-outline-success"
                            onClick={() => props.onSignupSubmit(props.email,props.password, props.username)}>Sign Up</button>
                </div>
                    <div className={colStyle}>
                        <h3>Login</h3>
                        <div className="form-group">
                            <label>Email</label>
                            <input 
                                type="email" 
                                className="form-control" 
                                onChange={props.onEmailChange}
                                />
                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <input 
                                type="password" 
                                className="form-control"
                                onChange={props.onPasswordChange}
                                />
                        </div>
                        <button 
                            className="btn btn-block btn-secondary"
                            onClick={() => props.onLoginSubmit(props.email,props.password)}>Login</button>
                   
                </div>
            </div> : <Redirect to="task-manager" />}
        </Aux>
    );
}

const mapStateToProps = state => {
    return {
        auth: state.auth,
        email: state.email,
        password: state.password,
        username: state.username
    }
}

const mapDispatchToProps = dispatch => {
    return {
        usernameChange: event => dispatch(actionCreators.usernameChange(event)),
        onEmailChange: event => dispatch(actionCreators.emailChange(event)),
        onPasswordChange: event => dispatch(actionCreators.passwordChange(event)),
        onSignupSubmit: (email, password, username) => dispatch(actionCreators.signupAuth(email, password, username)),
        onLoginSubmit: (email, password) => dispatch(actionCreators.loginAuth(email, password)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(login);