
import { Reducer } from 'redux';
import * as types from './types';
import { RepositorioState } from './types';


const INITIAL_STATE: RepositorioState = {
    data: [],
    error: false,
    loading: false
};


const reducer: Reducer<RepositorioState> = (state= INITIAL_STATE, action) => {
    switch (action.type){
        case types.RepositorioTypes.LOAD_REQUEST:
            return { ...state, loading: true };
        case types.RepositorioTypes.LOAD_SUCCESS:
            return { ...state, loading: false, error: false, data: action.payload.data }
        case types.RepositorioTypes.LOAD_FAILURE:
            return { ...state, loading: false, error: true, data: []
            };
            default:
                return state;
    }

};