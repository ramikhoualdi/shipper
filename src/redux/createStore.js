// import { createStore, applyMiddleware } from "redux";
// import logger from "redux-logger";
// import rootReducer from "./rootReducer";
// import thunk from "redux-thunk";
// import { composeWithDevTools } from "@redux-devtools/extension";

// const middlewares = [logger, thunk];
// const composedEnhancer = composeWithDevTools(applyMiddleware(...middlewares));
// const store = createStore(rootReducer, composedEnhancer);
// export default store;

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from "./rootReducer";

const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
);

export default store;