import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { database, auth } from "../common/firebase";
import { SignIn } from "./auth/sing-in";
import { SignOut } from "./auth/sign-out";
import { Restaurant } from "./restaurant";
import { Home } from "./home";
import { PrivateRoute } from "../common/middleware/private-route";
import { Loader } from "../components/loader";

export const App = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const [users, setUsers] = useState({});

  const [restaurants, setRestaurant] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const [userRef, setUserRef] = useState(null);
  const usersRef = database.ref("/users");
  const restaurantRef = database.ref("/restaurants");

  useEffect(() => {
    database.ref().on("value", (snapshot) => {
      if (snapshot) {
        setIsLoading(false);
      }
    });

    auth.onAuthStateChanged((user) => {
      if (user) {
        setCurrentUser(user);
        setUserRef(usersRef.child(user.uid));
      }

      // TODO ordering don't work
      restaurantRef.orderByChild("name").on("value", (snapshot) => {
        setRestaurant([...Object.entries(snapshot.val())]);
      });

      usersRef.on("value", (snapshot) => {
        setUsers(snapshot.val());
      });
    });
  }, []);

  useEffect(() => {
    if (userRef && currentUser) {
      userRef.once("value", (snapshot) => {
        if (snapshot.val()) {
          return;
        }
        const { displayName, photoURL, uid, email } = currentUser;
        userRef.set({ displayName, photoURL, uid, email });
      });
    }
  }, [userRef]);

  return isLoading ? (
    <Loader />
  ) : (
    <Router>
      <div className="wrapper">
        <nav className="bg-dark p-2">
          <div className="container">
            <ul className="nav justify-content-end">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/restaurants">
                  Restaurants
                </Link>
              </li>
              <li className="nav-item">
                {currentUser ? (
                  <SignOut onClick={() => setCurrentUser(null)} />
                ) : (
                  <SignIn />
                )}
              </li>
            </ul>
          </div>
        </nav>
        <Switch>
          <PrivateRoute path="/restaurants" currentUser={currentUser}>
            <Restaurant restaurants={restaurants} user={currentUser} />
          </PrivateRoute>
          <Route path="/">
            <Home user={currentUser} users={users} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};
