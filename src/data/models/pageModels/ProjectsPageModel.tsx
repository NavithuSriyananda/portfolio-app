export type ProjectsPageModel = {
    Projects: Array<Project>;
};

export type Project = {
    title: string;
    logo: string;
    description: string;
    links: Array<Link>;
};

export type Link = {
    name: string;
    url: string;
}