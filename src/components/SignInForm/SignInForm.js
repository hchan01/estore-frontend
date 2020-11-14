import React, { useState } from 'react';
import './styles.scss';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock, faUser } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';
import { login } from './actions';
import { useHistory } from 'react-router-dom';

const SignInForm = () => {
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();

    const signIn = async (e) => {
        e.preventDefault();
        
        dispatch(login(email, password));
        history.push('/');
    }

    return (
        // <section className="signin">
            <div className="signin__box">
                <div className="signin__form-wrapper">
                    <h1 className="signin__heading">Sign in</h1>
                    <form className="signin__form" onSubmit={signIn}>
                        <div className="signin__input-wrapper">
                            <input className="signin__input" type="email" placeholder="Email" onChange={e => { setEmail(e.target.value); }} />
                            <FontAwesomeIcon icon={faUser} className="signin__icon" />
                        </div>
                        <div className="signin__input-wrapper">
                            <input className="signin__input" type="password" placeholder="Password" onChange={e => { setPassword(e.target.value); }} />
                            <FontAwesomeIcon icon={faLock} className="signin__icon" />
                        </div>
                        <label>
                            <input type="checkbox" /> Stay signed in
                        </label>
                        <div className="signin__input-wrapper">
                            <input className="signin__input signin__submit" type="submit" value="Sign In" />
                        </div>
                    </form>

                    <NavLink exact to='/register'>Create an account</NavLink>
                </div>
            </div>
        // </section>
    )
}

export default SignInForm;