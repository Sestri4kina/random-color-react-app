import { createStore, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import changeColor from "./reducers/index";

export default createStore(changeColor, {color: [135, 19, 119]}, applyMiddleware(createLogger()));
