import React from 'react';

export const SignOut = ({ signOutHandler }) => (
    <button type="button" className="btn btn-link nav-link" onClick={signOutHandler}>
        Sign Out
    </button>
);
