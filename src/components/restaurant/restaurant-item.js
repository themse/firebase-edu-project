import React, { Fragment } from 'react';

export const RestaurantItem = ({
    name,
    imageUrl,
    user,
    handleSelect,
    handleDeselect,
    handleRemove,
    votes = {},
}) => {
    const hasUserSelected = Object.keys(votes).includes(user.uid);

    return (
        <div className="card mb-3 position-relative">
            <button
                style={{ width: '25px', height: '25px', right: 0 }}
                type="button"
                className="btn btn-danger btn-sm position-absolute fixed-right d-flex p-0 justify-content-center"
                onClick={handleRemove}
            >
                &times;
            </button>
            {imageUrl && <img src={imageUrl} className="card-img-top" alt={name} />}
            <div className="card-body">
                <h5 className="card-title">
                    {name}{' '}
                    <span className="badge badge-secondary">{Object.keys(votes).length}</span>
                </h5>
                <p className="card-text">
                    {Object.keys(votes).length > 0 ? (
                        <Fragment>
                            <b>with: </b> {Object.values(votes).join(', ')}
                        </Fragment>
                    ) : (
                        <b>Alone</b>
                    )}
                </p>
                {hasUserSelected ? (
                    <button className="btn btn-warning" onClick={handleDeselect}>
                        Nevermind
                    </button>
                ) : (
                    <button className="btn btn-primary" onClick={handleSelect}>
                        Go somewhere
                    </button>
                )}
            </div>
        </div>
    );
};
