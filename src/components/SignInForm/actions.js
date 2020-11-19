import {
    LOGIN_SUCCESS,
    LOGIN_FAIL
} from './types';
import axios from 'axios';

export const login = (email, password) => async (dispatch) => {
    let response = await axios.post(process.env.REACT_APP_API_URL, {
        query: `
            mutation {
                login(email: "${email}", password: "${password}") {
                    token
                }
            }
        `
    });
    dispatch({
        type: LOGIN_SUCCESS,
    });
}