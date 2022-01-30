import React, { useState, useEffect } from 'react'
import Blog from './components/Blog'
import Login from './components/Login'
import blogService from './services/blogs'
import loginService from './services/login'
import newBlog from './components/newBlog'

const App = () => {

  const [blogs, setBlogs] = useState([])
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState(null)
  const [user, setUser] = useState(null)
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [url, setUrl] = useState('')

  useEffect(() => {
    blogService.getAll().then(blogs =>
      setBlogs(blogs)
    )
  }, [])

  const handleLogin = async event => {
    event.preventDefault()
    console.log('logging in with', username, password)
    try {
      const user = await loginService.login({
        username, password,
      })
      setUser(user)
      setUsername('')
      setPassword('')
    } catch (exception) {
      setErrorMessage('Wrong credentials')
      setTimeout(() => {
        setErrorMessage(null)
      }, 5000)
    }
  }
  const handleAdd = async event => {
    event.preventDefault()
    try {

    } catch (e) {

    }
  }
  return (
    <div>
      {user === null ?
        <Login username={username} handleLogin={handleLogin} password={password} setPassword={setPassword} setUsername={setUsername} />
        : <div>
          <p>{user.name} logged-in
            <button onClick={() => setUser(null)}>
              log out
            </button>
          </p>
          <h2>create new</h2>
          <div>
          <newBlog handleAdd={handleAdd} title={title} setTitle={setTitle} url={url} setUrl={setUrl} author={author} setAuthor={setAuthor} />
          </div>
          <h2>blogs</h2>
          {blogs.map(blog =>
            <Blog key={blog.id} blog={blog} handleAdd={handleAdd} title={title} setTitle={setTitle} url={url} setUrl={setUrl} author={author} setAuthor={setAuthor} />
          )}
        </div>
      }

    </div>
  )
}

export default App