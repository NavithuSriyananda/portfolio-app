export type FooterModel = {
    SocialMediaList: Array<SocialMedia>;
    Address: string;
    Email: string;
    Phone: string;
}

export type SocialMedia = {
    name: string;
    url: string;
};