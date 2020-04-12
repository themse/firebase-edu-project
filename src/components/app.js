import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { database } from '../common/firebase';
import { SignIn } from './auth/sing-in';
import { SignOut } from './auth/sign-out';
import { Restaurant } from './restaurant';
import { Home } from './home';
import { Chat } from './chat';
import { PrivateRoute } from '../common/middleware/private-route';
import { Loader } from '../components/loader';

export const App = ({ auth, signIn, signOut }) => {
    const [users, setUsers] = useState({});

    const [restaurants, setRestaurant] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const [userRef, setUserRef] = useState(null);
    const usersRef = database.ref('/users');
    const restaurantRef = database.ref('/restaurants');

    useEffect(() => {
        database.ref().on('value', (snapshot) => {
            if (snapshot) {
                setIsLoading(false);
            }
        });

        if (auth) {
            setUserRef(usersRef.child(auth.uid));
        }

        // TODO ordering don't work
        restaurantRef.orderByChild('name').on('value', (snapshot) => {
            setRestaurant([...Object.entries(snapshot.val())]);
        });

        usersRef.on('value', (snapshot) => {
            setUsers(snapshot.val());
        });
    }, []);

    useEffect(() => {
        if (userRef && auth) {
            userRef.once('value', (snapshot) => {
                if (snapshot.val()) {
                    return;
                }
                const { displayName, photoURL, uid, email } = auth;
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
                                <Link className="nav-link" to="/chat">
                                    Chat
                                </Link>
                            </li>
                            <li className="nav-item">
                                {auth ? (
                                    <SignOut signOutHandler={signOut} />
                                ) : (
                                    <SignIn signInHandler={signIn} />
                                )}
                            </li>
                        </ul>
                    </div>
                </nav>
                <Switch>
                    <PrivateRoute path="/restaurants" currentUser={auth}>
                        <Restaurant restaurants={restaurants} user={auth} />
                    </PrivateRoute>
                    <PrivateRoute path="/chat" currentUser={auth}>
                        <Chat user={auth} />
                    </PrivateRoute>
                    <Route path="/">
                        <Home user={auth} users={users} />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
};
