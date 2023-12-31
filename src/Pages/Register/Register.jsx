import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import useAuth from "../../Hooks/useAuth";
import SocialLogin from "../Login/SocialLogin/SocialLogin";
import login from "../../assets/login1.json";
import Lottie from "lottie-react";
import Title from "../../Components/Title/Title";
import toast from "react-hot-toast";
import useAxiosPublic from "../../Hooks/axiosPublic";
import Swal from "sweetalert2";

const Register = () => {
  const axiosPublic = useAxiosPublic()
  const { createUser, handleUpdateProfile } = useAuth();
  const [showPass, setShowPass] = useState(false);
  const navigate = useNavigate();
  const [districts, setDistricts] = useState([])

  // get division 
  useEffect( () =>{
    fetch('https://bdapis.com/api/v1.1/districts')
    .then( res=> res.json())
    .then(data => {
      setDistricts(data.data)
    })
  } ,[])
  // console.log(districts)

  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    const check = event.target.check.checked;

    if (password.length < 6) {
      toast.error("Password mast be at 6 character");
      return;
    } else if (!/^(?=.*[A-Z])/.test(password)) {
      toast.error("One Character should be UPPERCASE");
      return;
    } else if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
      toast.error("Must have a special character");
      return;
    } else if (!check) {
      toast.error("Please Accept Our Trams And Conditions");
      return;
    }

    createUser(email, password)
      .then((res) => {
        const user = res.user;

        handleUpdateProfile(name, photo)
        .then(() => {
           // send user data to the database 
              const userInfo = {
                name: name,
                email:email,
                role : "user",
                district: district,
              }

              console.log(userInfo)
              // axiosPublic.post('/users', userInfo )
              // .then( res => {
              //   console.log(res.data)
              //   if(res.data.insertedId){
              //     Swal.fire({
              //       position: "top-center",
              //       icon: "success",
              //       title: "User Created Successful",
              //       showConfirmButton: false,
              //       timer: 1500
              //     });
              //     reset()
              //     navigate('/')
              //   }
              // })

          event.target.reset();

          console.log(user);
          navigate("/");
        });
      })

      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="container ">
      <div className="overly">
        <Navbar></Navbar>
        <div className="hero min-h-screen bg-green-50">
          <div className="hero-content flex-col lg:flex-row-reverse ">
            <div className="text-center mt-10 lg:text-left">
              <Title>Register Now</Title>
              <p className="py-6">
                <Lottie animationData={login}></Lottie>
              </p>
            </div>
            <div className="card flex-shrink-0 w-full max-w-sm  ">
              <form onSubmit={handleRegister} className="card-body">
                <div className="form-control ">
                  <label className="label">
                    <span className="label-text text-green-500">User Name</span>
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
                    <span className="label-text text-green-500">
                     District
                    </span>
                  </label>
                  <select
                required
                className="input input-bordered"
                name="district"
              >
                
                {districts?.map((area) => (
                  <option value={area.label} key={area.district}>
                    {area.district}
                  </option>
                ))}
              </select>

                </div>

                <div className="form-control ">
                  <label className="label">
                    <span className="label-text text-green-500">Photo URL</span>
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
                    <span className="label-text text-green-500">Email</span>
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
                    <span className="label-text text-green-500">Password</span>
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
                      <span onClick={() => setShowPass(!showPass)}>
                        {showPass ? (
                          <FaEyeSlash className="text-green-400"></FaEyeSlash>
                        ) : (
                          <FaEye className="text-green-400"></FaEye>
                        )}
                      </span>
                    </div>
                  </div>
                  <div className=" mt-4">
                    <input
                      className="mr-2"
                      type="checkbox"
                      name="check"
                      id="check"
                    />
                    <label className="text-green-500" htmlFor="check">
                      Accept Our Trams And Conditions
                    </label>
                  </div>
                </div>

                <div className="form-control mt-6">
                  <button className="btn bg-green-500 text-white btn-success">
                    register
                  </button>
                  <p className="text-green-500 mt-4">
                    Already have an account? Please{" "}
                    <Link to="/login">
                      {" "}
                      <span className="text-rose-600 font-semibold underline">
                        {" "}
                        Login
                      </span>{" "}
                    </Link>
                  </p>
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
