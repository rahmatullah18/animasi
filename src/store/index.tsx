import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import kuisSlice from "./kuisSlice";

const persistConfig = {
  key: "root",
  storage,
  whitelist: [],
};

const rootReducer = combineReducers({
  kuis: kuisSlice,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default persistedReducer;
