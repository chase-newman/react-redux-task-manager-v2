import * as actionTypes from './actions';

const initialState = {
    newTaskImg: "./assets/new-task.png",
    taskListImg: "./assets/task-list.png",
    auth: false,
    authPayload: {
        username: "",
        email: "",
        password: ""
    },
    payload: {
        selectedAttorney: "",
        numberOfHours: "",
        noteText: "",
        status: {
            data: "In Progress"
        },
        user: ""
    },
    listData: null,
    error: false,
    errMessage: "Oops, something went wrong. Please try again... "
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
    else if(action.type === actionTypes.STATUS_SELECT) {
        return {
            ...state,
            payload: {
                ...state.payload,
                status: {
                    data: action.val
                }
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
            ...state,
            payload: {
                ...state.payload,
                noteText: ""
                
            }
        }
    }
    else if(action.type === actionTypes.LIST_DATA) {
        return {
            ...state,
            listData: action.val
        }
    }
    else if(action.type === actionTypes.USERNAME_CHANGE) {
        return {
            ...state,
            authPayload: {
                ...state.authPayload, 
                username: action.val
            }
        }
    }
    else if(action.type === actionTypes.EMAIL_CHANGE) {
        return {
            ...state,
            authPayload: {
                ...state.authPayload,
                email: action.val
            }
        }
    }
    else if(action.type === actionTypes.PASSWORD_CHANGE) {
        return {
            ...state,
            authPayload: {
                ...state.authPayload,
                password: action.val
            }
        }
    }
    else if(action.type === actionTypes.SIGNUP_SUBMIT) {
        return {
            ...state,
            auth: true,
            email: "",
            password: "",
            payload: {
                ...state.payload,
                user: action.val
            }
        }
    }
    else if(action.type === actionTypes.LOGIN_SUBMIT) {
        return {
            ...state,
            auth: true,
            authPayload: {
                email: "",
                password: "",
                username: ""
            },
            payload: {
                ...state.payload,
                user: action.val
            }
        }
    }
    else if(action.type === actionTypes.LOGOUT) {
        return {
            ...state,
            auth: null,
            authPayload: {
                email: "",
                password: "",
                username: ""
            },
            payload: {
                ...state.payload,
                user: null
            }
        }
    }
    else if(action.type === actionTypes.EDIT_TASK) {
        return {
            ...state,
            listData: action.val
        }
    }
    else if(action.type === actionTypes.DELETE_TASK) {
        return {
            ...state,
            listData: action.val
        }
    }
    else if(action.type === actionTypes.SET_SELECT) {
        return {
            ...state,
            payload: {
                ...state.payload,
                status: action.val
            }
        }
    }
    else if(action.type === actionTypes.MODAL_CLOSE) {
        return {
            ...state,
            error: false
        }
    }
    else if(action.type === actionTypes.AUTH_ERROR) {
        return {
            ...state,
            error: true
        }
    }
    else {
      return state;  
    }
}

export default reducer;

