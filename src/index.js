import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

import App from './components/App';
import { HashRouter } from "react-router-dom";

import './Base.css';

ReactDOM.render(
    <HashRouter>
        <App />
    </HashRouter>,
    document.getElementById('root'));
registerServiceWorker();
