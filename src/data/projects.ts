import projectsData from "./projects.json";

export type Project = {
  id: number;
  slug: string;
  title: string;
  design: string;
  category: string;
  palette: string;
  img: string;
  description: string;
  location: string;
  year: string;
  area: string;
  timeline: string;
  brief: string;
  details: string[];
  gallery: string[];
};

export const projects = projectsData as Project[];

export function getProjectBySlug(slug: string | undefined) {
  return projects.find((project) => project.slug === slug);
}
