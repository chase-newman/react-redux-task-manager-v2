import axios from 'axios';

export const NOTE_CHANGE = "NOTES_CHANGE";
export const SUBMIT_FORM = "SUBMIT_FORM";
export const LIST_DATA = "LIST_DATA";
export const ATTORNEY_SELECT = "ATTORNEY_SELECT";
export const NUMBER_SELECT = "NUMBER_SELECT";
export const STATUS_SELECT = "STATUS_SELECT";
export const USERNAME_CHANGE = "USERNAME_CHANGE";
export const EMAIL_CHANGE = "EMAIL_CHANGE";
export const PASSWORD_CHANGE = "PASSWORD_CHANGE";
export const SIGNUP_SUBMIT = "SIGNUP_SUBMIT";
export const LOGIN_SUBMIT = "LOGIN_SUBMIT";
export const LOGOUT = "LOGOUT";
export const EDIT_TASK = "EDIT_TASK";
export const DELETE_TASK = "DELETE_TASK"
export const SET_SELECT = "SET_SELECT";
export const MODAL_CLOSE = "MODAL_CLOSE";
export const AUTH_ERROR = "AUTH_ERROR";
export const CHECK_AUTH = "CHECK_AUTH";



export const attorneySelect = event => {
    return {
        type: ATTORNEY_SELECT,
        val: event.target.value
    }
}

export const statusSelect = event => {
    return {
        type: STATUS_SELECT,
        val: event.target.value
    }
}

export const numberSelect = event => {
    return {
        type: NUMBER_SELECT,
        val: event.target.value
    }
}

export const noteChange = event => {
    return {
        type: NOTE_CHANGE,
        val: event.target.value
    }
}

export const submitForm = (value) => {
    return {
        type: SUBMIT_FORM,
        val: value
    }
}

export const postFormData = (event, payload) => {
    let token = localStorage.getItem("token");
    event.preventDefault();
    return dispatch => {
       axios({
        method: "post",
        url: "https://burger-rebuild.firebaseio.com/tasks.json?auth=" + token,
        data: {
            data: payload
        }
       }).then(response => {
           axios({
               method: "get",
               url: "https://burger-rebuild.firebaseio.com/tasks.json?auth=" + token
           }).then(response => {
               
               dispatch(submitForm(payload))
               
               let data = response.data;
               let taskArr = [];
               for(let key in data) {
                   taskArr.push({
                       id: key,
                       taskData: data[key]
                   })
               }
               dispatch(listData(taskArr.reverse()))
           });
        });
    }
}

export const listData = (value) => {
    return {
        type: LIST_DATA,
        val: value
    }
}

export const getListData = () => {
    let token = localStorage.getItem("token");
    return dispatch => {
        axios({
            method: "get",
            url: "https://burger-rebuild.firebaseio.com/tasks.json?auth=" + token,
        }).then(response => {
           
           let data = response.data;
           let taskArr = [];
           for(let key in data) {
               taskArr.push({
                   id: key,
                   taskData: data[key]
               })
           }
          
           dispatch(listData(taskArr.reverse()));
        });
    }
}

export const usernameChange = event => {
    return {
        type: USERNAME_CHANGE,
        val: event.target.value
    }
}

export const emailChange = event => {
    return {
        type: EMAIL_CHANGE,
        val: event.target.value
    }
}

export const passwordChange = event => {
    return {
        type: PASSWORD_CHANGE,
        val: event.target.value
    }
}

export const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    return {
        type: LOGOUT
    }
}

export const authError = () => {
    return {
        type: AUTH_ERROR
    }
}

export const signupSubmit = (value) => {
    return {
        type: SIGNUP_SUBMIT,
        val: value
    }
}

export const signupAuth = (event, payload) => {
    event.preventDefault();
    return dispatch => {
        axios({
            method: "post",
            url: "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCxqIdZzLfbDNTTppgTA3oK31w93XoFl4Q",
            data: {
                email: payload.email,
                password: payload.password,
                displayName: payload.username,
                returnSecureToken: true
            }
        }).then(response => {
            localStorage.setItem("token", response.data.idToken);
            localStorage.setItem("user", response.data.displayName);
            dispatch(signupSubmit(response.data.displayName));
        }).catch(error => {
            console.log(error);
            dispatch(authError())
        });
    }
}

export const loginSubmit = (displayName) => {
    return {
        type: LOGIN_SUBMIT,
        val: displayName
    }
}

export const loginAuth = (event, payload) => {
    event.preventDefault();
    return dispatch => {
        axios({
            method: "post",
            url: "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCxqIdZzLfbDNTTppgTA3oK31w93XoFl4Q",
            data: {
                email: payload.email,
                password: payload.password,
                returnSecureToken: true
            }
        }).then(response => {
            localStorage.setItem("token", response.data.idToken);
            localStorage.setItem("user", response.data.displayName);
            dispatch(loginSubmit(response.data.displayName));
        }).catch(error => {
            console.log(error);
            dispatch(authError());
        });
    }
}


export const editTask = (value) => {
    return {
        type: EDIT_TASK,
        val: value
    }
}

export const postEditTask = (event) => {
    let token = localStorage.getItem("token");
    return dispatch => {
        axios({
            method: "put",
            url: `https://burger-rebuild.firebaseio.com/tasks/${event.target.name}/data/status.json?auth=${token}`,
            data: {
                data: "Complete"
            }
        }).then(response => {
            axios({
              method: "get",
              url: "https://burger-rebuild.firebaseio.com/tasks.json?auth=" + token
          }).then(response => {
               
              let data = response.data;
              let taskArr = [];
              for(let key in data) {
                  taskArr.push({
                      id: key,
                      taskData: data[key]
                  })
              }
              dispatch(editTask(taskArr.reverse()))
          });
        });
    }
}


export const deleteTask = (value) => {
    return {
        type: DELETE_TASK,
        val: value
    }
}

export const postDeleteTask = (event) => {
    let token = localStorage.getItem("token");
    return dispatch => {
        axios({
            method: "put",
            url: `https://burger-rebuild.firebaseio.com/tasks/${event.target.name}.json?auth=${token}`,
            data: {
                data: null
            }
        }).then(response => {
            axios({
               method: "get",
               url: "https://burger-rebuild.firebaseio.com/tasks.json?auth=" + token
           }).then(response => {
               
               let data = response.data;
               let taskArr = [];
               for(let key in data) {
                   taskArr.push({
                       id: key,
                       taskData: data[key]
                   })
               }
               
               dispatch(deleteTask(taskArr.reverse()))
           });
        });
    }
}

export const setSelect = (value) => {
    return {
        type: SET_SELECT,
        val: value
    }
}

export const modalClose = () => {
    return {
        type: MODAL_CLOSE
    }
}

export const checkAuth = () => {
    let user = localStorage.user
    return {
        type: CHECK_AUTH,
        val: user
    }
}