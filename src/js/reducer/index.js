import {combineReducers} from 'redux'
import theme from './theme'
import popular from './popular'
import trending from './trending'
import favorite from './favorite'
import language from './language'
import search from './search'
import {rootCom, RootNavigator} from '../navigator/AppNavigators';

//1.    state
const navState = RootNavigator.router.getStateForAction(RootNavigator.router.getActionForPathAndParams(rootCom));

/**
 * 2.      navigation reducer，
 */
const navReducer = (state = navState, action) => {
    const nextState = RootNavigator.router.getStateForAction(action, state);
    //   `nextState` null    ，      `state`
    return nextState || state;
};

/**
 * 3.  reducer
 * @type {Reducer<any> | Reducer<any, AnyAction>}
 */
const index = combineReducers({
    nav: navReducer,
    theme: theme,
    popular: popular,
    trending: trending,
    favorite: favorite,
    language: language,
    search: search,
});

export default index;