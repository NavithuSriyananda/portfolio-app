"use client"

import { ActionModel, AppContextModel } from "@/models/ContextModels";
import { Context, createContext, useReducer, useContext, Dispatch } from "react";
import AppReducer from "../reducers/AppReducer";

const AppContext: Context<AppContextModel> = createContext({} as AppContextModel);
const AppDispatchContext: Context<Dispatch<ActionModel>> = createContext({} as Dispatch<ActionModel>);

const initialState: AppContextModel = {
    IsParticleBackgroundLoaded: false
};

export function AppContextProvider({ children }: any) {
    const [appState, appStateDispatch] = useReducer(AppReducer, initialState);

    return (
        <AppContext.Provider value={appState}>
            <AppDispatchContext.Provider value={appStateDispatch}>
                {children}
            </AppDispatchContext.Provider>
        </AppContext.Provider>
    )
}

export function UseAppContext() {
    return useContext(AppContext);
}
export function UseAppContextDispatch() {
    return useContext(AppDispatchContext);
}