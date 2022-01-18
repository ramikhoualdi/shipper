// import { createStore, applyMiddleware } from "redux";
// import logger from "redux-logger";
// import rootReducer from "./rootReducer";
// import thunk from "redux-thunk";
// import { composeWithDevTools } from "@redux-devtools/extension";

// const middlewares = [logger, thunk];
// const composedEnhancer = composeWithDevTools(applyMiddleware(...middlewares));
// const store = createStore(rootReducer, composedEnhancer);
// export default store;

import { createStore, applyMiddleware,compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from "./rootReducer";



const middlewares = [thunk];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  composeEnhancers(
    applyMiddleware(...middlewares)
));

export default store;