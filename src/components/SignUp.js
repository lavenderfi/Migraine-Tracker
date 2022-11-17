import {useNavigate} from 'react-router-dom'
import {useState, useEffect} from 'react'
import {useDispatch} from 'react-redux'
import { signUpUser } from '../store/auth'


export default function Signup() {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  let [userInfo, setUserInfo] = useState({
    name: '',
    username: '',
    password: '',
    confirmPassword: '',
  })
  let [success, setSuccess] = useState(false)

  useEffect(() => {
    if (success) {
      navigate('/')
    }
  })

  function handleChange(e) {
    setUserInfo({
      ...userInfo,
      [e.target.name]: e.target.value,
    })
  }
  function handleSubmit(e) {
    e.preventDefault()
    dispatch(signUpUser(userInfo.name, userInfo.email, userInfo.password))
    setSuccess(true)
  }

  return (
    <div className="signup-component">
      <div div className="max-w-sm rounded overflow-hidden shadow-lg">
        <form className="signup-form" onSubmit={handleSubmit}>
          <input
            onChange={handleChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            name="name"
            label="Name"
            variant="filled"
            required
          />
          <input
            onChange={handleChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            name="email"
            label="Email"
            variant="filled"
            type="email"
            required
          />
          <input
            onChange={handleChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            name="password"
            label="Password"
            variant="filled"
            type="password"
            required
          />
          <input
            onChange={handleChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            name="confirmPassword"
            label="Confirm Password"
            variant="filled"
            type="password"
            error={
              userInfo.password === userInfo.confirmPassword ? false : true
            }
            required
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  )
}