import React, { Fragment, Suspense } from "react";

const NotebookApp = React.lazy(() => import("@nteract/notebook-app-component"));

const App = () => (
    <Fragment>
        <Suspense fallback={<div>Loading ...</div>}>
            <NotebookApp contentRef="12" />
        </Suspense>
    </Fragment>
);

export default App;
