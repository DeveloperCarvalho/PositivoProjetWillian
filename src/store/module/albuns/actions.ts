import { action } from 'typesafe-actions';
import { RepositorioTypes, Repositorio } from './types';


export const loadRequest = () => action(RepositorioTypes.LOAD_REQUEST);
export const loadSuccess = (data: Repositorio[]) => action(RepositorioTypes.LOAD_SUCCESS, { data });
export const loadFailure = () => action(RepositorioTypes.LOAD_FAILURE);