import React from 'react';

const RegisterScreen = () => (
    <div className="splash text-center">
        <h1>Create an account</h1>

        <form>
            <label for="email">Email</label>
            <input type="email" id="email" />

            <label for="password">Password</label>
            <input type="password" id="password" />

            <label for="password-confirm">Confirm Password</label>
            <input type="password" id="password-confirm" />

            <button type="submit">Create account</button>
        </form>
    </div>
)


export default RegisterScreen;