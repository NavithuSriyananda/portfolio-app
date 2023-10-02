'use client'

import { Context, createContext, useReducer, useContext, Dispatch } from "react";
import AppReducer from "./reducers/AppReducer";
import { AppContextActionModel, AppContextModel } from "@/data/models/contextModels/AppContextModel";

const AppContext: Context<AppContextModel> = createContext({} as AppContextModel);
const AppDispatchContext: Context<Dispatch<AppContextActionModel>> = createContext({} as Dispatch<AppContextActionModel>);

const initialState: AppContextModel = {
    IsLoading: true
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