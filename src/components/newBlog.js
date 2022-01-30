import React from "react";

const newBlog = ({ handleAdd, title, setTitle, url, setUrl, author, setAuthor }) => {
    <div>
        <form onSubmit={handleAdd}>
            <div>
                title
                <input
                    type="text"
                    value={title}
                    name="Title"
                    onChange={({ target }) => setTitle(target.value)}
                />
            </div>
            <div>
                author
                <input
                    type="text"
                    value={author}
                    name="Author"
                    onChange={({ target }) => setAuthor(target.value)}
                />
            </div>
            <div>
                url
                <input
                    type="text"
                    value={url}
                    name="Author"
                    onChange={({ target }) => setUrl(target.value)}
                />
            </div>
        </form>
    </div>
}

export default newBlog