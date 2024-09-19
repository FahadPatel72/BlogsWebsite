import { createContext, useState } from "react";
import { baseUrl } from "../baseUrl";
import { useNavigate } from "react-router-dom";

//step 1
export const AppContext = createContext();

export default function AppContextProvider({ children }) {
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(null);
  const [posts, setPost] = useState([]);
  const navigate = useNavigate();

  //data filling
  async function fetchBlogPosts(page = 1, tag = null, category) {
    setLoading(true);
    let url = `${baseUrl}?page=${page}`;

    if (tag) {
      url += `&tag=${tag}`;
    }
    if (category) {
      url += `&category=${category}`;
    }

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
    navigate({ search: `?page=${page}` });
    setPage(page);
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
