import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import Loader from "./Loader";
import "./Blogs.css";
import BlogsDetails from "./BlogsDetails";

const Blogs = () => {
  const { loading, posts } = useContext(AppContext);

  return (
    <div className="blogs-container">
      {loading ? (
        <Loader />
      ) : posts.length === 0 ? (
        <p>No Page Found</p>
      ) : (
        posts.map((post) => <BlogsDetails post={post} key={post.id} />)
      )}
    </div>
  );
};

export default Blogs;
