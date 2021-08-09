import { combineReducers } from "redux";
import carsReducer from "./components/reducers";

export default combineReducers({ cars: carsReducer });
