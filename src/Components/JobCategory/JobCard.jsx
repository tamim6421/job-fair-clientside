import { MdWorkspacesFilled ,MdOutlinePriceChange, MdDateRange, MdDescription } from "react-icons/md";
import { Link } from "react-router-dom";
const JobCard = ({ job }) => {
  const { category, jobTitle, priceRange, shortDescription, deadline , _id } = job;
  //console.log(job);
  return (
    <div>
      <div className="card flex flex-col md:flex-row lg:card-side bg-green-100 p-8 mb-10 px-9 shadow-xl">
     
      <div className="flex flex-col text-center justify-center  w-2/6 items-center">
      <MdWorkspacesFilled className="text-5xl text-orange-400"></MdWorkspacesFilled>
         <h1 className="text-3xl font-bold text-green-400">{jobTitle}</h1>
      </div>
        
        
        <div className="card-body">
          <div className="space-y-6 ">
          <h2 className="card-title text-2xl"> <MdOutlinePriceChange></MdOutlinePriceChange>   Price Range: <span> {priceRange} </span> </h2>
          <h1 className="flex items-center text-xl"> <MdDateRange className="text-3xl"></MdDateRange>  Dead Line : <span>{deadline} </span> </h1>
          <p className="flex items-center w-3/5"> <MdDescription className="text-5xl"></MdDescription> <span>{shortDescription} </span> </p>
          </div>
          <div className="card-actions  md:justify-end mb-10">
           <Link to={`/jobDetails/${_id}`}> <button className="btn btn-success">Bid Now</button></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
