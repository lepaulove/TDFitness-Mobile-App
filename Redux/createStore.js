import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import reduxSaga from 'redux-saga'
// import createSagaMiddle from 'redux-saga'
// import rootSaga from './rootSaga'

import rootReducer from './rootReducer'
import rootSaga from './rootSaga'
// const sagaMiddleware = createSagaMiddleware()
// const sagaMiddleware = createSagaMiddle()
export const middlewares = [thunk, logger]

export const store = createStore(rootReducer, applyMiddleware(...middlewares))

export default store