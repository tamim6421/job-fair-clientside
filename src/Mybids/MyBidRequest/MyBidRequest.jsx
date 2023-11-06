import axios, { all } from "axios";
import { useEffect, useState } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import useAuth from "../../Hooks/useAuth";


const MyBidRequest = () => {
    const {user} = useAuth()
    const [allRequest, setAllRequest] = useState([])
    const [myRequest, setMyRequest] = useState([])

    useEffect( () =>{
        axios('http://localhost:5000/bidProject')
        .then(res => {
            setAllRequest(res.data)
        })
    } ,[])

    
    // console.log(allRequest)

    useEffect( () =>{
        const filterReq = allRequest.filter( req => req.allJobs.employerEmail === user.email )
        setMyRequest(filterReq)
    } ,[allRequest, user.email])

    console.log(myRequest)


    return (
        <div>
            <Navbar></Navbar>
            <h1>my bid request</h1>

            <div>
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Job Title</th>
        <th>Email</th>
        <th>Deadline</th>
        <th>Status</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
     {
        myRequest?.map((req, i) =>  <tr key={req._id}>
            <th>{i+1}</th>
            <td> {req.allJobs.jobTitle} </td>
            <td>{req.email}</td>
            <td>{req.date}</td>
            <td className="font-semibold text-green-400">{req.status}</td>
            <td className="">

              <div>
              <button className="btn btn-sm"> accept req </button>
              <button className="btn btn-sm"> reject req </button>
              </div>

            </td>
          </tr> )
     }
   
    </tbody>
  </table>
</div> 
            </div>
        </div>
    );
};

export default MyBidRequest;