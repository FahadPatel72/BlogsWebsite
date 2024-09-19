import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Pagination from "../components/Pagination";
import Blogs from "../components/Blogs";
import "./CategoryPage.css";

const CategoryPage = () => {
  const nav = useNavigate();
  const location = useLocation();
  const category = location.pathname.split("/").at(-1);

  return (
    <div>
      <Header />

      <div className="tag-items">
        <button className="back-btn" onClick={() => nav(-1)}>
          Back
        </button>

        <h4 className="tag-blog">
          Blogs On <span className="tag-in">{category}</span>
        </h4>
      </div>

      <Blogs />
      <Pagination />
    </div>
  );
};

export default CategoryPage;
