import axios from 'axios';

export const LOG_IN_USER = 'LOG_IN_USER';
export const LOG_OUT_USER = 'LOG_OUT_USER';
export const UPDATE_ACTIVE_MESSAGE = 'UPDATE_ACTIVE_MESSAGE';
export const FETCH_MESSAGES = 'FETCH_MESSAGES';
export const SET_ACTIVE_MESSAGE = 'SET_ACTIVE_MESSAGE';
export const FETCH_ACTIVE_MESSAGE = 'FETCH_ACTIVE_MESSAGE';
export const MARK_MESSAGE_AS_READ = 'MARK_MESSAGE_AS_READ';
export const SIGN_UP_USER = 'SIGN_UP_USER';

const HMU_API = 'http://localhost:3000';

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
