import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import Loader from "./Loader";
import "./Blogs.css";

const Blogs = () => {
  const { loading, posts } = useContext(AppContext);

  return (
    <div className="blogs-container">
      {loading ? (
        <Loader />
      ) : posts.length === 0 ? (
        <p>No Page Found</p>
      ) : (
        posts.map((post) => (
          <div key={post.id} className="card">
            <p className="card-title">{post.title}</p>
            <p className="card-aut-cat">
              {" "}
              By <span className="itl">{post.author}</span> on{" "}
              <span className="bld">{post.category}</span>{" "}
            </p>
            <p className="pos-date">
              Posted On <span>{post.date}</span>
            </p>
            <p className="conten">{post.content}</p>
            <div className="alltag">
              {post.tags.map((tag, index) => {
                return (
                  <span className="tag-style" key={index}>{`#${tag}`}</span>
                );
              })}
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Blogs;
