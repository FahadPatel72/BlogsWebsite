import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { baseUrl } from "../baseUrl";
import BlogsDetails from "../components/BlogsDetails";
import Loader from "../components/Loader";
import "./BlogPage.css";

const BlogPage = () => {
  const nav = useNavigate();
  const [blog, setBlog] = useState(null);
  const [relatedBlog, setRelatedBlog] = useState([]);
  const location = useLocation();
  const [loading, setLoading] = useState(false);
  const blogId = location.pathname.split("/").at(-1);
  const newBaseUrl = "https://codehelp-apis.vercel.app/api/";

  async function fetchRelatedBlogs() {
    setLoading(true);
    let url = `${newBaseUrl}get-blog?blogId=${blogId}`;
    try {
      const res = await fetch(url);
      const data = await res.json();
      setBlog(data.blog);
      setRelatedBlog(data.relatedBlogs);
    } catch (error) {
      console.log("Error in fetching data....");
      setBlog(null);
      setRelatedBlog([]);
    }
    setLoading(false);
  }

  useEffect(() => {
    if (blogId) {
      fetchRelatedBlogs();
    }
  }, [location.pathname]);

  return (
    <div className="back-blog-btn">
      <div className="blog-bck">
        <button onClick={() => nav(-1)}>Back</button>
      </div>
      {loading ? (
        <Loader />
      ) : blog ? (
        <div>
          <BlogsDetails post={blog} />
          <h2 className="related-btn">Related Blogs</h2>
          {relatedBlog.map((post) => (
            <div key={post.id}>
              <BlogsDetails post={post} />
            </div>
          ))}
        </div>
      ) : (
        <p>No Posts Found</p>
      )}
    </div>
  );
};

export default BlogPage;
