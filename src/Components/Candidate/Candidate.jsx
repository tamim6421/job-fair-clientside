
import { FaFacebookSquare, FaTwitterSquare, FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion"

const Candidate = () => {
  return (
    <div>
      <div className="text-center my-20">
        <h1 className="text-4xl text-green-500 drop-shadow-lg font-bold" data-aos="fade-up">
          High Qualified <span className="text-orange-500">Candidates</span>{" "}
        </h1>
        <p className="text-xl" data-aos="fade-down">
        Register and browse professionals, explore projects, or even book a consultation.
        </p>
      </div>

      <div className="grid gap-5 grid-cols-1 md:grid-cols-3 ">


        <motion.div 
        initial ={{opacity : 0}}
        animate ={{opacity : 1}}
        transition={{delay: 1, duration: 5}}
        className="relative flex flex-col text-gray-700 bg-white shadow-md  rounded-xl bg-clip-border" data-aos="zoom-in-up" >
          <div className="relative box mx-4 mt-4 overflow-hidden text-gray-700 bg-white shadow-lg h-80 rounded-xl bg-clip-border">
            <img src="https://i.ibb.co/DPdgsj1/istockphoto-487336206-612x612.jpg" />
          </div>
          <div className="p-6 text-center">
            <h4 className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900" data-aos="fade-up">
              Natalie Paisley
            </h4>
            <p className="block text-green-500" data-aos="fade-down">
            Full Stack Developer
            </p>
          </div>
          <div className="flex justify-center p-6 pt-2 gap-7">
           
          <a href="">   <FaFacebookSquare className="text-3xl text-blue-500"></FaFacebookSquare></a>
            <a href=""> <FaTwitterSquare className="text-3xl text-sky-500" ></FaTwitterSquare></a>
            <a href=""> <FaInstagram className="text-3xl text-orange-500" ></FaInstagram> </a>
            
            
         
          </div>
          <button className="btn text-white bg-green-500 hover:bg-green-600" data-aos="flip-down">View Profile</button>
        </motion.div>

        <motion.div
        initial ={{opacity : 0}}
        animate ={{opacity : 1}}
        transition={{delay: 0.5, duration: 5}}
         className="relative flex flex-col text-gray-700 bg-white shadow-md  rounded-xl bg-clip-border" data-aos="zoom-in-down">
          <div className="relative box mx-4 mt-4 overflow-hidden text-gray-700 bg-white shadow-lg h-80 rounded-xl bg-clip-border">
            <img className=" w-full h-full object-cover "  src="https://i.ibb.co/fMMkfkx/4a0ffae7dcdc5f1d1423bfbf192e0714.jpg" />
          </div>
          <div className="p-6 text-center">
            <h4 className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900" data-aos="fade-up">
            Catherine K. Gordon
            </h4>
            <p className="block text-green-500" data-aos="fade-down">
            Frontend Developer
            </p>
          </div>
          <div className="flex justify-center p-6 pt-2 gap-7">
           
          <a href="">   <FaFacebookSquare className="text-3xl text-blue-500"></FaFacebookSquare></a>
            <a href=""> <FaTwitterSquare className="text-3xl text-sky-500" ></FaTwitterSquare></a>
            <a href=""> <FaInstagram className="text-3xl text-orange-500" ></FaInstagram> </a>
            
            
         
          </div>
          <button className="btn text-white bg-green-500 hover:bg-green-600" data-aos="flip-up">View Profile</button>
        </motion.div>

        <motion.div
        initial ={{opacity : 0}}
        animate ={{opacity : 1}}
        transition={{delay: 0.5, duration: 5}}
        className="relative flex flex-col text-gray-700 bg-white shadow-md  rounded-xl bg-clip-border" data-aos="zoom-in-up">
          <div className="relative box mx-4 mt-4 overflow-hidden text-gray-700 bg-white shadow-lg h-80 rounded-xl bg-clip-border">
            <img className=" w-full h-full object-cover " src="https://i.ibb.co/SrgwwNw/authors-day-fun.jpg" />
          </div>
          <div className="p-6 text-center">
            <h4 className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900" data-aos="fade-up">
              Mr Abul
            </h4>
          
            <p className="block text-green-500" data-aos="fade-down">
            Backend Developer
            </p>
          </div>
          <div className="flex justify-center p-6 pt-2 gap-7">
           
            
           <a href="">   <FaFacebookSquare className="text-3xl text-blue-500"></FaFacebookSquare></a>
            <a href=""> <FaTwitterSquare className="text-3xl text-sky-500" ></FaTwitterSquare></a>
            <a href=""> <FaInstagram className="text-3xl text-orange-500" ></FaInstagram> </a>
            
         
          </div>
          <button className="btn text-white bg-green-500 hover:bg-green-600" data-aos="flip-down">View Profile</button>
        </motion.div>
      </div>
    </div>
  );
};

export default Candidate;
