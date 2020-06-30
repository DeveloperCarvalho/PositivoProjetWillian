import { createStore, Store, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { ModulosState, ModulosTypes } from './module/posts/types';

import rootReducer from './module/rootReducer';
import rootSaga from './module/rootSaga';


export interface ApplicationState {
    modulos: ModulosTypes
}

const sagaMiddleware = createSagaMiddleware();

const store: Store<ApplicationState> = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export default store;