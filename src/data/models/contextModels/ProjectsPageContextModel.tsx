import { Project } from "../pageModels/ExperiencePageModel";

export type ProjectsPageContextModel = {
    isLoading: boolean;
    Projects: Array<Project>
}

export type ProjectsPageActionModel = {
    actiontype: string,
    data: any
}