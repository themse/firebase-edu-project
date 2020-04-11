import React from "react";
import { auth } from "../../common/firebase";

export const SignOut = ({ signOutHandler }) => (
  <button
    type="button"
    className="btn btn-link nav-link"
    onClick={signOutHandler}
  >
    Sign Out
  </button>
);
