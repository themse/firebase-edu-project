import React from "react";
import { auth } from "../../common/firebase";

export const SignOut = ({ onClick = null }) => (
  <button
    type="button"
    className="btn btn-link nav-link"
    onClick={() => {
      auth.signOut();
      if (onClick) {
        onClick();
      }
    }}
  >
    Sign Out
  </button>
);
