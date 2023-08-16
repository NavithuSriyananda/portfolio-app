export interface DataModel {
    SocialMedia: Array<string>,
    SkillSet: Array<Skill>,
    Tools: Array<Tool>,
    Experience: Array<Company>
}

interface Company {
    name: string,
    description: string
}

export interface Skill {
    name: string,
    icon: string
}

export interface Tool {
    name: string,
    icon: string
}