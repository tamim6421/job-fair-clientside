import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import { FaEye,FaEyeSlash  } from "react-icons/fa";
import useAuth from "../../Hooks/useAuth";
import SocialLogin from "../Login/SocialLogin/SocialLogin";

const Register = () => {
    const {createUser, handleUpdateProfile} = useAuth()
    const [showPass, setShowPass] = useState(false)
    const navigate = useNavigate()




    const handleRegister = event =>{
        event.preventDefault()
        const form = event.target 
        const name = form.name.value 
        const photo = form.photo.value
        const email = form.email.value 
        const password = form.password.value 
        console.log(email, password, name, photo)
      
        createUser(email, password)
        .then( res =>{
         const user = res.user
         
        //  localStorage.setItem('user', JSON.stringify(user));
 
         // const newUser = {name, email}
         // fetch('http://localhost:5000/users',{
         //   method:"POST",
         //   headers:{
         //     'content-type':'application/json'
         //   },
         //   body:JSON.stringify(newUser)
         // })
         // .then(res => res.json())
         // .then(data =>{
         //   console.log(data)
         // })
 
 
 
      
         handleUpdateProfile(name, photo)
         .then(() =>{
          //  toast.success('User Created Successful')
           event.target.reset()
 
           console.log(user)
           navigate('/')
 
 
         } )
     })
 
 
        .catch(error =>{
         console.log(error)
        })
    }
    return (
        <div className="container">
    <div className="overly">
    <Navbar></Navbar>
    <div className="hero min-h-screen">
       <div className="hero-content flex-col lg:flex-row-reverse bg-[#bbbbbb53]">
         <div className="text-center lg:text-left">
           <h1 className="text-5xl text-white mb-10 divider font-bold">Register now!</h1>
           <p className="py-6">
            {/* <img src={photo} alt="" /> */}

           </p>
         </div>
         <div className="card flex-shrink-0 w-full max-w-sm  ">
           <form onSubmit={handleRegister} className="card-body">
             
             <div className="form-control ">
               <label className="label">
                 <span className="label-text text-white">User Name</span>
               </label>
               <input
                 type="text"
                 name="name"
                 placeholder="Name"
                 className="input input-bordered"
                 required
               />
             </div>
             
             <div className="form-control ">
               <label className="label">
                 <span className="label-text text-white">Photo URL</span>
               </label>
               <input
                 type="text"
                 name="photo"
                 placeholder="Photo URL"
                 className="input input-bordered"
                 
               />
             </div>

             <div className="form-control ">
               <label className="label">
                 <span className="label-text text-white">Email</span>
               </label>
               <input
                 type="email"
                 name="email"
                 placeholder="Email"
                 className="input input-bordered"
                 required
               />
             </div>
             <div className="form-control">
               <label className="label">
                 <span className="label-text text-white">Password</span>
               </label>
             
               <div className="relative">
               <input
                  type={showPass ? "text" : "password"}
                  name="password"
                  placeholder="password"
                  required
                  className="input input-bordered w-full"
                />
                <div className=" absolute right-3 top-3 text-xl">
                <span onClick={()=> setShowPass(!showPass)}>
                  {
                    showPass? <FaEyeSlash></FaEyeSlash> :  <FaEye></FaEye>
                  }
                </span>
                </div>
               </div>
               <div className=" mt-4">
                    <input className="mr-2" type="checkbox" name="check" id="check" />
                    <label className="text-white" htmlFor="check">Accept Our Trams And Conditions</label>
                  </div>
            
             </div>
            
             <div className="form-control mt-6">
               <button className="btn bg-rose-500 text-white btn-error">register</button>
               <p className='text-white mt-4'>Already have an account? Please  <Link to='/login'>   <span className='text-rose-600 font-semibold underline'> Login</span> </Link></p>
             </div>
             <div>
               <SocialLogin></SocialLogin>
             </div>
           </form>
         </div>
       </div>
     </div>
    </div>
   </div>
    );
};

export default Register;