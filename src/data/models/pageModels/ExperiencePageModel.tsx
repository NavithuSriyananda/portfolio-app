export type ExperiencePageModel = {
  SkillSet: Array<Skill>;
  Tools: Array<Tool>;
  JobExperience: Array<Experience>;
  Projects: Array<Project>;
};

export type Experience = {
  name: string;
  description: string;
  website: string;
  from: Date;
  to: Date;
  projectExperiences: Array<ProjectExperience>;
};

export type ProjectExperience = {
  name: string;
  description: string;
};

export type Skill = {
  name: string;
  icon: string;
};

export type Tool = {
  name: string;
  icon: string;
};

export type Project = {
  name: string;
  description: string;
  links: Array<string>;
};
