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



export const attorneySelect = event => {
    console.log(event.target.value)
    return {
        type: ATTORNEY_SELECT,
        val: event.target.value
    }
}

export const statusSelect = event => {
    console.log(event.target.value);
    return {
        type: STATUS_SELECT,
        val: event.target.value
    }
}

export const numberSelect = event => {
    console.log(event.target.value)
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
    event.preventDefault();
    return dispatch => {
       axios({
        method: "post",
        url: "https://burger-rebuild.firebaseio.com/tasks.json",
        data: {
            data: payload
        }
       }).then(response => {
           axios({
               method: "get",
               url: "https://burger-rebuild.firebaseio.com/tasks.json"
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
    return dispatch => {
        axios({
            method: "get",
            url: "https://burger-rebuild.firebaseio.com/tasks.json",
        }).then(response => {
           
           let data = response.data;
           let taskArr = [];
           for(let key in data) {
               taskArr.push({
                   id: key,
                   taskData: data[key]
               })
           }
           console.log(taskArr);
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
    console.log("Logout button was clicked");
    return {
        type: LOGOUT
    }
}

export const signupSubmit = (value) => {
    return {
        type: SIGNUP_SUBMIT,
        val: value
    }
}

export const signupAuth = (email, password, username) => {
    return dispatch => {
        axios({
            method: "post",
            url: "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCxqIdZzLfbDNTTppgTA3oK31w93XoFl4Q",
            data: {
                email: email,
                password: password,
                displayName: username,
                returnSecureToken: true
            }
        }).then(response => {
            console.log(response);
            dispatch(signupSubmit(response.data.displayName));
        }).catch(error => {
            console.log(error); 
        });
    }
}

export const loginSubmit = (displayName) => {
    return {
        type: LOGIN_SUBMIT,
        val: displayName
    }
}

export const loginAuth = (email, password) => {
    console.log(email, password)
    return dispatch => {
        axios({
            method: "post",
            url: "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCxqIdZzLfbDNTTppgTA3oK31w93XoFl4Q",
            data: {
                email: email,
                password: password,
                returnSecureToken: true
            }
        }).then(response => {
            console.log(response.data.displayName);
            dispatch(loginSubmit(response.data.displayName));
        }).catch(error => {
            console.log(error); 
        });
    }
}


export const editTask = (value) => {
    console.log(value);
    return {
        type: EDIT_TASK,
        val: value
    }
}

export const postEditTask = (event) => {
    
    return dispatch => {
        axios({
            method: "put",
            url: `https://burger-rebuild.firebaseio.com/tasks/${event.target.name}/data/status.json`,
            data: {
                data: "Complete"
            }
        }).then(response => {
            console.log(response);
            axios({
              method: "get",
              url: "https://burger-rebuild.firebaseio.com/tasks.json"
          }).then(response => {
               
              let data = response.data;
              let taskArr = [];
              for(let key in data) {
                  taskArr.push({
                      id: key,
                      taskData: data[key]
                  })
              }
              console.log(taskArr);
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
    return dispatch => {
        axios({
            method: "put",
            url: `https://burger-rebuild.firebaseio.com/tasks/${event.target.name}.json`,
            data: {
                data: null
            }
        }).then(response => {
            console.log(response);
            axios({
               method: "get",
               url: "https://burger-rebuild.firebaseio.com/tasks.json"
           }).then(response => {
               
               let data = response.data;
               let taskArr = [];
               for(let key in data) {
                   taskArr.push({
                       id: key,
                       taskData: data[key]
                   })
               }
               console.log(taskArr);
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