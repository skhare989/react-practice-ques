import React from "react";

const Blogs = ({ title, blogContent }) => {
  return (
    <div className="blog-container">
      <h3>{title}</h3>
      <div>{blogContent}</div>
    </div>
  );
};

export default Blogs;
