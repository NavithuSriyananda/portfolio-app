export interface ExperiencePageModel {
  skillSet: Array<Skill>;
  tools: Array<Tool>;
  jobExperience: Array<Experience>;
};

export type Experience = {
  designation: string;
  company: Company;
  address: string;
  description: string;
  website: string;
  from: Date;
  to: Date;
  projectExperiences: Array<ProjectExperience>;
};

export type ProjectExperience = {
  name: string;
  description: string;
  website: string;
  responsibilities: Array<string>;
  techstack: Array<string>;
  tools: Array<string>;
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

export type Company = {
  name: string;
  website: string;
}