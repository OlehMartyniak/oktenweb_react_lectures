import {createStore} from "redux";
import {reducers} from "../reducers/combiner";

let store = createStore(reducers);

export {store};