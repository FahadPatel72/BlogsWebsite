import React, { useContext, useEffect } from "react";
import Header from "./components/Header";
import Blogs from "./components/Blogs";
import Pagination from "./components/Pagination";
import { AppContext } from "./context/AppContext";
import "./App.css";

export const App = () => {
  const { fetchBlogPosts } = useContext(AppContext);

  useEffect(() => {
    fetchBlogPosts();
  }, []);

  return (
    <div className="wrapper">
      <Header />
      <Blogs />
      <Pagination />
    </div>
  );
};

export default App;
