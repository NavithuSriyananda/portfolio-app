'use client'

import { AppContextActionModel, AppContextModel } from "@/data/models/contextModels/AppContextModel";
import * as ActionTypes from "../../data/actionTypes/AppActionTypes";

const AppReducer = (state: AppContextModel, action: AppContextActionModel): AppContextModel => {
    switch (action.type) {
        case ActionTypes.APP_LOADING_REQUESTED:
            return {
                ...state,
                IsLoading: true
            };

        case ActionTypes.APP_LOADING_SUCCESS:
            return {
                ...state,
                IsLoading: false
            };

        case ActionTypes.PARTICLE_BACKGROUND_LOADING_SUCCESS:
            return {
                ...state,
                IsLoading: false
            };

        default:
            return state;
    }
}

export default AppReducer;