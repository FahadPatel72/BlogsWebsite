import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Pagination from "../components/Pagination";
import Header from "../components/Header";
import Blogs from "../components/Blogs";
import "./TagPage.css";

const TagPage = () => {
  const nav = useNavigate();
  const location = useLocation();
  const tag = location.pathname.split("/").at(-1);

  return (
    <div className="tag-container">
      <Header />
      <div className="tag-items">
        <button className="back-btn" onClick={() => nav(-1)}>
          Back
        </button>

        <h2 className="tag-blog">
          Blogs Tagged <span className="tag-ind">#{tag}</span>
        </h2>
      </div>

      <Blogs />
      <Pagination />
    </div>
  );
};

export default TagPage;
