import { createStore, combineReducers, compose } from 'redux';
import heroes from '../reducers/heroes';
import filters from '../reducers/filters';


// const enhancer = (createStore) => (...args) => {
//     const store = createStore(...args);

//     const oldDispatch = store.dispatch
// }
const store = createStore( combineReducers({heroes, filters}),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;