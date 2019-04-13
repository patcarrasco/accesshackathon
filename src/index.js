import React, { Component } from 'react'
import ReactDOM from 'react-dom';

import './semantic/dist/semantic.min.css'


import App from './components/App.jsx';
import "./styles/style.css"

// // Require Sass file so webpack can build it
// import style from './styles/style.css';

ReactDOM.render(
        <App />
    , document.getElementById('root'));
