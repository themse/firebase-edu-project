import React from "react";
import { auth, googleAuthProvider } from "../../common/firebase";

export const SignIn = () => {
  return (
    <button
      type="button"
      className="btn btn-link nav-link"
      onClick={() => auth.signInWithPopup(googleAuthProvider)}
    >
      Sign In
    </button>
  );
};
