export type SiteRoadmapPageModel = Array<SiteRoadmapItemModel>;

export type SiteRoadmapItemModel = {
    version: number;
    description: string;
    isLatest: boolean;
}