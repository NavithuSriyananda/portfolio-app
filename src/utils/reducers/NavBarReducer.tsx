import { ActionModel, AppContextModel } from "@/models/ContextModels"
import * as ActionTypes from "../actionTypes/NavbarActionTypes";

const NavBarReducer = (state: AppContextModel, action: ActionModel): AppContextModel => {
    switch (action.type) {
        case ActionTypes.DOWNLOAD_CV_REQUESTED:
            return {
                ...state,
                IsParticleBackgroundLoaded: true
            };
        default:
            return state;
    }
}

export default NavBarReducer;