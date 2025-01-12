export interface Project {
    title: string;
    description: string;
    link: string;
    techStack: string;
  }
  
  interface ProjectCollection {
    items: Project[];
  }
  
 export default interface ProjectQueryResponse {
    projectCollection: ProjectCollection;
  }
  