export interface PersonalInfo {
    name: string;
    profession: string;
    description: string;
    location: string;
    ggMap: string;
    email: string;
    phone: string;
    profileImage: string;

    linkedin: string;
    facebook: string;
    github: string;
    birthday: string;
}

export interface About {
    biography: string;
    experience: string;
    careerGoals: string;
    personalImage: string;

    education: string;
    values: string[];
    hobbies: string[];
    timeline: Array<{
        year: string;
        title: string;
        description: string;
    }>;
}

export interface TechnologyCategory {
    name: string;
    icon: string;
    technologies: Technology[];
}

export interface Technology {
    name: string;
    level: number;
    svg: string;
    description: string;
}

export interface SoftSkill {
    name: string;
    description: string;
}

export interface Skill {
    softSkills: SoftSkill[];
    technicalSkills: TechnologyCategory[];
}

export interface Project {
    title: string;
    description: string;
    longDescription: string;
    technologies: {
        name: string;
        svg: string;
        description: string;
    }[];
    thumbnail: string;
    backendGithubUrl?: string;
    frontendGithubUrl?: string;
    youtubeUrl?: string;
    liveUrl?: string;
    featured: boolean;
    architecture: string;
}

export interface Contact {
    email: string;
    phone: string;
    linkedin: string;
    twitter: string;
    youtube: string;
    telegram: string;
    github: string;
}

export interface HomeData {
    profession: String;
    bio: String;
    highlightedTech: {
        name: string;
        icon: string;
    }[];
    highlightedProjects: Project[];
}
