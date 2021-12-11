import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";

// import shipperReducer from "./Shipper/shipper.reducer";
// import carrierReducer from "./Carrier/carrier.reducer";
import mainReducer from "./Main/main.reducer";

// export default configureStore({
//   reducer: {
//     main: mainReducer,
//   },
// });

export default combineReducers({
  main: mainReducer,
});
