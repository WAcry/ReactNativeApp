import {applyMiddleware, createStore} from 'redux'
import thunk from 'redux-thunk'
import reducers from '../reducer'
import {middleware} from '../navigator/AppNavigators'

/**
 *    log   
 * https://cn.redux.js.org/docs/advanced/Middleware.html
 * @param store
 */
const logger = store => next => action => {
    if (typeof action === 'function') {
        console.log('dispatching a function');
    } else {
        console.log('dispatching ', action);
    }
    const result = next(action);
    console.log('nextState ', store.getState());
    return result;
};

const middlewares = [
    middleware,
    logger,
    thunk,
];

/**
 *   store
 */
export default createStore(reducers, applyMiddleware(...middlewares));