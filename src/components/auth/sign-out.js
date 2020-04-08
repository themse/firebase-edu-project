import React from "react";
import { auth } from "../../common/firebase";

export const SignOut = () => (
  <button
    type="button"
    className="btn btn-link nav-link"
    onClick={() => auth.signOut()}
  >
    Sign Out
  </button>
);
