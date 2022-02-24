import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './src/App';
import { actions } from '@nteract/core';
import store from './src/modules/store';
import { contentRef, hostRef, initialRefs, kernelRef, kernelspecsRef } from './src/modules/state';

// styles
import "@blueprintjs/core/lib/css/blueprint.css";
// import "@blueprintjs/select/lib/css/blueprint-select.css";

import "codemirror/addon/hint/show-hint.css";
import "codemirror/lib/codemirror.css";

import "@nteract/styles/app.css";
import "@nteract/styles/editor-overrides.css";
import "@nteract/styles/monaco/overrides.css";
import "@nteract/styles/global-variables.css";
import "@nteract/styles/themes/base.css";
import "@nteract/styles/themes/default.css";
import "@nteract/styles/toolbar.css";
import "@nteract/styles/toggle-switch.css";
import "styles/cell-menu.css";
import "styles/sidebar.css";
import "@nteract/styles/command-palette.css";
import { toJS } from '@nteract/commutable';



// store.dispatch(
//     actions.fetchContentFulfilled({
//         filepath: "/",
//         model: {},
//         kernelRef,
//         contentRef
//     })
// );





// store.dispatch(
//     actions.fetchContent({
//         filepath: "/",
//         params: {},
//         contentRef,
//         kernelRef
//     })
// );



(async () => {
    
    await Promise.all([
        store.dispatch(actions.fetchKernelspecs({ hostRef, kernelspecsRef })),
        store.dispatch(
            actions.launchKernelByName({
                contentRef,
                kernelRef,
                kernelSpecName: "python",
                cwd: "/",
                selectNextKernel: true
            }))
    ]);
})()


console.log(contentRef);

ReactDOM.render(
    <Provider store={store}>
        <App contentRef={contentRef}/>
    </Provider>
    , document.getElementById('root')
)