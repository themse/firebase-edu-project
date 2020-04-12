import React from 'react';

export const SignIn = ({ signInHandler }) => {
    return (
        <button type="button" className="btn btn-link nav-link" onClick={signInHandler}>
            Sign In
        </button>
    );
};
