import React from "react";
import { CurrentUser } from "../current-user";

export const Home = ({ user = null }) => {
  return (
    <div className="container">
      {user ? (
        <CurrentUser user={user} />
      ) : (
        <p className="alert alert-warning">Please sign in</p>
      )}
    </div>
  );
};
