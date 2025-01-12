export default class Query{
    static   get projectQuery():string{
        return `
            query{
projectCollection{
  items{
    title
    description
    link
    techStack
  }
}
}
        `

    }
    static get blogQuery():string{
        return `
            query{
blogCollection{
  items{
   title
    description
    link
  }
}
}
        `
    }
}