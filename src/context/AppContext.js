import { createContext, useState } from "react";
import { baseUrl } from "../baseUrl";

//step 1
export const AppContext = createContext();

export default function AppContextProvider({ children }) {
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(null);
  const [posts, setPost] = useState([]);

  //data filling
  async function fetchBlogPosts(page = 1) {
    setLoading(true);
    let url = `${baseUrl}?page=${page}`;

    try {
      const output = await fetch(url);
      const data = await output.json();
      setPage(data.page);
      setPost(data.posts);
      setTotalPage(data.totalPages);
    } catch (error) {
      console.log("Unable to fetch data...");
      setPage(1);
      setPost([]);
      setTotalPage(null);
    }
    setLoading(false);
  }

  function pageHandle(page) {
    setPage(page);
    fetchBlogPosts(page);
  }

  const value = {
    loading,
    setLoading,
    page,
    setPage,
    totalPage,
    setTotalPage,
    posts,
    setPost,
    fetchBlogPosts,
    pageHandle,
  };

  //step2
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
