import React, {useState, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {useNavigate, Link} from 'react-router-dom'
import {setUser} from '../../store/auth/user'
import {logIn, logInGoogle} from '../../store/auth'

const LogIn = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  let isNew = useSelector((state) => state.auth)

  let [userInfo, setUserInfo] = useState({
    username: '',
    password: '',
  })

  let [success, setSuccess] = useState(false)
  useEffect(() => {
    if (success) {
      navigate('/home')
    }
  })

  const handleChange = (e) => {
    e.preventDefault()
    setUserInfo({
      ...userInfo,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    await dispatch(logIn(userInfo.username, userInfo.password))

    setSuccess(true)

    dispatch(setUser())
  }

  const handleSubmitGoogle = async (e) => {
    e.preventDefault()
    await dispatch(logInGoogle())
    if (isNew) {
      navigate('/editprofile')
    } else {
      setSuccess(true)
    }

    dispatch(setUser())
  }


  return (
    <div className="login-container">
    <section>
      <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <h5>Sign In</h5>
        <form onSubmit={handleSubmit}>
            <input
              onChange={handleChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              name="username"
              label="username"
              type="text"
              required
            />
            <input
              onChange={handleChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              name="password"
              label="password"
              type="password"
              required
            />
            <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow" type="submit">Sign In</button>
            <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow" type="button" onClick={handleSubmitGoogle}>
              Sign in with Google
            </button>
        </form>
            <Link to="/register">
              <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">Sign Up</button>
            </Link>
          </div>
    </section>
  </div>
  )
}

export default LogIn
