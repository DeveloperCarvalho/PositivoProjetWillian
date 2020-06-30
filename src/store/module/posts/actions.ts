import { action } from 'typesafe-actions';
import { ModulosTypes, Modulos } from './types';


export const loadRequest = () => action(ModulosTypes.LOAD_REQUEST);
export const loadSuccess = (data: Modulos[]) => action(ModulosTypes.LOAD_SUCCESS, { data });
export const loadFailure = () => action(ModulosTypes.LOAD_FAILURE);
