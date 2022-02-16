import * as Immutable from "immutable";
import { makeEntitiesRecord, makeContentsRecord, makeStateRecord, ContentRecord, actions } from "@nteract/core";
import { createContentRef, createKernelspecsRef, makeNotebookContentRecord } from "@nteract/core";
import { AnyAction } from "redux";

export const contentRef = createContentRef();
const kernelspecsRef = createKernelspecsRef();

const initialRefs = Immutable.Map<string, ContentRecord>().set(
    contentRef,
    makeNotebookContentRecord()
);

export const initialState = {
  core: makeStateRecord({
    currentKernelspecsRef: kernelspecsRef,
    entities: makeEntitiesRecord({
      contents: makeContentsRecord({
        byRef: initialRefs
      })
    })
  }),
  config: Immutable.Map({
    theme: "light"
  })
};

export const reducer = (state: any, action: AnyAction) => {
  const newState = { ...state };
  switch (action.type) {
    case actions.FETCH_KERNELSPECS: {
      console.log(action.payload, "A")
      return newState;
    }
    case "CREATE": {
      // we create a new object
      newState[action.payload.id] = action.payload;
      return newState;
    }
    // case "RETRIEVE": let selection = state[id];
    case "UPDATE": {
      // we do nothing if the object does not exist
      if (!Object.keys(state).includes(action.payload.id)) {
        return state;
      }
      let newObject = Object.assign(action.payload.id);
      if (action.payload.event) {
        // we update a property
        let { name, value } = action.payload.event.target;
        newObject[name] = value;
      } else {
        // we replace the object
        newObject = action.payload;
      }
      newState[action.payload.id] = newObject;
      return newState;
    }
    case "DELETE": {
      // we delete the objext
      if (!action.payload.id) {
        delete newState[action.payload];
      } else delete newState[action.payload.id];
      return newState;
    }
    default: {
      console.warn("Unhandled Action of type ", action.type);
      console.log(action.payload);
      return newState;
    }
  }
};