import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { userLogout } from "../redux/userReducer";
import { useSelector } from "react-redux"

const useValidate=()=>{
  const navigate= useNavigate()
  const dispatch= useDispatch()
  const userData = useSelector((data)=> data.userData)
  const user= userData.user;
  const token= userData.token;
    useEffect(()=>{
        const ValidateUser=async()=>{
            try {
              const response=await axios.get(`${process.env.REACT_APP_API_URL}/api/v1/auth/test`,{
                headers:{
                  'Authorization':`bearer ${token}`,
                  'User':user.id
                },
              })
              if(response.data.message!=="done"){
                toast.error(response.data.message,{
                    position:'top-center'
                  })
              }
            } catch (error) {
              navigate("/user/login")
              toast.error("Unauthorized Access",{
                position:'top-center'
              })
              dispatch(userLogout())
            }
          }
          ValidateUser();
          console.log("inside validate");
    },[token,navigate,dispatch,user])
    return {user};
}
export default useValidate;