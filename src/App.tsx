import React, { Fragment, Suspense } from "react";

import NotebookApp from "@nteract/notebook-app-component";
// import MonacoEditor from "@nteract/monaco-editor";
import { createContentRef } from "@nteract/core";
import CodeMirrorEditor from "@nteract/editor";
import { Provider } from "react-redux";
import store from "./modules/store";

const contentRef = createContentRef()

const App = () => (
    <Fragment>
        <Provider store={store}>
            <NotebookApp contentRef={contentRef}/>
        </Provider>
    </Fragment>
);

export default App;
