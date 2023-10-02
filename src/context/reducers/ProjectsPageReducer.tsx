'use client'

import { ProjectsPageActionModel, ProjectsPageContextModel } from "@/data/models/contextModels/ProjectsPageContextModel";
import * as ActionTypes from "../../data/actionTypes/ProjectsPageActionsTypes";

const ProjectsReducer = (state: ProjectsPageContextModel, action: ProjectsPageActionModel): ProjectsPageContextModel => {
    switch (action.actiontype) {
        case ActionTypes.FETCH_PROJECTS_DATA_REQUESTED:
            return {
                ...state,
                isLoading: true
            }

        case ActionTypes.FETCH_PROJECTS_DATA_SUCCESS:
            return {
                ...state,
                isLoading: false
            };

        default:
            return state;
    }
}

export default ProjectsReducer;