import React, { useState, useEffect } from 'react'
import Blog from './components/Blog'
import Login from './components/Login'
import blogService from './services/blogs'
import loginService from './services/login'
import NewBlog from './components/NewBlog'
import Togglable from './components/Togglable'

const App = () => {

  const [blogs, setBlogs] = useState([])
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState(null)
  const [sucMessage, setSucMessage] = useState(null)
  const [user, setUser] = useState(null)
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [url, setUrl] = useState('')

  useEffect(() => {
    blogService.getAll().then(blogs =>
      setBlogs(blogs)
    )
  }, [])

  useEffect(() => {
    const loggedUserJSon = window.localStorage.getItem('loggedBlogUser')
    if (loggedUserJSon) {
      const user = JSON.parse(loggedUserJSon)
      setUser(user)
      blogService.setToken(user.token)
    }
  }, [])
  const ErrorMsg = ({ errorToDisplay }) => {
    if (errorToDisplay)
      return (
        <div className='failure'>
          {errorToDisplay}
        </div>
      )
    return null
  }
  const SuccessMsg = ({ sucToDisplay }) => {
    if (sucToDisplay)
      return (
        <div className='success'>
          {sucToDisplay}
        </div>
      )
    return null
  }

  const handleLogin = async event => {
    event.preventDefault()
    console.log('logging in with', username, password)
    try {
      const user = await loginService.login({
        username, password
      })
      window.localStorage.setItem('loggedBlogUser', JSON.stringify(user))
      blogService.setToken(user.token)
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
  const newLike = async ({ blog }) => {
    console.log(blog)
    const newBlog = {
      user: blog.user.id,
      likes: blog.likes + 1,
      author: blog.author,
      title: blog.title,
      url: blog.url
    }
    const response = await blogService.update(blog.id, newBlog)
    console.log(response)
  }
  const LogOut = () => {
    setUser(null)
    window.localStorage.removeItem('loggedBlogUser')
  }
  const loginForm = () => {
    return <Login username={username} handleLogin={handleLogin} password={password} setPassword={setPassword} setUsername={setUsername} />
  }
  const blogForm = () => {
    return (
      <div>
        <p>{user.name} logged-in
          <button onClick={() => LogOut()}>
            log out
          </button>
        </p>
        <div>
          <Togglable buttonLabel="create new blog" buttonLabel2="cancel">
            <h2>create new</h2>
            <NewBlog handleAdd={handleAdd} title={title} setTitle={setTitle} url={url} setUrl={setUrl} author={author} setAuthor={setAuthor} />
          </Togglable>
        </div>
        <h2>blogs</h2>
        {blogs.map(blog =>
          <Blog key={blog.id} blog={blog} newLike={newLike} />
        )}
      </div>
    )
  }
  const handleAdd = async event => {
    event.preventDefault()
    try {
      const blog = {
        title: title,
        url: url,
        author: author
      }
      blogService.create(blog)
      setBlogs(blogs.concat(blog))
      setUrl('')
      setAuthor('')
      setTitle('')
      setSucMessage(`a new blog ${blog.title} by ${blog.author} added`)
      setTimeout(() => {
        setSucMessage(null)
      }, 5000)
    } catch (e) {
      setErrorMessage('Adding a new blog failed')
      setTimeout(() => {
        setErrorMessage(null)
      }, 5000)
    }
  }
  return (
    <div>
      <div>
        <ErrorMsg errorToDisplay={errorMessage} />
        <SuccessMsg sucToDisplay={sucMessage} />
      </div>
      {user === null ?
        loginForm()
        : blogForm()
      }
    </div>
  )
}

export default App