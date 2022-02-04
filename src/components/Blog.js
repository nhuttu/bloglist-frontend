import React from "react";
import Togglable from "./Togglable";

const Blog = ({ blog, newLike, deleteBlog }) => {
  const blogStyle = {
    paddingTop: 10,
    paddingLeft: 2,
    border: "solid",
    borderWidth: 1,
    marginBottom: 5,
  };

  return (
    <div>
      <div style={blogStyle} className="blog1">
        {blog.title} {blog.author}
        <Togglable buttonLabel="view" buttonLabel2="hide">
          <p>{blog.url}</p>
          <div>
            likes {blog.likes}
            <button id="clickButton"onClick={() => newLike(blog)}>like</button>
          </div>
          <p>{blog.user.name}</p>

          <button onClick={() => deleteBlog(blog)}>remove</button>
        </Togglable>
      </div>
    </div>
  );
};

export default Blog;
