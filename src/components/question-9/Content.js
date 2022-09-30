import React, { useEffect, useState } from "react";
import axios from "axios";
import Blogs from "./Blogs";

const Content = () => {
  const [blogs, setBlogs] = useState([]);
  const baseUrl = "https://jsonplaceholder.typicode.com/posts";
  useEffect(() => {
    const fetchBlogPosts = async () => {
      const blogPosts = await axios.get(baseUrl);

      setBlogs(blogPosts.data);
    };

    fetchBlogPosts();
  }, []);
  return (
    <div className="content-container">
      <div className="blog-container">
        {blogs.map((e) => {
          return <Blogs title={e.title} blogContent={e.body} key={e.id} />;
        })}
      </div>
      <div className="links-container">
        <div>
          <a href={"https://www.nutmeg.com"} target={"_blank"} rel="noreferrer">
            Home
          </a>
        </div>
        <div>
          <a href="https://www.nutmeg.com/why-nutmeg">Why Nutmeg</a>
        </div>
      </div>
    </div>
  );
};

export default Content;
