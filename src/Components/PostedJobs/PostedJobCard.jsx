import axios from "axios";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2'

const PostedJobCard = ({data, handelDelete}) => {
    const{jobTitle,maximumPrice,minimumPrice,employerEmail,deadline,category,shortDescription, _id  } = data
    console.log(data)

   
    return (
        <div>
            <div className="bg-green-300 p-5 rounded-lg shadow-lg w-3/4 mx-auto  px-6 py-1 mb-20">
               <div className="flex flex-col md:flex-row">
                <div className="p-3 flex-[1]">
                    <h1 className="text-3xl font-bold  ">{jobTitle} </h1>
                    <p> Category is {category} </p>
                </div>
                <div className=" flex-[1]">
                    <h1>Minimum Price : <span>$</span> <span> {minimumPrice} </span> </h1>
                    <h1>Maximum Price : <span>$</span> <span> {maximumPrice} </span> </h1>
                    <p>email : {employerEmail}</p>
                    <p className="mt-3">About Job: </p>
                    <p>  {shortDescription} </p>
                </div>
                <div className=" flex-[1]">
                    <div className="flex md:flex-col gap-5 items-end mt-6 ">
                        <Link to={`/updateJobs/${_id}`}><button className="btn max-w-max"> update</button></Link>
                        <button onClick={ () => handelDelete(_id)} className="btn max-w-max"> delete</button>
                        
                    </div>
                </div>
               </div>
            </div>
        </div>
    );
};

export default PostedJobCard;