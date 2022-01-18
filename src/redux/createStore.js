import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import rootReducer from "./rootReducer";
import thunk from "redux-thunk";
import { composeWithDevTools } from "@redux-devtools/extension";

const middlewares = [logger, thunk];
const composedEnhancer = composeWithDevTools(applyMiddleware(...middlewares));
const store = createStore(rootReducer, composedEnhancer);
export default store;
// const loggerMiddleware = (store) => (next) => (action) => {
//   console.group(action.type);
//   console.info("dispatching", action);
//   let result = next(action);
//   console.log("next state", store.getState());
//   console.groupEnd();
//   return result;
// };

// const round = (number) => Math.round(number * 100) / 100;

// const monitorReducerEnhancer =
//   (createStore) => (reducer, initialState, enhancer) => {
//     const monitoredReducer = (state, action) => {
//       const start = performance.now();
//       const newState = reducer(state, action);
//       const end = performance.now();
//       const diff = round(end - start);

//       console.log("reducer process time:", diff);

//       return newState;
//     };

//     return createStore(monitoredReducer, initialState, enhancer);
//   };

// const middlewareEnhancer = applyMiddleware(loggerMiddleware, thunk);
// const composedEnhancers = compose(middlewareEnhancer, monitorReducerEnhancer);
// const store = createStore(rootReducer, applyMiddleware(thunk))
// const store = createStore(rootReducer, undefined, composedEnhancers);

// import { configureStore } from '@reduxjs/toolkit'
// import rootReducer from "./rootReducer";
// const store =  configureStore({
//   reducer: {
//     main: rootReducer,
//   },
// })
// export default store;
