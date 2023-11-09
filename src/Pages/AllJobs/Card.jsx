/* eslint-disable react/prop-types */

import { Link } from 'react-router-dom';
import image from '../../assets/dream.svg'
import { MdOutlinePriceChange, MdDateRange, MdDescription } from "react-icons/md";

const Card = ({job}) => {
    const{jobTitle,maximumPrice,minimumPrice,deadline,category,shortDescription, _id  } = job
    return (
        <div className="bg-green-50 border-2  rounded-lg shadow-lg w-3/4 mx-auto  px-6 py-1 mb-20">
        <div className="flex flex-col md:flex-row">
         <div className="p-5 flex-[1]">
             <img src={image} className="w-2/3" alt="" data-aos="fade-up"  />
             <h1 className="text-3xl font-bold text-green-500  " data-aos="fade-down">{jobTitle} </h1>
             <p> Category is {category} </p>
         </div>
         <div className=" py-5 flex-[1]">
         <div className="space-y-3 ">
     <div className="flex  gap-2" data-aos="fade-up">
     <MdOutlinePriceChange className="text-3xl text-orange-500"></MdOutlinePriceChange>  
     <h2 className="card-title md:text-xl">  Price Maximum :  ${maximumPrice} </h2>
     </div>
     <div className="flex  gap-2" data-aos="fade-down">
     <MdOutlinePriceChange className="text-3xl text-orange-500"></MdOutlinePriceChange>  
     <h2 className="card-title md:text-xl">  Price Minimum : ${minimumPrice}</h2>
     </div>
       <div className="flex gap-2" data-aos="fade-up">
       <MdDateRange className="text-3xl text-orange-500"></MdDateRange> 
       <h1 className="flex items-center text-xl">  Dead Line : <span>{deadline} </span> </h1>
       </div>
       <div className="flex  gap-2" data-aos="fade-down">

      <div>
      <MdDescription className="text-3xl text-orange-500"></MdDescription> 
      </div>
   <p className=" "> <span>{shortDescription} </span> </p>
       </div>
   </div>
         </div>

         <div className=" flex justify-end items-end ">
            <Link to={`/jobDetails/${_id}`}>
              {" "}
              <button
                className="btn text-white drop-shadow-lg bg-green-500 hover:bg-green-600 btn-success"
                data-aos="fade-up"
              >
              Details
              </button>
            </Link>
          </div>
       
        </div>
     </div>
    );
};

export default Card;