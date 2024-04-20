import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
// import {useSelector} from 'react-redux'
import { toast } from "react-toastify";
import { userLogin } from "../../redux/userReducer";
import { useDispatch } from "react-redux";

export default function Login() {
  const[email,setEmail]=useState()
  const[password,setPassword]=useState()
  const navigate= useNavigate();
  const dispatch= useDispatch()
  const handleSubmit=async(e)=>{
    if(!email || !password) return;
    e.preventDefault();
    
    try {
      const loginData=await axios.post(`${process.env.REACT_APP_API_URL}/api/v1/auth/login`,{
        email,
        password
      })
      dispatch(userLogin({
        user:loginData.data.user,
        token:loginData.data.token
      }))
      toast.success(loginData.data.message, {
        position: toast.POSITION.TOP_CENTER,
    })
    navigate("/")
    } catch (error) {
      toast.error(error.response.data.message, {
        position: toast.POSITION.TOP_CENTER,
    })
    }
    
  }
  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="" method="POST">
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  onChange={(e)=> setEmail(e.target.value)}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                  Password
                </label>
                <div className="text-sm">
                  <Link to="" className="font-semibold text-blue-600 hover:text-blue-500">
                    Forgot password?
                  </Link>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  onChange={(e)=> setPassword(e.target.value)}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-blue-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                onClick={handleSubmit}
              >
                Sign in
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Not a member?{' '}
            <Link to="/user/signup" className="font-semibold leading-6 text-blue-600 hover:text-blue-500">
              Register Now
            </Link>
          </p>
        </div>
      </div>
    </>
  )
}
