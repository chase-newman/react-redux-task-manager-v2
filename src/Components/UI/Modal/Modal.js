import React from 'react';
import { connect } from 'react-redux';
import classes from './Modal.module.css';
import * as actionCreators from '../../../store/actions';

const modal = (props) => (
        <div className={classes.Modal}>
            <h3><strong>Error</strong> <i className="fas fa-exclamation-triangle"></i></h3>
            <p>{props.errMessage}</p>
            <button 
                className="btn btn-primary"
                onClick={props.onModalClose}>Try Again</button>
        </div>    
);



const mapStateToProps = state => {
    return {
        error: state.error,
        errMessage: state.errMessage
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onModalClose: () => dispatch(actionCreators.modalClose())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(modal);