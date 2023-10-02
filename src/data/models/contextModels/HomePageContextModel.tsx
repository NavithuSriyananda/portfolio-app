export type HomePageContextModel = {
    IsLoading: boolean;
    TypeWriterData: Array<string>
}

export type HomePageContextActionModel = {
    actiontype: string,
    data: any
}