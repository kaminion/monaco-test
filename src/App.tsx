import React, { FC } from "react";

import { actions, AppState, ContentRef, selectors } from "@nteract/core";

import Notebook from "./components/notebook";
import {default as JupyterNotebook} from "./notebook/jupyter-notebook";
import NotebookApp from "@nteract/notebook-app-component";
import { NotebookMenu } from "@nteract/connected-components";
import { connect } from "react-redux";
import { notebook } from "@nteract/reducers/lib/core/entities/contents/notebook";

interface Props {
    contentRef: ContentRef;
}

export const App: FC<Props> = ({ contentRef }: Props) => {
    console.log(contentRef);
    return (
        <>
            {/* <JupyterNotebook loading={true} showHeaderEditor={true}
                saving={true}
                handlers={{}}
                onHeaderEditorChange={()=>{}}
                lastSavedStatement="none"
                appBase="/" baseDir="/" filepath="/" displayName="python" contentType="dummy"
                contentRef={contentRef} /> */}
            {/* <NotebookMenu contentRef={contentRef}/> */}
            <Notebook contentRef={contentRef} />
        </>);
}

export default connect((state:AppState, props:Props) => {
    const { contentRef } = props;
    const model = selectors.notebookModel(state, {contentRef});

    notebook(model, actions.createCellAbove({ contentRef, cellType: "code" }));
    
    return {model}
}, null)(App);