import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';


import { Provider } from 'react-redux';
import store from './redux/store'

import './index.css';

const rootElem = document.querySelector('#root')

ReactDOM.render(
        <Provider store={store}>
            <App />
        </Provider>,
        rootElem
);
