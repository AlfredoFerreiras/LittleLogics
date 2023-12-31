import { createStore, combineReducers, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import thunkMiddleware from "redux-thunk";
import auth from "./auth";
import mathReducer from "./math";
import scienceReducer from "./science";

const reducer = combineReducers({
  auth,
  math: mathReducer,
  science: scienceReducer,
});
const middleware = applyMiddleware(
  thunkMiddleware,
  createLogger({ collapsed: true })
);
const store = createStore(reducer, middleware);

export default store;
export * from "./auth";
export * from "./math";
export * from "./science";
