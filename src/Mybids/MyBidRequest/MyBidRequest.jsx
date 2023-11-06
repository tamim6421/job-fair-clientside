import axios, { all } from "axios";
import { useEffect, useState } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import useAuth from "../../Hooks/useAuth";
import useAxiosSec from "../../Hooks/useAxiosSec";
import { Helmet } from "react-helmet-async";
import toast from "react-hot-toast";

import React from "react";
import "react-step-progress-bar/styles.css";
import { ProgressBar } from "react-step-progress-bar";


const MyBidRequest = () => {
    const {user} = useAuth()
    const [allRequest, setAllRequest] = useState([])
    const [myRequest, setMyRequest] = useState([])
    const axiosSecure = useAxiosSec()


    // const url = `/bidProject?employerEmail=${user?.email}`
    useEffect( () =>{
        // axiosSecure.get(url)
        // .then(res => {
        //     setAllRequest(res.data)
        // })
       
        axios('http://localhost:5000/bidProject',)
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

    const handleReject = (id) =>{
        console.log(id)
        fetch(`http://localhost:5000/bidProject/${id}`, {
            method:"PATCH",
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify({status: 'Rejected'})
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data)
            if(data.modifiedCount > 0){
                toast.success('Request Rejected')

                // const remaining = myRequest.filter( stat => stat._id !== id)
                // const updated =myRequest.find(status => status._id === id)
                // updated.status = 'rejected'
                // const newStatus = [updated,  ...remaining]
                
            }
        })
  
        axios('http://localhost:5000/bidProject',)
        .then(res => {
            
            setAllRequest(res.data)

        })
        const filterReq = allRequest.filter( req => req.allJobs.employerEmail === user.email )
        setMyRequest(filterReq)
        console.log(myRequest)


    }
    const handleAccept = (id) =>{
        console.log(id)
        fetch(`http://localhost:5000/bidProject/${id}`, {
            method:"PATCH",
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify({status: 'In Progress'})
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data)
            if(data.modifiedCount > 0){
                toast.success('Request Accepted')

                // const remaining = myRequest.filter( stat => stat._id !== id)
                // const updated =myRequest.find(status => status._id === id)
                // updated.status = 'rejected'
                // const newStatus = [updated,  ...remaining]
                
            }
        })
  
        axios('http://localhost:5000/bidProject',)
        .then(res => {
            
            setAllRequest(res.data)

        })
        const filterReq = allRequest.filter( req => req.allJobs.employerEmail === user.email )
        setMyRequest(filterReq)
        console.log(myRequest)
    }

    return (
        <div>
            <Helmet>
            <title>
                JOB FAIR | Bid Request
                </title>
            </Helmet>
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
        <th>Price</th>
        <th>Deadline</th>
        <th>Status</th>
        
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
     {
        myRequest?.map((req, i) =>  <tr key={req._id}>
            <th>{i+1}</th>
            <td> {req.allJobs.jobTitle} </td>
            <td>{req.email}</td>
            <td>{req.price}</td>
            <td>{req.date}</td>
            <td className={req.status == 'pending' ?"font-semibold text-green-400" : "font-semibold text-red-400"}>{req.status}</td>
            <td className="">

              <div>
              {
                req.status == 'pending'? <div>
                    <button onClick={() =>handleAccept(req._id)} className="btn btn-sm"> accept req </button>
              <button onClick={() =>handleReject(req._id)} className="btn btn-sm"> reject req </button>
                </div> :
                <div className="hidden">
                    <button onClick={() =>handleAccept(req._id)} className="btn btn-sm"> accept req </button>
              <button onClick={() =>handleReject(req._id)} className="btn btn-sm"> reject req </button>
                </div>
           
              }
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