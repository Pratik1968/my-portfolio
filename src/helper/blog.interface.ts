export interface Blog {
    title: string;
    description: string;
    link: string;
  }
  
  interface BlogCollection {
    items: Blog[];
  }
  
export default  interface BlogQueryResponse {
    blogCollection: BlogCollection;
  }
  