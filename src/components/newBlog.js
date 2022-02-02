import React, { useState } from "react";

const NewBlog = ({ handleAdd }) => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [url, setUrl] = useState("");
  const createBlog = (event) => {
    event.preventDefault();
    const newBlog = {
      title: title,
      url: url,
      author: author,
    };
    handleAdd(newBlog);
    setUrl("");
    setAuthor("");
    setTitle("");
  };
  return (
    <div>
      <form onSubmit={createBlog}>
        <div>
          title:
          <input
            type="text"
            value={title}
            name="Title"
            onChange={({ target }) => setTitle(target.value)}
          />
        </div>
        <div>
          author:
          <input
            type="text"
            value={author}
            name="Author"
            onChange={({ target }) => setAuthor(target.value)}
          />
        </div>
        <div>
          url:
          <input
            type="text"
            value={url}
            name="Author"
            onChange={({ target }) => setUrl(target.value)}
          />
        </div>
        <button type="submit">create</button>
      </form>
    </div>
  );
};

export default NewBlog;
