import { AppState, reducers, epics as coreEpics } from "@nteract/core";
import { configuration } from "@nteract/mythic-configuration";
import { notifications } from "@nteract/mythic-notifications";
import { makeConfigureStore } from "@nteract/myths";
import { combineReducers, compose } from "redux";
import { contents } from "rx-jupyter";
import { LocalContentProvider } from "./local-content-provider";
import initialState from "./state";

import { notebook } from '@nteract/reducers/lib/core/entities/contents/notebook';

const { app, core } = reducers;


const composeEnhancers = 
    typeof window !== undefined   
        ? (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({trace: true, traceLimit: 10})
        : compose

const configureStore = makeConfigureStore<AppState>()({
    packages: [configuration, notifications],
    reducers: {
        app,
        core: core as any,
    },
    epics: [...coreEpics.allEpics, coreEpics.fetchContentEpic] as any,
    epicDependencies: { contentProvider: contents.JupyterContentProvider },
    enhancer: composeEnhancers
});

const store = configureStore(initialState);
(window as any).store = store;

export default store;