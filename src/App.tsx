import React, { Fragment } from "react";

import NotebookApp from "@nteract/notebook-app-component";
// import MonacoEditor from "@nteract/monaco-editor";
import { createContentRef } from "@nteract/core";

const contentRef = createContentRef()



const App = () => (
    <Fragment>
        <NotebookApp contentRef={contentRef}/>
    </Fragment>
);

export default App;
