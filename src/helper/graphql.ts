import axios from "axios";
export default async function getData<T>(query: string) {
  return axios({
    url: `https://graphql.contentful.com/content/v1/spaces/${import.meta.env.VITE_SPACE_ID}`,
    headers:{
        Authorization:`Bearer ${import.meta.env.VITE_CMS_API_KEY}`
    },
    method: "POST",
    data: { query },
  }).then((res) => res.data.data as T);
}
