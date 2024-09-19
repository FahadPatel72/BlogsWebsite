import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./BlogsDetails.css";

const BlogsDetails = ({ post }) => {
  return (
    <div className="card">
      <NavLink to={`/blog/${post.id}`}>
        <span className="card-title">{post.title}</span>
      </NavLink>

      <p className=".card-aut-cat">
        By <span className="itl">{post.author}</span> on{" "}
        <NavLink to={`/categories/${post.category.replaceAll(" ", "-")}`}>
          <span className="bld"> {post.category} </span>
        </NavLink>
      </p>

      <p className="pos-date">
        Posted On <span>{post.date}</span>
      </p>

      <p className="conten">{post.content}</p>

      <div className="alltag">
        {post.tags.map((tag, index) => (
          <NavLink key={index} to={`/tags/${tag.replaceAll(" ", "-")}`}>
            <span className="tag-style">{`#${tag}`}</span>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default BlogsDetails;
