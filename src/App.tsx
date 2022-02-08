import React, { Fragment, Suspense } from "react";

import NotebookApp from "@nteract/notebook-app-component";
// import MonacoEditor from "@nteract/monaco-editor";
import { createContentRef } from "@nteract/core";
import CodeMirrorEditor from "@nteract/editor";

const contentRef = createContentRef()

const App = () => (
    <Fragment>
        {/* <CodeMirrorEditor
            onFocusChange={() => {}}
            focusAbove={() => {}}
            focusBelow={() => {}}
            kernelStatus={"not connected"}
            defaultOptions={{
                lineNumbers: true,
                extraKeys: {
                "Ctrl-Space": "autocomplete",
                "Ctrl-Enter": () => {},
                "Cmd-Enter": () => {}
                },
                cursorBlinkRate: 0,
                mode: "python"
            }}
            value={"import pandas as pd"}
            onChange={() => {}}
        /> */}
        <NotebookApp contentRef={contentRef}/>
    </Fragment>
);

export default App;
