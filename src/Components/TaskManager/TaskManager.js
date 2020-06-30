import React from 'react'
import { connect } from 'react-redux';
import classes from './TaskManager.module.css';
import * as actionCreators from '../../store/actions';


const taskManager = (props) => {
    
    let rowStyle = `row ${classes.Row}`
    
    return (
        <div className={rowStyle}>
            <div className="col-8">
                <form onSubmit={event => props.formSubmitHandler(event, props.payload)}>
                    <div className="form-group">
                        <label htmlFor="attorneys">Requesting Attorney</label>
                        <select 
                            className="form-control" 
                            name="attorneys" 
                            id="attorneys"
                            onChange={props.attorneySelectHandler}>
                            <option>...</option>
                            <option value="Max Karpel">Max Karpel</option>
                            <option value="Fran Skoller">Fran Skoller</option>
                            <option value="Raji Kochhar">Raji Kochhar</option>
                            <option value="Lauren Block">Lauren Block</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="estimated-time">Time to Completion (Hours)</label>
                        <input
                            onChange={props.numberSelectHandler}
                            className="form-control"
                            placeholder="..."
                            id="estimated-time"
                            type="number" 
                            step="0.01"/>
                    </div>
                    <div className="form-group">
                        <textarea 
                            type="text"
                            placeholder="Enter task notes here..."
                            id="notes-input"
                            className="form-control"
                            value={props.noteText}
                            onChange={props.noteChangeHandler}/>
                    </div>
                    <button 
                        type="submit" 
                        className="btn btn-block btn-outline-success">Submit</button>
                </form>
            </div>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        selectedAttorney: state.payload.selectedAttorney,
        noteText: state.payload.noteText,
        payload: state.payload
    }
}

const mapDispatchToProps = dispatch => {
    return {
        noteChangeHandler: event => dispatch(actionCreators.noteChange(event)),
        formSubmitHandler: (event, attorney, task) => dispatch(actionCreators.postFormData(event, attorney, task)),
        attorneySelectHandler: event => dispatch(actionCreators.attorneySelect(event)),
        numberSelectHandler: event => dispatch(actionCreators.numberSelect(event))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(taskManager);