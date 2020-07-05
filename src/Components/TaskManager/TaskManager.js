import React, {Component} from 'react'
import { connect } from 'react-redux';
import classes from './TaskManager.module.css';
import * as actionCreators from '../../store/actions';


class TaskManager extends Component {
    
    
    componentDidMount() {
        if(this.props.auth) {
            let statusEl = document.getElementById('status').value;
            console.log(statusEl);
        }
    }
    
    render() {
    
    let rowStyle = `row ${classes.Row}`
    
    
    return (
        <div className={rowStyle}>
            {this.props.auth ? <div className="col-8">
                <h3>Submit New Task</h3>
                <form onSubmit={event => this.props.formSubmitHandler(event, this.props.payload)}>
                    <div className="form-group">
                        <label htmlFor="attorneys">Requesting Attorney</label>
                        <select 
                            className="form-control" 
                            name="attorneys" 
                            id="attorneys"
                            onChange={this.props.attorneySelectHandler}>
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
                            onChange={this.props.numberSelectHandler}
                            className="form-control"
                            placeholder="..."
                            id="estimated-time"
                            type="number" 
                            step="0.1"/>
                    </div>
                    <div className="form-group">
                        <textarea 
                            type="text"
                            placeholder="Enter task notes here..."
                            id="notes-input"
                            className="form-control"
                            value={this.props.noteText}
                            onChange={this.props.noteChangeHandler}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="status">Status</label>
                        <select 
                            className="form-control" 
                            name="status" 
                            id="status"
                            onChange={this.props.statusSelectHandler}
                            >
                            <option value="In-Progress" defaultValue>In Progress</option>
                            <option value="Complete">Complete</option>
                        </select>
                    </div>
                    <button 
                        type="submit" 
                        className="btn btn-block btn-outline-success">Submit</button>
                </form>
            </div> : 
                <div className="col-8">
                    <h1>Please sign up or login to use Task Manager...</h1>
                </div>
            }
        </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        auth: state.auth,
        selectedAttorney: state.payload.selectedAttorney,
        noteText: state.payload.noteText,
        payload: state.payload
    }
}

const mapDispatchToProps = dispatch => {
    return {
        noteChangeHandler: event => dispatch(actionCreators.noteChange(event)),
        formSubmitHandler: (event, payload) => dispatch(actionCreators.postFormData(event, payload)),
        attorneySelectHandler: event => dispatch(actionCreators.attorneySelect(event)),
        numberSelectHandler: event => dispatch(actionCreators.numberSelect(event)),
        statusSelectHandler: event => dispatch(actionCreators.statusSelect(event))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskManager);