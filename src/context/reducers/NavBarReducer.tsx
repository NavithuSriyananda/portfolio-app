'use client'

import * as AppActionTypes from "../../data/actionTypes/AppActionTypes";
import * as ActionTypes from "../../data/actionTypes/NavbarActionTypes";
import { UseAppContextDispatch } from "../AppContext";
import { AppContextActionModel, AppContextModel } from "@/data/models/contextModels/AppContextModel";

const NavBarReducer = (state: AppContextModel, action: AppContextActionModel): AppContextModel => {
    switch (action.type) {
        case ActionTypes.DOWNLOAD_CV_REQUESTED:
            const dispatch = UseAppContextDispatch();
            dispatch({
                type: AppActionTypes.APP_LOADING_REQUESTED,
                data: null
            });

        default:
            return state;
    }
}

export default NavBarReducer;