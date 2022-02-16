import React, { Fragment } from "react";

import NotebookApp from "@nteract/notebook-app-component";
import { createContentRef } from "@nteract/core";
import { connect } from "react-redux";
import { contentRef } from "./modules/vanila";


export const App = () => (
    <>
        <NotebookApp contentRef={contentRef}/>
    </>
);

export default connect()(App);