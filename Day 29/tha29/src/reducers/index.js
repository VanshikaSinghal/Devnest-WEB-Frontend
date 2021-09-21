import locationReducer from "./locationReducer";
import locationDataReducer from "./locationDataReducer";
import ToggleThemeReducer from "./toggleThemeReducer";

import { combineReducers } from "redux";

const rootReducer = combineReducers({
  location: locationReducer,
  locationData: locationDataReducer,
  theme: ToggleThemeReducer,
});

export default rootReducer;
