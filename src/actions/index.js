import axios from 'axios';

export const LOG_IN_USER = 'LOG_IN_USER';
export const LOG_OUT_USER = 'LOG_OUT_USER';
export const UPDATE_ACTIVE_MESSAGE = 'UPDATE_ACTIVE_MESSAGE';
export const FETCH_MESSAGES = 'FETCH_MESSAGES';
export const SET_ACTIVE_MESSAGE = 'SET_ACTIVE_MESSAGE';
export const FETCH_ACTIVE_MESSAGE = 'FETCH_ACTIVE_MESSAGE';
export const MARK_MESSAGE_AS_READ = 'MARK_MESSAGE_AS_READ';
export const SIGN_UP_USER = 'SIGN_UP_USER';
export const FETCH_USER = 'FETCH_USER';
export const FETCH_KEY = 'FETCH_KEY';
export const EDIT_EMAIL = 'EDIT_EMAIL';
export const DELETE_MESSAGE = 'DELETE_MESSAGE';

const HMU_API = 'https://api.hmu.cool';

export function logInUser(props) {
  const {email, password} = props;
  const grant_type = "password";
  const requestData = {
    username: email,
    password: password,
    grant_type: "password"
  };
  const request = axios.post(`${HMU_API}/access_tokens/`, requestData);
  return {
    type: LOG_IN_USER,
    payload: request,
  }
}

export function fetchMessages() {
  const token = localStorage.getItem('token');
  const request = axios.get(`${HMU_API}/messages?access_token=${token}`);
  return {
    type: FETCH_MESSAGES,
    payload: request,
  }
}

export function setActiveMessage(message) {
  return {
    type: SET_ACTIVE_MESSAGE,
    payload: message,
  }
}

export function fetchActiveMessage(message) {
  const token = localStorage.getItem('token');
  const request = axios.get(`${HMU_API}/messages/single/${message}?access_token=${token}`);
  return {
    type: FETCH_ACTIVE_MESSAGE,
    payload: request,
  }
}

export function markMessageAsRead(message) {
  const token = localStorage.getItem('token');
  const request = axios.put(`${HMU_API}/messages/single/${message}?access_token=${token}`, {
    status: "read"
  });
  return {
    type: MARK_MESSAGE_AS_READ,
    payload: request,
  }
}

export function signUpUser(props) {
  const {email, password} = props;
  const username = email;
  const signUpData = {
    username: username,
    email: email,
    password: password
  }
  const request = axios.post(`${HMU_API}/users`, signUpData);
  return {
    type: SIGN_UP_USER,
    payload: request,
  }
}

export function fetchUser() {
  const token = localStorage.getItem('token');
  const id = localStorage.getItem('id');
  const request = axios.get(`${HMU_API}/users/${id}?access_token=${token}`);
  return {
    type: FETCH_USER,
    payload: request,
  }
}

export function fetchKey() {
  const token = localStorage.getItem('token');
  const request = axios.get(`${HMU_API}/user_keys?access_token=${token}`);
  return {
    type: FETCH_KEY,
    payload: request,
  }
}

export function editEmail(props) {
  const {email} = props;
  const token = localStorage.getItem('token');
  const id = localStorage.getItem('id');
  const requestData = {
    email: email,
    username: email,
  };
  const request = axios.put(`${HMU_API}/users/${id}?access_token=${token}`, requestData);
  return {
    type: EDIT_EMAIL,
    payload: request,
  }
}

export function deleteMessage(id) {
  const token = localStorage.getItem('token');
  const request = axios.delete(`${HMU_API}/messages/single/${id}?access_token=${token}`);
  return {
    type: DELETE_MESSAGE,
    payload: id,
  }
}
