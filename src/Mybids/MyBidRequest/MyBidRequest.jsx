/* eslint-disable no-unused-vars */
import axios, { all } from "axios";
import { useEffect, useRef, useState } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import useAuth from "../../Hooks/useAuth";
import useAxiosSec from "../../Hooks/useAxiosSec";
import { Helmet } from "react-helmet-async";
import toast from "react-hot-toast";

import React from "react";
import "react-step-progress-bar/styles.css";
import { ProgressBar } from "react-step-progress-bar";
import Title from "../../Components/Title/Title";
import Footer from "../../Components/Footer/Footer";


// for sending email 
import emailjs from '@emailjs/browser';



const MyBidRequest = () => {
  const { user } = useAuth();
  const [allRequest, setAllRequest] = useState([]);
  const [myRequest, setMyRequest] = useState([]);
   const form = useRef();
  
  const axiosSecure = useAxiosSec();

  useEffect(() => {
    axios.get("https://job-fair-server.vercel.app/request").then((res) => {
      setAllRequest(res.data);
    });
  }, []);

 

  useEffect(() => {
    const filterReq = allRequest.filter(
      (req) => req.allJobs.employerEmail == user.email
    );
    setMyRequest(filterReq);
  }, [allRequest, user.email]);

  // console.log(myRequest);

  const handleReject = async (id) => {
    console.log(id);
    try {
      const response = await fetch(
        `https://job-fair-server.vercel.app/bidProject/${id}`,
        {
          method: "PATCH",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({ status: "Rejected" }),
        }
      );

      const data = await response.json();
      console.log(data);

      if (data.modifiedCount > 0) {
        toast.success("Request Rejected");

        // send email to about reject bid request 
             // Send email using async/await
             const result = await emailjs.sendForm("service_phiddio", "template_pm6oebj", form.current, "CI0W8Fvmb5rU_EeB5");
             console.log(result.text);

      }

      const responseAllRequest = await axios.get(
        `https://job-fair-server.vercel.app/request`
      );
      setAllRequest(responseAllRequest.data);

      console.log("here");
      const filterReq = allRequest.filter(
        (req) => req.allJobs.employerEmail == user.email
      );
      console.log(filterReq);
      setMyRequest(filterReq);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleAccept = async (id) => {
    try {
      console.log(id);

      const response = await fetch(
        `https://job-fair-server.vercel.app/bidProject/${id}`,
        {
          method: "PATCH",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({ status: "In Progress" }),
        }
      );

      const data = await response.json();
      console.log(data);

      if (data.modifiedCount > 0) {
        toast.success("Request Accepted");

      
      }

      const responseAllRequest = await axios.get(
        "https://job-fair-server.vercel.app/request"
      );
      setAllRequest(responseAllRequest.data);

      const filterReq = allRequest.filter(
        (req) => req.allJobs.employerEmail === user.email
      );
      setMyRequest(filterReq);

      console.log(myRequest);
    } catch (error) {
      console.error("Error:", error);
      // Handle the error here
    }
  };

  // console.log(myRequest)

  return (
    <div>
      <Helmet>
        <title>JOB FAIR | Bid Request</title>
      </Helmet>
      <Navbar></Navbar>

      <div className="mt-20 text-center mb-10">
        <Title>Bid Request </Title>
      </div>

      <div>
        <div className="overflow-x-auto bg-green-50 shadow-lg">
          <table className="table">
            {/* head */}
            <thead
              className=" bg-green-500 rounded-full  text-white rounded-ful"
              data-aos="flip-down"
            >
              <tr className="text-xl">
                <th></th>
                <th>Job Title</th>
                <th>Email</th>
                <th>Price</th>
                <th>Deadline</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {myRequest?.map((req, i) => (
                <tr key={req._id}>
                  <th>{i + 1}</th>
                  <td> {req.allJobs.jobTitle} </td>
                  <td>{req.email}</td>
                  <td>{req.price}</td>
                  <td>{req.date}</td>

                  <td
                    className={
                      req.status == "Pending"
                        ? "font-bold  text-blue-500"
                        : req.status == "Rejected"
                        ? "text-red-500 font-bold"
                        : req.status == "Completed"
                        ? "text-[#d900fa] font-bold"
                        : "text-green-500 font-bold"
                    }
                  >
                    {" "}
                    <p className="bg-gray-200 w-[90px] text-center rounded-full py-[5px]">
                      {req.status}
                    </p>{" "}
                  </td>
                  <td className="">
                    <div>
                      {req.status == "Pending" ? (
                        <div>
                          <button
                            onClick={() => handleAccept(req._id)}
                            className="btn btn-success mr-2 bg-green-500 text-white btn-sm"
                          >
                            
                            accept req
                          </button>
                          <button
                            onClick={() => handleReject(req._id)}
                            className="btn btn-error text-white btn-sm"
                          >
                           
                            reject req

                       

                          </button>
                        </div>

                        

                      ) : req.status == "Rejected" ? (
                        <div className="hidden">
                          <button
                            onClick={() => handleAccept(req._id)}
                            className="btn btn-success mr-2 bg-green-500 text-white btn-sm"
                          >
                           
                            accept req
                          </button>
                          <button
                            onClick={() => handleReject(req._id)}
                            className="btn btn-error text-white  btn-sm"
                          >
                           
                            reject req
                          </button>


                         



                        </div>
                      ) : (
                        <div className="">
                          <ProgressBar
                            percent={50}
                            filledBackground="linear-gradient(to right, #ff5100, #2efc00)"
                          />
                        </div>
                      )}

<div>
                                          {/* send email from  */}
                                   <div className=" bg-gray-700 hidden">
                                   <form ref={form} onSubmit={handleReject}>
                                    <label>Name</label>
                                    <input type="text" defaultValue='jobfair' name="from_name" />
                                    <label>Email</label>
                                    <label>Member Name</label>
                                    <input type="text" defaultValue={'user'} name="member_name" />
                                    <label>Email</label>
                                    <br />
                                    <input defaultValue = {req.email} type="email" name="user_email" />
                                    <label>Message</label>
                                    <textarea name="message" />
                                    <input type="submit" value="Send" />
                                    </form>
                                     </div>
                          </div>


                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default MyBidRequest;
