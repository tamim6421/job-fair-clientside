
import { FaFacebookSquare, FaTwitterSquare, FaInstagram } from "react-icons/fa";

const Candidate = () => {
  return (
    <div>
      <div className="text-center my-20">
        <h1 className="text-3xl font-bold">
          High Qualified <span>Candidates</span>{" "}
        </h1>
        <p>
          onsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
          et dolore magna aliqua.{" "}
        </p>
      </div>

      <div className="grid gap-5 grid-cols-1 md:grid-cols-3">
        <div className="relative flex flex-col text-gray-700 bg-white shadow-md  rounded-xl bg-clip-border">
          <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white shadow-lg h-80 rounded-xl bg-clip-border">
            <img src="https://i.ibb.co/DPdgsj1/istockphoto-487336206-612x612.jpg" />
          </div>
          <div className="p-6 text-center">
            <h4 className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
              Natalie Paisley
            </h4>
            <p className="block font-sans text-base antialiased font-medium leading-relaxed text-transparent bg-gradient-to-tr from-pink-600 to-pink-400 bg-clip-text">
              CEO / Co-Founder
            </p>
          </div>
          <div className="flex justify-center p-6 pt-2 gap-7">
           
            
           <a href="">   <FaFacebookSquare className="text-3xl"></FaFacebookSquare></a>
            <a href=""> <FaTwitterSquare className="text-3xl" ></FaTwitterSquare></a>
            <a href=""> <FaInstagram className="text-3xl" ></FaInstagram> </a>
            
         
          </div>
        </div>
        <div className="relative flex flex-col text-gray-700 bg-white shadow-md  rounded-xl bg-clip-border">
          <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white shadow-lg h-80 rounded-xl bg-clip-border">
            <img src="https://i.ibb.co/DPdgsj1/istockphoto-487336206-612x612.jpg" />
          </div>
          <div className="p-6 text-center">
            <h4 className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
              Natalie Paisley
            </h4>
            <p className="block font-sans text-base antialiased font-medium leading-relaxed text-transparent bg-gradient-to-tr from-pink-600 to-pink-400 bg-clip-text">
              CEO / Co-Founder
            </p>
          </div>
          <div className="flex justify-center p-6 pt-2 gap-7">
           
            
           <a href="">   <FaFacebookSquare className="text-3xl"></FaFacebookSquare></a>
            <a href=""> <FaTwitterSquare className="text-3xl" ></FaTwitterSquare></a>
            <a href=""> <FaInstagram className="text-3xl" ></FaInstagram> </a>
            
         
          </div>
        </div>
        <div className="relative flex flex-col text-gray-700 bg-white shadow-md  rounded-xl bg-clip-border">
          <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white shadow-lg h-80 rounded-xl bg-clip-border">
            <img src="https://i.ibb.co/DPdgsj1/istockphoto-487336206-612x612.jpg" />
          </div>
          <div className="p-6 text-center">
            <h4 className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
              Natalie Paisley
            </h4>
            <p className="block font-sans text-base antialiased font-medium leading-relaxed text-transparent bg-gradient-to-tr from-pink-600 to-pink-400 bg-clip-text">
              CEO / Co-Founder
            </p>
          </div>
          <div className="flex justify-center p-6 pt-2 gap-7">
           
            
           <a href="">   <FaFacebookSquare className="text-3xl"></FaFacebookSquare></a>
            <a href=""> <FaTwitterSquare className="text-3xl" ></FaTwitterSquare></a>
            <a href=""> <FaInstagram className="text-3xl" ></FaInstagram> </a>
            
         
          </div>
        </div>
      </div>
    </div>
  );
};

export default Candidate;
