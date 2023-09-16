import { ActionModel, AppContextModel } from "@/models/ContextModels"
import * as ActionTypes from "../actionTypes/AppActionTypes";

const AppReducer = (state: AppContextModel, action: ActionModel): AppContextModel => {
    switch (action.type) {
        case ActionTypes.PARTICLE_BACKGROUND_LOAD_SUCCESS:
            return {
                ...state,
                IsParticleBackgroundLoaded: true
            };
        default:
            return state;
    }
}

export default AppReducer;