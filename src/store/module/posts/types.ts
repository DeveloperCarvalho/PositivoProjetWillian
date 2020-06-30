/**
 * Action Types
 */

 export enum ModulosTypes {
     LOAD_REQUEST = '@modulos/LOAD_REQUEST',
     LOAD_SUCCESS = '@modulos/LOAD_SUCCESS',
     LOAD_FAILURE = '@modulos/LOAD_FAILURE',

 }


 /**
  * Data Types
  */

export interface Modulos {
    id: number
    title: string
    body: string
}


/**
 * State Types 
 */

 export interface ModulosState {
     readonly data: Modulos[]
     readonly loading: boolean
     readonly error: boolean
 }