import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter } from 'react-router-dom';
import reducers from './reducers';
import thunk from 'redux-thunk';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Provider store={ createStore(reducers, applyMiddleware(thunk)) }><BrowserRouter><App /></BrowserRouter></Provider>, document.getElementById('root'));
//<Provider store={ createStore(reducers) 
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
