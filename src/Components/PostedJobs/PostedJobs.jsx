import { useEffect, useState } from "react";
import useAuth from "../../Hooks/useAuth";
import Navbar from "../Navbar/Navbar";
import axios from "axios";
import PostedJobCard from "./PostedJobCard";

const PostedJobs = () => {
    const {user} = useAuth()
    const[jobs, setJobs] = useState([])

    const url = `http://localhost:5000/jobs?employerEmail=${user?.email}`
    useEffect( () =>{
        axios(url)
        .then(res =>{
            setJobs(res.data)
        })
    } ,[])
    // console.log(jobs)
    return (
        <div>
            <Navbar></Navbar>
            <h1 className="text-3xl font-semibold text-center my-20">Posted jobs</h1>
            <div>
                {
                    jobs?.map(data => <PostedJobCard key={data._id} data={data}></PostedJobCard> )
                }
            </div>
        </div>
    );
};

export default PostedJobs;