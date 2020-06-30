/**
 * Action Types
 */

export enum RepositorioTypes {
    LOAD_REQUEST = '@modulos/LOAD_REQUEST',
    LOAD_SUCCESS = '@modulos/LOAD_SUCCESS',
    LOAD_FAILURE = '@modulos/LOAD_FAILURE',

}


/**
 * Data Types
 */

export interface Repositorio {
   id: number
}


/**
* State Types 
*/

export interface RepositorioState {
    readonly data: Repositorio[]
    readonly loading: boolean
    readonly error: boolean
}