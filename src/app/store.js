import { combineReducers, configureStore } from '@reduxjs/toolkit'
import rootSaga from './root-saga'
import createSagaMiddleware from 'redux-saga'
import jobDetailsReducer from '../containers/JobDisplay/store/jobDisplaySlice';
import jobCreationReducer from '../containers/JobCreation/store/jobCreationSlice';
const sagaMiddleware = createSagaMiddleware();

const combinedReducer = combineReducers({
  jobDetails: jobDetailsReducer,
  jobCreation: jobCreationReducer,
});

const rootReducer = (state, action) => {
  return combinedReducer(state, action);
};

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
})

sagaMiddleware.run(rootSaga)
