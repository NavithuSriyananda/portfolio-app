'use client'

import { Context, createContext, useReducer, useContext, Dispatch } from "react";
import { HomePageReducer } from "./reducers/index";
import { HomePageContextActionModel, HomePageContextModel } from "@/data/models/contextModels/HomePageContextModel";

const HomePageContext: Context<HomePageContextModel> = createContext({} as HomePageContextModel);
const HomePageContextDispatch: Context<Dispatch<HomePageContextActionModel>> = createContext({} as Dispatch<HomePageContextActionModel>);

const initialState: HomePageContextModel = {
    IsLoading: true,
    TypeWriterData: new Array<string>()
};

export function HomePageContextProvider({ children }: any) {
    const [homePageState, homePageStateDispatch] = useReducer(HomePageReducer, initialState);

    return (
        <HomePageContext.Provider value={homePageState}>
            <HomePageContextDispatch.Provider value={homePageStateDispatch}>
                {children}
            </HomePageContextDispatch.Provider>
        </HomePageContext.Provider>
    )
}

export function UseHomePageContext() {
    return useContext(HomePageContext);
}
export function UseHomePageContextDispatch() {
    return useContext(HomePageContextDispatch);
}