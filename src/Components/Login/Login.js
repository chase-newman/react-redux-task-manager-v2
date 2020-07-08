import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Aux from '../hoc/Aux';
import Modal from '../UI/Modal/Modal';
import classes from "./Login.module.css";
import * as actionCreators from '../../store/actions';


const login = (props) => {
    
    let rowStyle = `row justify-content-center ${classes.Row}`;
    let colStyle = `col-6 ${classes.Col}`
    
    return(
         <Aux>
            {props.error ? <Modal /> : null}
            {!props.auth ? <div className={rowStyle}>
                <div className={colStyle} style={{borderRight: "2px solid black"}}>
                    <h3>Sign Up</h3>
                        <form onSubmit={(event) => props.onSignupSubmit(event, props.authPayload)}>
                            <div className="form-group">
                                <label>Username</label>
                                <input 
                                    type="text" 
                                    className="form-control"
                                    onChange={props.usernameChange}
                                    required
                                    />
                            </div>
                        
                            <div className="form-group">
                                <label>Email</label>
                                <input 
                                    type="email" 
                                    className="form-control" 
                                    onChange={props.onEmailChange}
                                    required
                                    />
                            </div>
                            <div className="form-group">
                                <label>Password</label>
                                <input 
                                    type="password" 
                                    className="form-control"
                                    placeholder="Must be at least 6 characters..."
                                    onChange={props.onPasswordChange}
                                    required
                                    />
                            </div>
                            <button 
                                className="btn btn-block btn-outline-success"
                                type="submit">Sign Up</button>
                        </form>
                </div>
                    <div className={colStyle}>
                        <h3>Login</h3>
                            <form onSubmit={(event) => props.onLoginSubmit(event, props.authPayload)}>
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
                                    type="submit">Login</button>
                        </form>
                    </div>
            </div> : <Redirect to="task-manager" />}
        </Aux>
    );
}

const mapStateToProps = state => {
    return {
        auth: state.auth,
        authPayload: state.authPayload,
        error: state.error,
        errMessage: state.errMessage
    }
}

const mapDispatchToProps = dispatch => {
    return {
        usernameChange: event => dispatch(actionCreators.usernameChange(event)),
        onEmailChange: event => dispatch(actionCreators.emailChange(event)),
        onPasswordChange: event => dispatch(actionCreators.passwordChange(event)),
        onSignupSubmit: (event, payload) => dispatch(actionCreators.signupAuth(event, payload)),
        onLoginSubmit: (event, payload) => dispatch(actionCreators.loginAuth(event, payload)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(login);