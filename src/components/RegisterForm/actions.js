import {
    REGISTER_SUCCESS,
    REGISTER_FAIL
} from './types';
import axios from 'axios';

export const register = (email, password) => async (dispatch) => {
    let response = await axios.post(process.env.REACT_APP_API_URL, {
        query: `
            mutation {
                createUser(email: "${email}", password: "${password}") {
                    token
                }
            }
        `
    });
    dispatch({
        type: REGISTER_SUCCESS,
    });
}