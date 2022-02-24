import React, { FC } from "react";

import { ContentRef } from "@nteract/core";

import Notebook from "./components/notebook";
import {default as JupyterNotebook} from "./notebook/jupyter-notebook";
import NotebookApp from "@nteract/notebook-app-component";

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
            <button></button>
            <Notebook contentRef={contentRef}/>
        </>);
}

export default App;