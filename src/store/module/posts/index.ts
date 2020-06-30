
import { Reducer } from 'redux';
import * as types from './types';
import { ModulosState } from './types';


const INITIAL_STATE: ModulosState = {
    data: [],
    error: false,
    loading: false
};


const reducer: Reducer<ModulosState> = (state= INITIAL_STATE, action) => {
    switch (action.type){
        case types.ModulosTypes.LOAD_REQUEST:
            return { ...state, loading: true };
        case types.ModulosTypes.LOAD_SUCCESS:
            return { ...state, loading: false, error: false, data: action.payload.data }
        case types.ModulosTypes.LOAD_FAILURE:
            return { ...state, loading: false, error: true, data: []
            };
            default:
                return state;
    }

};