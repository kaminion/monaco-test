import NotebookApp from '@nteract/notebook-app-component';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import { combineEpics, createEpicMiddleware } from 'redux-observable';
import { contents } from 'rx-jupyter';
import App from './src/App';
import { createHostRef, createKernelspecsRef, epics as coreEpics } from "@nteract/core";
import { initialState, reducer } from './src/modules/vanila';


import "@nteract/styles/app.css";

import "@nteract/styles/global-variables.css";

import "@nteract/styles/themes/base.css";
import "@nteract/styles/themes/default.css";
import "@nteract/styles/toggle-switch.css";

import "@nteract/styles/toolbar.css";

import "@nteract/styles/command-palette.css";

// Needs to be last
import "@nteract/styles/editor-overrides.css";
import { actions } from '@nteract/core';

// const epics = combineEpics([...coreEpics.allEpics, coreEpics.launchKernelWhenNotebookSetEpic])

// const epicMiddleware = createEpicMiddleware({ dependencies: contents.JupyterContentProvider });
// epicMiddleware.run(epics)
const stores = createStore(reducer, initialState);

const hostRef = createHostRef();
const kernelspecsRef = createKernelspecsRef();

stores.dispatch(actions.fetchKernelspecs({ hostRef, kernelspecsRef}))

ReactDOM.render(
    <Provider store={stores}>
        <App/>
    </Provider>
    , document.getElementById('root')
)