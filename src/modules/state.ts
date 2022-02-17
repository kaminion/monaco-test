import { AppState, ContentRecord, createKernelspecsRef, HostRecord, makeAppRecord, makeContentsRecord, makeEntitiesRecord, makeHostsRecord, makeJupyterHostRecord, makeStateRecord, makeTransformsRecord } from "@nteract/core";
import { Media } from "@nteract/outputs";
import Immutable, { Record } from "immutable";


const kernelspecsRef = createKernelspecsRef();


export const initialState = Record<AppState>({
    app: makeAppRecord({
        version: "@nteract/web",
        host: makeJupyterHostRecord({
            type: "jupyter",
            origin: 'localhost',
            basePath: 'http://localhost:8888',
            bookstoreEnabled: true,
            showHeaderEditor: true,
            crossDomain: true,
        })
    }),
    core: makeStateRecord({
        currentKernelspecsRef: kernelspecsRef,
        entities: makeEntitiesRecord({
            hosts: makeHostsRecord({
                byRef: Immutable.Map<string, HostRecord>(),
            }),
            contents: makeContentsRecord({
                byRef: Immutable.Map<string, ContentRecord>()
            }),
            transforms: makeTransformsRecord({
                displayOrder: Immutable.List([
                    "application/json",
                    "application/javascript",
                    "text/html",
                    "text/markdown",
                    "text/latex",
                    "image/svg+xml",
                    "image/gif",
                    "image/png",
                    "image/jpeg",
                    "text/plain",
                ]),
                byId: Immutable.Map({
                    "application/json": Media.Json,
                    "application/javascript": Media.JavaScript,
                    "text/html": Media.HTML,
                    "text/markdown": Media.Markdown,
                    "text/latex": Media.LaTeX,
                    "image/svg+xml": Media.SVG,
                    "image/gif": Media.Image,
                    "image/png": Media.Image,
                    "image/jpeg": Media.Image,
                    "text/plain": Media.Plain,
                }),
            })
        }),
    })
})();


export default initialState;