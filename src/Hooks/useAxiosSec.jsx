import axios from "axios";
import { useEffect } from "react";
import useAuth from "./useAuth";
import { useNavigate } from "react-router-dom";

const axiosSecure = axios.create({
    baseURL : 'https://job-fair-server.vercel.app',
    withCredentials: true,
})

const useAxiosSec = () => {
  const {logOut} = useAuth()
    const navigate = useNavigate()

    useEffect( () =>{
        axiosSecure.interceptors.response.use(res => {
            return res;
        } , error =>{
            console.log('error in the middle of  interceptors', error.response)
            if(error.response.status === 401 || error.response.status === 403) {
             
                logOut()
                .then( () => {
                    navigate('/login')
                })
                .catch(error => {
                  console.log(error)
                })
            }
        })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    } ,[])

    return axiosSecure;
};

export default useAxiosSec;
