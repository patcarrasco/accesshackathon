import React, { Component } from 'react'
import ReactDOM from 'react-dom';


import {Provider} from 'react-redux'
import configureStore from './store/configureStore'

import App from './components/App.jsx';

const store = configureStore()

// Require Sass file so webpack can build it
import style from './styles/style.css';

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root'));
