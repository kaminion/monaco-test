import { AppState, ContentRecord, ContentRef, createContentRef, createHostRef, createKernelRef, createKernelspecsRef, EditorsRecord, HostRecord, makeAppRecord, makeCommsRecord, makeContentsRecord, makeDummyContentRecord, makeEditorsRecord, makeEntitiesRecord, makeHostsRecord, makeJupyterHostRecord, makeLocalHostRecord, makeNotebookContentRecord, makeStateRecord, makeTransformsRecord } from "@nteract/core";
import { Media } from "@nteract/outputs";
import Immutable, { Record } from "immutable";

export const hostRef = createHostRef();
export const contentRef = createContentRef();
export const kernelspecsRef = createKernelspecsRef();
export const kernelRef = createKernelRef();

const NullTransform = () => null;

// id를 제외한 null 값들은 채워줄 것 (makeJupyterHostRecord)
const JupyterHostRecord = makeJupyterHostRecord({
    id: null,
    type: "jupyter",
    defaultKernelName: "python",
    origin: 'http://127.0.0.1:8888',
    basePath: '/',
    crossDomain: true,
    bookstoreEnabled: true,
    showHeaderEditor: true,
    ajaxOptions: {
        withCredentials: true,
        password: "robot1765"
    }
});


export const initialRefs = Immutable.Map<ContentRef, ContentRecord>().set(
    contentRef,
    makeNotebookContentRecord({
        filepath:"/"
    })
)

export const initialState: AppState = {
    app: makeAppRecord({
        version: "@nteract/web",    
        host: JupyterHostRecord
    }),
    core: makeStateRecord({
        kernelRef: kernelRef,
        currentKernelspecsRef: kernelspecsRef,
        entities: makeEntitiesRecord({
            comms: makeCommsRecord(),
            hosts: makeHostsRecord({
                byRef: Immutable.Map<string, HostRecord>().set(
                    hostRef,
                    JupyterHostRecord
                ),
            }),
            contents: makeContentsRecord({
                byRef: initialRefs
            }),
            transforms: makeTransformsRecord({
                displayOrder: Immutable.List([
                    "application/vnd.jupyter.widget-view+json",
                    "application/vnd.vega.v5+json",
                    "application/vnd.vega.v4+json",
                    "application/vnd.vega.v3+json",
                    "application/vnd.vega.v2+json",
                    "application/vnd.vegalite.v3+json",
                    "application/vnd.vegalite.v2+json",
                    "application/vnd.vegalite.v1+json",
                    "application/geo+json",
                    "application/vnd.plotly.v1+json",
                    "text/vnd.plotly.v1+html",
                    "application/x-nteract-model-debug+json",
                    "application/vnd.dataresource+json",
                    "application/vdom.v1+json",
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
                    "text/vnd.plotly.v1+html": NullTransform,
                    "application/vnd.plotly.v1+json": NullTransform,
                    "application/geo+json": NullTransform,
                    "application/x-nteract-model-debug+json": NullTransform,
                    "application/vnd.dataresource+json": NullTransform,
                    "application/vnd.jupyter.widget-view+json": NullTransform,
                    "application/vnd.vegalite.v1+json": NullTransform,
                    "application/vnd.vegalite.v2+json": NullTransform,
                    "application/vnd.vegalite.v3+json": NullTransform,
                    "application/vnd.vega.v2+json": NullTransform,
                    "application/vnd.vega.v3+json": NullTransform,
                    "application/vnd.vega.v4+json": NullTransform,
                    "application/vnd.vega.v5+json": NullTransform,
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
};

console.log(initialState);

export default initialState;