/* eslint-disable react/prop-types */
import { MdWorkspacesFilled ,MdOutlinePriceChange, MdDateRange, MdDescription } from "react-icons/md";
import { Link } from "react-router-dom";
import details from '../../assets/details.json'
import jobs from '../../assets/jobs.svg'
const JobCard = ({ job }) => {
  const { category, jobTitle, priceRange, maximumPrice,minimumPrice, shortDescription, deadline , _id } = job;
  //console.log(job);
  return (
    <div>
      <div className="card box flex flex-col md:flex-row lg:card-side bg-green-100 md:h-[250px] p-8 mb-10 px-9 shadow-xl">
     
      <div className="flex flex-col text-center justify-center  w-2/6 items-center">
   
      <img className="w-36" data-aos="fade-up"  src={jobs} alt="" />
         <h1 className="text-3xl font-bold drop-shadow-xl text-green-500" data-aos="fade-down">{jobTitle}</h1>
      </div>
        
        
        <div className="card-body">
          <div className="space-y-3 ">
            <div className="flex gap-2">
            <MdOutlinePriceChange className="text-3xl text-orange-500" data-aos="fade-up"></MdOutlinePriceChange>  
            <h2 className="card-title md:text-xl" data-aos="fade-down">  Price Range: <span> ${maximumPrice} </span>/ <span> ${minimumPrice} </span> </h2>
            </div>
              <div className="flex gap-2">
              <MdDateRange className="text-3xl text-orange-500" data-aos="fade-up"></MdDateRange> 
              <h1 className="flex items-center text-xl" data-aos="fade-down">  Dead Line : <span>{deadline} </span> </h1>
              </div>
              <div className="flex w-4/5 gap-2">

              <MdDescription className="text-3xl text-orange-500" data-aos="fade-up"></MdDescription> 
          <p className=" " data-aos="fade-down"> <span>{shortDescription} </span> </p>
              </div>
          </div>
          <div className="card-actions  md:justify-end md:absolute bottom-5 right-5  ">
           <Link to={`/jobDetails/${_id}`}> <button className="btn text-white drop-shadow-lg bg-green-500 hover:bg-green-600 btn-success" data-aos="fade-up" >Bid Now</button></Link>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default JobCard;
