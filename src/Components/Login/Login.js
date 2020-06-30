import React from 'react';
import { connect } from 'react-redux'; 
import classes from "./Login.module.css";
import * as actionCreators from '../../store/actions';


const login = (props) => {
    
    let rowStyle = `row ${classes.Row}`
    
    return(
        <div className={rowStyle}>
            <div className="col-6">
                    <div className="form-group">
                        <label>Username</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            
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
                        onClick={() => props.onSignupSubmit(props.email,props.password)}>Sign Up</button>
                    <button 
                        className="btn btn-block btn-secondary"
                        onClick={() => props.onLoginSubmit(props.email,props.password)}>Login</button>
               
            </div>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        email: state.email,
        password: state.password
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onEmailChange: event => dispatch(actionCreators.emailChange(event)),
        onPasswordChange: event => dispatch(actionCreators.passwordChange(event)),
        onSignupSubmit: (email, password) => dispatch(actionCreators.signupAuth(email, password)),
        onLoginSubmit: (email, password) => dispatch(actionCreators.loginAuth(email, password)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(login);