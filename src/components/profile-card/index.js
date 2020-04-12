import React from 'react';

export const ProfileCard = ({ user }) => {
    return (
        <div className="card" style={{ width: '18rem' }}>
            <img src={user.photoURL} className="card-img-top" alt={user.displayName} />
            <div className="card-body">
                <p className="card-text">{user.displayName}</p>
                <small className="card-text text-muted">{user.email}</small>
            </div>
        </div>
    );
};
