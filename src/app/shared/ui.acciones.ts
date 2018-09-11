import { Action } from '@ngrx/store';


export const ACTIVAR_LOADING = '[UI Loading] Cargando...';
export const DESACTICAR_LOADING = '[UI Loading] Fin de carga...';

export class ActivarLoadingAction implements Action {
    readonly type = ACTIVAR_LOADING;
}

export class DesactivarLoadingAction implements Action {
    readonly type = DESACTICAR_LOADING;
}

export type acciones = ActivarLoadingAction | DesactivarLoadingAction;
