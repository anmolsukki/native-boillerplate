import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import UserReducer from "../Reducers/UserReducer";

const reducer = combineReducers({
  CtrUser: UserReducer
});

const logger = store => {
  return next => {
    return action => {
      // console.log("[Middleware] dispatching", action);
      const result = next(action);
      // console.log("[Middleware] next state", store.getState());
      return result;
    };
  };
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers(applyMiddleware(logger, thunk)));

export default store;
