import { useEffect, useState } from "react";
import Navbar from "../Components/Navbar/Navbar";
import axios from "axios";
import useAuth from "../Hooks/useAuth";


const MyBids = () => {
    const {user} = useAuth()
    const [myBids, setMyBids] = useState([])

    const url = `http://localhost:5000/bidProject?email=${user?.email}`
    useEffect( ()=>{
        axios(url)
        .then(res => {
            setMyBids(res.data)
        })
    } ,[url])

    console.log(myBids)
    return (
        <div>
            <Navbar></Navbar>
            <h1 className="text-center text-3xl font-bold my-20">Your Bids jobs</h1>

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
        myBids.map((bids, i) =>  <tr key={bids._id}>
            <th>{i+1}</th>
            <td> {bids.allJobs.jobTitle} </td>
            <td>{bids.email}</td>
            <td>{bids.date}</td>
            <td className="font-semibold text-green-400">{bids.status}</td>
            <td className="">

                <button className="btn btn-sm"> Complete </button>

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

export default MyBids;