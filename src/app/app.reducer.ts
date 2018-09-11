import { State, uiReducer } from './shared/ui.reducer';
import { ActionReducerMap } from '@ngrx/store';
import { AuthState, authReducer } from './auth/auth.reducer';
// import { IngresoEgresoState, ingresoEgresoReducer } from './ingreso-egreso/ingreso-egreso.reducer';


export interface AppState {
    ui: State;
    auth: AuthState;
    // ingresoEgreso: IngresoEgresoState;
}

export const appReducers: ActionReducerMap<AppState> = {
    ui: uiReducer,
    auth: authReducer,
    // ingresoEgreso: ingresoEgresoReducer
};
