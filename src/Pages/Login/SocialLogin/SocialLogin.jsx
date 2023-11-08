import { useNavigate } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import toast from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";


const SocialLogin = () => {
    const {googleLogin} = useAuth()
    const navigate = useNavigate()

    const handleSocialLogin = (social) =>{
        social()
        .then( res =>{
            // eslint-disable-next-line no-unused-vars
            const user = res.user
            toast.success('Login Successful')
            navigate('/')

        })
        .catch( error =>{
            toast.error(error.message)
        })
    }
    return (
        <div>
              <div className="divider text-green-500 ">Or, Continue With</div>
          <button
            type="button"
            onClick= { ()=>handleSocialLogin(googleLogin)}
            className="btn btn-outline btn-success w-full hover:text-white flex justify-between items-center cursor-pointer "
          >
            Google
            <FcGoogle className="w-8 h-8" />
          </button>
        </div>
    );
};

export default SocialLogin;