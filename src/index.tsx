import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import Route from './route'
import store from './redux/store'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <Provider store={store}>
        <Route />
    </Provider>, 
    document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
