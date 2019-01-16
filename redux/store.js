import { createStore } from "redux";
import rootReducer from "./reducers";

const DEFAULT_STATE = {
  user: {},
  contacts: [],
};

const store = createStore(rootReducer, DEFAULT_STATE);
export default store;
