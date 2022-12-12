import {combineReducers, createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
// import counterReducer from "./ducks/counter";
import dataReducer from './ducks/data';
import {watcherSaga} from './sagas/mainSaga';

const reducer = combineReducers({
  data: dataReducer,
  //   user: userReducer
});

const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware];

const store = createStore(reducer, {}, applyMiddleware(...middleware));

sagaMiddleware.run(watcherSaga);

export default store;
