import * as actionTypes from './actions';

const initialState = {
    payload: {
        selectedAttorney: " ",
        numberOfHours: " ",
        noteText: "",
    },
    listData: null
}


const reducer = (state = initialState, action) => {
    if(action.type === actionTypes.NOTE_CHANGE) {
        return {
            ...state,
            payload: {
                ...state.payload,
                noteText: action.val 
            }
        }
    }
    else if(action.type === actionTypes.ATTORNEY_SELECT) {
        return {
            ...state,
            payload: {
                ...state.payload,
                selectedAttorney: action.val
            }
        }
    }
    else if(action.type === actionTypes.NUMBER_SELECT) {
        return {
            ...state,
            payload: {
                ...state.payload,
                numberOfHours: action.val
            }
        }
    }
    else if(action.type === actionTypes.SUBMIT_FORM) {
        return {
            payload: {
                selectedAttorney: null,
                numberOfHours: 0,
                noteText: "",
            },
            listData: action.val
        }
    }
    else if(action.type === actionTypes.LIST_DATA) {
        return {
            ...state,
            listData: action.val
        }
    }
    else {
      return state;  
    }
}

export default reducer;

