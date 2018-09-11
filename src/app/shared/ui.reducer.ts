import { acciones, ACTIVAR_LOADING, DESACTICAR_LOADING } from './ui.acciones';

export interface State {
    isLoading: boolean;
}

const initState: State = {
    isLoading: false
};

export function uiReducer(state = initState, action: acciones): State {
    switch (action.type) {

        case ACTIVAR_LOADING:
            return {
                isLoading: true
            };

        case DESACTICAR_LOADING:
            return {
                isLoading: false
            };

        default:
            return state;
    }
}
