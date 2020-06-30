import React, {Component} from 'react';
import { connect } from 'react-redux';
import classes from './TaskList.module.css';
import * as actionCreators from '../../store/actions';

class TaskList extends Component {
    
    componentDidMount() {
        this.props.getData();
    }
    
    render() {
        
        let rowStyle = `row ${classes.Row}`
        
        return(
            <div className={rowStyle}>
                <div className="col-8">
                    <h3>List of Tasks</h3>
                </div>
            </div>
        );
    }
}


const mapDispatchToProps = dispatch => {
    return {
        getData: () => dispatch(actionCreators.getListData())
    }
}


export default connect(null, mapDispatchToProps)(TaskList);