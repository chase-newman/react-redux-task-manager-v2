import React, {Component} from 'react';
import { connect } from 'react-redux';
import classes from './TaskList.module.css';
import * as actionCreators from '../../store/actions';

class TaskList extends Component {
    
    componentDidMount() {
        this.props.getData();
    }
    
    render() {
        
        let rowStyle = `row ${classes.Row}`;
        let listItemStyle  = `list-group-item ${classes.listItem}`;
        let spanStyle = `${classes.spanStyle}`;
        let tasks = null;
        
        if(this.props.listData) {
            tasks = this.props.listData.map(el => {
                return (
                    <li key={el.id} className={listItemStyle} >
                        <span className={spanStyle}>
                            <strong>Task:</strong> {el.taskData.data.noteText}
                        </span>
                        <span className={spanStyle}>
                            <strong>Supervisor: </strong> {el.taskData.data.selectedAttorney} 
                        </span>
                        <span className={spanStyle}>
                            <strong>Time: </strong> {el.taskData.data.numberOfHours} Hour(s)
                        </span>
                        <span className={spanStyle}>
                            <strong>Status: </strong> 
                                <span 
                                    style={el.taskData.data.status.data === "In Progress" ? 
                                        {color: "red"} : {color: "green"}
                                            }>{el.taskData.data.status.data}</span>
                                </span>
                        <span>
                        <span className={spanStyle}>
                            <strong>User: </strong> {el.taskData.data.user}
                        </span>
                            <button 
                                className={classes.Button} 
                                style={{color: "red"}}
                                name={el.id}
                                onClick={(event) => this.props.deleteTask(event)}>Delete</button>
                            {el.taskData.data.status.data === "In Progress" ? 
                                <button 
                                    className={classes.Button} 
                                    style={{color: "orange"}}
                                    name={el.id}
                                    onClick={(event) => this.props.editTask(event)}>Task Complete</button>:
                                null    
                            }
                            
                        </span>
                    </li>    
                );
            })
        }
        
        
        return(
            <div className={rowStyle}>
                {this.props.auth ? <div className="col-lg-8 col-sm-12">
                    <h3>Task Board</h3>
                    <ul className="list-group">
                        {tasks}
                    </ul>
                </div> : null}
            </div>
            );
        }
    }


const mapStateToProps = state => {
    return {
        auth: state.auth,
        listData: state.listData
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getData: () => dispatch(actionCreators.getListData()),
        deleteTask: (event) => dispatch(actionCreators.postDeleteTask(event)),
        editTask: (event) => dispatch(actionCreators.postEditTask(event))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(TaskList);