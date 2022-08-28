import { createStore } from 'redux';
import { userReducer } from './LoginReducer'
import { devToolsEnhancer } from 'redux-devtools-extension'

const rootReducer = userReducer;

export const appStore = createStore(rootReducer,devToolsEnhancer());