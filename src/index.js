import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import thunk from 'redux-thunk';
import { rootReducer } from './store';

import App from './containers/app-container';
import { startListeningToAuthChanges } from './store/auth/thunks';
import { startListeningForUsers } from './store/users/thunks';

const middlewares = [thunk];

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middlewares)));

store.dispatch(startListeningToAuthChanges());
store.dispatch(startListeningForUsers());

render(
    <Provider store={store}>
        <App />
    </Provider>,

    document.getElementById('root')
);
