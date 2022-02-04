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
            id="title"
            type="text"
            value={title}
            name="Title"
            onChange={({ target }) => setTitle(target.value)}
          />
        </div>
        <div>
          author:
          <input
            id="author"
            type="text"
            value={author}
            name="Author"
            onChange={({ target }) => setAuthor(target.value)}
          />
        </div>
        <div>
          url:
          <input
            id="url"
            type="text"
            value={url}
            name="Url"
            onChange={({ target }) => setUrl(target.value)}
          />
        </div>
        <button id="create-button" type="submit">create</button>
      </form>
    </div>
  );
};

export default NewBlog;
