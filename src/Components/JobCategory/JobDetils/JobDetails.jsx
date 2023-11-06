import { Link, useLoaderData, useNavigate } from "react-router-dom";
import Navbar from "../../Navbar/Navbar";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaMoneyBill1 } from "react-icons/fa6";
import {  MdOutlinePriceChange, MdDateRange, MdDescription } from "react-icons/md";
import toast from "react-hot-toast";
import useAuth from "../../../Hooks/useAuth";
import Swal from "sweetalert2";

const JobDetails = () => {
  const {user} = useAuth()
  const jobs = useLoaderData();
  const { jobTitle,deadline, priceRange,employerEmail, shortDescription} = jobs;

//   const navigate = useNavigate()
  console.log(jobs);

  localStorage.setItem('jobsData', JSON.stringify(jobs));

//  const  handlePlaceBid  = () =>{
//     navigate(`/bidField/${jobTitle}`)
//  }



const handleBid = () =>{
  Swal.fire({
    icon: "error",
    title: "Oops...",
    text: "YOU CAN NOT BID YOUR OWN PROJECT",
    
  });
    
}


  return (
    <div>
      <Navbar></Navbar>
      
      <h1>Job details</h1>

      <div>
        <div className="h-[300px] bg-base-100 shadow-lg">
          <div className=" px-20 gap-9 flex items-center  mt-20">
            <div>
              <img
                className="mt-20"
                src="https://i.ibb.co/fSNZvJ5/Rectangle-2-1.png"
                alt=""
              />
            </div>
            <div className="space-y-3">
              <h1 className="text-3xl text-green-400 font-bold">
                {" "}
                {jobTitle}{" "}
              </h1>
              <p className="flex items-center gap-1 text-xl">
                {" "}
                <FaMapMarkerAlt></FaMapMarkerAlt> <span>Dhaka</span>
              </p>
              <p className="flex items-center gap-1 text-xl">
                {" "}
                <FaMoneyBill1></FaMoneyBill1> <span>40K-50K</span>{" "}
              </p>
              <div className="flex gap-4">
                <button className="btn bg-green-400"> Full Time </button>
                <button className="btn btn-warning"> Urgent </button>
                <button className="btn bg-rose-300">Remote </button>
              </div>
            </div>
          </div>
        </div>

        <div className=" flex flex-col md:flex-row my-36 gap-5 h-[screen]">
          <div className=" flex-[2] p-4 bg-green-50">
            <h1 className="text-2xl font-bold mb-3 ">Job Summery</h1>
            <p>
              We are one of the leading manufacturers and exporters of finished
              leather goods from Calcutta, India for the last 20 years. We are a
              100% EOU and manufacture leather goods for global brands
              worldwide. We maintain strict quality parameters and ensure total
              employee retention and satisfaction.
            </p>

            <div className="mt-10">
              <img src="https://i.ibb.co/bBFPBVW/Rectangle-2-3.png" alt="" />
            </div>
          </div>


          <div className="flex-[1]">
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body">
                <h2 className="card-title  font-bold ">{jobTitle}</h2>
                <hr />
                <div>
                <div className="space-y-6 ">
          <h2 className="card-title text-xl"> <MdOutlinePriceChange></MdOutlinePriceChange>   Price Range: <span> {priceRange} </span> </h2>
          <h1 className="flex items-center text-xl"> <MdDateRange className="text-2xl"></MdDateRange>  Dead Line : <span>{deadline} </span> </h1>
          <p className="flex items-center "> <MdDescription className="text-5xl"></MdDescription> <span>{shortDescription} </span> </p>
          </div>
                </div>
                <div className="card-actions">
               {
                employerEmail === user?.email ? <>
                 <Link jobs = {jobs} className="w-full"  to=''>
                <button 
                disabled
               
                className="btn mt-4 disabled bg-green-500 text-white hover:text-black  w-full">Place Your Bid</button>
                </Link>

                <p  onClick={handleBid} className="text-center text-orange-500 underline cursor-pointer">Info</p>
                </> :
                  <>  <Link jobs = {jobs} className="w-full"  to='/bidField'>
                  <button 
                  className="btn mt-4 disabled bg-green-500 text-white hover:text-black  w-full">Place Your Bid</button>
                  </Link></>

               }
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
