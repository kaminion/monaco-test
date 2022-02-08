import { AppState, reducers, epics as coreEpics } from "@nteract/core";
import { notifications } from "@nteract/mythic-notifications";
import { makeConfigureStore } from "@nteract/myths";
import { compose } from "redux";
import { contents } from "rx-jupyter";
import initialState from "./state";

const composeEnhancers = 
    typeof window !== "undefined"
        ? (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        : compose

export const configureStore = makeConfigureStore<AppState>()({
    packages: [notifications],
    reducers: {
        app: reducers.app,
        core: reducers.core as any
    },
    epics: [...coreEpics.allEpics, coreEpics.launchKernelWhenNotebookSetEpic] as any,
    epicDependencies: { contentProvider: contents.JupyterContentProvider },
    enhancer: composeEnhancers
});

export default ()=>configureStore(initialState);