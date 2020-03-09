import { combineReducers } from "redux";

import { planetSlice } from "./ducks";

const rootReducer = combineReducers({
  planetSlice: planetSlice.reducer
});

export default rootReducer;
