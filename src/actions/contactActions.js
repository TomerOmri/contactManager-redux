import {ADD_CONTACT, DELETE_CONTACT, GET_CONTACTS} from "./types";
import axios from 'axios';

export const getContacts = () => async dispatch => {
    const usersList = await axios.get("https://jsonplaceholder.typicode.com/users");
    dispatch({
        type: GET_CONTACTS,
        payload: usersList.data
    });
}

export const addContact = (contact) => async dispatch => {
    const res = await axios.post(`https://jsonplaceholder.typicode.com/users`, contact);

    dispatch({
        type: ADD_CONTACT,
        payload: res.data
    });
}

export const deleteContact = (id) => async dispatch => {
    await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);

    dispatch( {
        type: DELETE_CONTACT,
        payload: id
    });
}