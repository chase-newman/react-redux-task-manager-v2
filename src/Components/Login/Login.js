import React from 'react';
import classes from "./Login.module.css";


const login = (props) => {
    
    let rowStyle = `row ${classes.Row}`
    
    return(
        <div className={rowStyle}>
            <div className="col-6">
                <form>
                    <div className="form-group">
                        <label>Username</label>
                        <input type="email" className="form-control" />
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" className="form-control" />
                    </div>
                    <button className="btn btn-block btn-outline-success">Sign Up</button>
                    <button className="btn btn-block btn-secondary">Login</button>
                </form>
            </div>
        </div>
    );
}


export default login;