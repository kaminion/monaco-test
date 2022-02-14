import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { contents } from 'rx-jupyter';
import App from './src/App';
import { initialState, reducer } from './src/modules/vanila';

const store = createStore(reducer, initialState, applyMiddleware(createEpicMiddleware({dependencies: contents.JupyterContentProvider})));


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root')
)