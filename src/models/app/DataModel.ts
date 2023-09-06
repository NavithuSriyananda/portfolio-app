export interface DataModel {
  SocialMediaList: Array<SocialMedia>;
  SkillSet: Array<Skill>;
  Tools: Array<Tool>;
  JobExperience: Array<Experience>;
}

interface Experience {
  name: string;
  description: string;
  website: string;
  from: Date;
  to: Date;
  projectExperiences: Array<ProjectExperience>;
}

interface ProjectExperience {
  name: string;
  description: string;
}

export interface Skill {
  name: string;
  icon: string;
}

export interface Tool {
  name: string;
  icon: string;
}

export interface SocialMedia {
  name: string;
  icon: string;
  url: string;
}
