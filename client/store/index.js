// store.js
import { createStore, combineReducers, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import thunkMiddleware from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import ttsReducer from "./tts";
import auth from "./auth";
import mathReducer from "./math";
import scienceReducer from "./science";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["auth"], // Specify which reducers you want to persist. For example, 'auth'
};

const rootReducer = combineReducers({
  auth,
  math: mathReducer,
  science: scienceReducer,
  tts: ttsReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middleware = applyMiddleware(
  thunkMiddleware,
  createLogger({ collapsed: true })
);
const store = createStore(persistedReducer, middleware);
const persistor = persistStore(store);

export default store;
export { persistor };
