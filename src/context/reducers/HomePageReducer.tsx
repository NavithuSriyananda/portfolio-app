'use client'

import * as ActionTypes from "../../data/actionTypes/HomePageActionTypes";
import { HomePageContextActionModel, HomePageContextModel } from "@/data/models/contextModels/HomePageContextModel";

const HomePageReducer = (state: HomePageContextModel, action: HomePageContextActionModel): HomePageContextModel => {
    switch (action.actiontype) {
        case ActionTypes.FETCH_DATA_REQUESTED:
            return {
                ...state,
                IsLoading: true
            }

        case ActionTypes.FETCH_DATA_SUCCESS:
            debugger;
            return {
                ...state,
                IsLoading: false,
                TypeWriterData: action.data
            };

        default:
            return state;
    }
}

export default HomePageReducer;