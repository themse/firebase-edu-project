import React from 'react';

export const CurrentUser = ({ user }) => (
    <div className="card mb-3" style={{ maxWidth: '300px' }}>
        <div className="row no-gutters">
            <div className="col-md-4">
                <img src={user.photoURL} className="card-img" alt={user.displayName} />
            </div>
            <div className="col-md-8">
                <div className="card-body">
                    <h5 className="card-title">
                        {user.displayName} <small className="text-muted">(you)</small>
                    </h5>
                    <p className="card-text">
                        <small className="text-muted">{user.email}</small>
                    </p>
                </div>
            </div>
        </div>
    </div>
);
