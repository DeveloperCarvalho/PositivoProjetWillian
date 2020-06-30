import { all, takeLatest } from 'redux-saga/effects';

import { ModulosTypes } from './posts/types';
import { load } from './posts/sagas';

export default function* rootSaga() {
    return yield all([
        takeLatest(ModulosTypes.LOAD_REQUEST, load),
    ]);
}