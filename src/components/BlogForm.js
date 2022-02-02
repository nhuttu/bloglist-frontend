import React from "react";
const BlogForm = () => {
    return (
        <div>
            <p>{user.name} logged-in
                <button onClick={() => LogOut()}>
                    log out
                </button>
            </p>
            <h2>create new</h2>
            <div>
                <NewBlog handleAdd={handleAdd} title={title} setTitle={setTitle} url={url} setUrl={setUrl} author={author} setAuthor={setAuthor} />
            </div>
            <h2>blogs</h2>
            {blogs.map(blog =>
                <Blog key={blog.id} blog={blog} handleAdd={handleAdd} title={title} setTitle={setTitle} url={url} setUrl={setUrl} author={author} setAuthor={setAuthor} />
            )}
        </div>
    )
}
export default BlogForm