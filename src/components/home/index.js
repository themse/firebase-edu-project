import React, { Fragment } from "react";
import { CurrentUser } from "../current-user";
import { ProfileCard } from "../profile-card";

export const Home = ({ users = {}, user = null }) => {
  return (
    <div className="container">
      {user ? (
        <Fragment>
          <div className="float-right">
            <CurrentUser user={user} />
          </div>
          <div className="clearfix"></div>
          <p className="display-4 m-2">All users:</p>
          <div className="row">
            {Object.entries(users).map(([key, user]) => (
              <div key={key} className="col-sm-3">
                <ProfileCard user={user} />
              </div>
            ))}
          </div>
        </Fragment>
      ) : (
        <p className="alert alert-warning">Please sign in</p>
      )}
    </div>
  );
};
