import axios from 'axios';

export const NOTE_CHANGE = "NOTES_CHANGE";
export const SUBMIT_FORM = "SUBMIT_FORM";
export const LIST_DATA = "LIST_DATA";
export const ATTORNEY_SELECT = "ATTORNEY_SELECT";
export const NUMBER_SELECT = "NUMBER_SELECT";

export const attorneySelect = event => {
    console.log(event.target.value)
    return {
        type: ATTORNEY_SELECT,
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

export const submitForm = (event, value) => {
    return {
        type: SUBMIT_FORM,
        val: value
    }
}

export const postFormData = (event, payload) => {
    event.preventDefault();
    console.log("[payload]" + payload)
    return dispatch => {
       axios({
        method: "post",
        url: "https://burger-rebuild.firebaseio.com/tasks.json",
        data: {
            data: payload
        }
       }).then(response => {
           console.log(response);
           axios({
               method: "get",
               url: "https://burger-rebuild.firebaseio.com/tasks.json"
           }).then(response => {
               console.log(response);
               dispatch(submitForm(response.data))
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
           console.log(response.data);
           dispatch(listData(response.data));
        });
    }
}