import axios from "axios";
export default async function getData<T>(query: string) {
  return axios({
    url: import.meta.env.VITE_CMS_ENDPOINT,
    method: "POST",
    data: { query },
  }).then((res) => res.data.data as T);
}
