import { call, put } from 'redux-saga/effects';
import api from '../../../services/apiPost';

import { loadSuccess, loadFailure } from './actions';

export function* load(){
    try {
        const response = yield call(api.get, 'posts');

        yield put(loadSuccess(response.data));
    }catch (err){
        yield put(loadFailure());
    }
}

