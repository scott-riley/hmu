import axios from 'axios';

export const LOG_IN_USER = 'LOG_IN_USER';
export const LOG_OUT_USER = 'LOG_OUT_USER';
export const UPDATE_ACTIVE_MESSAGE = 'UPDATE_ACTIVE_MESSAGE';
export const SHOW_MESSAGES = 'SHOW_MESSAGES';

const HMU_API = 'http://localhost:3000';

export function logInUser(props) {
  const {email, password} = props;
  console.log(props);
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
