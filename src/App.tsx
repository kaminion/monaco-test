import React, { Fragment } from "react";

import NotebookApp from "@nteract/notebook-app-component";
import { createContentRef } from "@nteract/core";
import { connect } from "react-redux";

import "@nteract/styles/app.css";

import "@nteract/styles/global-variables.css";

import "@nteract/styles/themes/base.css";
import "@nteract/styles/themes/default.css";
import "@nteract/styles/toggle-switch.css";

import "@nteract/styles/toolbar.css";

import "@nteract/styles/command-palette.css";

// Needs to be last
import "@nteract/styles/editor-overrides.css";
import { contentRef } from "./modules/state";
import Notebook from "./component/notebook";

export const App = () => (
    <>
        <Notebook contentRef={contentRef}/>
    </>
);

export default App;