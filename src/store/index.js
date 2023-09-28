import { createStore, applyMiddleware, combineReducers } from "redux";
import thunkMiddleWare from "redux-thunk";


import {FetchData} from "./reducers/UserReducer"

const rootReducers = combineReducers({
    FetchData
});

const middlewares = [thunkMiddleWare];
const Store = createStore(
  rootReducers,
applyMiddleware(...middlewares)
);
export default Store;
