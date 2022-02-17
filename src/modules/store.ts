import { AppState, reducers, epics as coreEpics } from "@nteract/core";
import { configuration } from "@nteract/mythic-configuration";
import { notifications } from "@nteract/mythic-notifications";
import { makeConfigureStore } from "@nteract/myths";
import { compose } from "redux";
import { contents } from "rx-jupyter";
import initialState from "./state";

const composeEnhancers = 
    typeof window !== "undefined"   
        ? (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        : compose

const configureStore = makeConfigureStore<AppState>()({
    packages: [notifications],
    reducers: {
        app: reducers.app,
        core: reducers.core as any,
    },
    epics: coreEpics.allEpics as any,
    epicDependencies: { contentProvider: contents.JupyterContentProvider },
    enhancer: composeEnhancers,
});

const store = configureStore(initialState);

export default store;