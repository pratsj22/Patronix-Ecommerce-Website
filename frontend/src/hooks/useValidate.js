import api from "../api/api";
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
              await api.get(`/api/v1/auth/test`,{
                headers:{
                  'Authorization':`bearer ${token}`,
                  'User':user.id
                },
              })
            } catch (error) {
              navigate("/user/login")
              toast.error("Unauthorized Access",{
                position:'top-center'
              })
              dispatch(userLogout())
            }
          }
          ValidateUser();
    },[token,navigate,dispatch,user])
    return {user};
}
export default useValidate;