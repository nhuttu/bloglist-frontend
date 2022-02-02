import React from 'react'
import Togglable from './Togglable'

const Blog = ({ blog, newLike }) => {
  const blogStyle = {
    paddingTop: 10,
    paddingLeft: 2,
    border: 'solid',
    borderWidth: 1,
    marginBottom: 5
  }
  console.log(blog)

  return (
    <div>
      <div style={blogStyle}>
        {blog.title} {blog.author}
        <Togglable buttonLabel="view" buttonLabel2="hide">
          <p>{blog.url}</p>
          <div>
            likes {blog.likes}
            <button onClick={() => newLike(blog)}>like</button>
          </div>
          <p>{blog.user.name}</p>

        </Togglable>
      </div>
    </div>
  )
}

export default Blog