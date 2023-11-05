import { useEffect, useState } from "react";
import useAuth from "../../Hooks/useAuth";
import Navbar from "../Navbar/Navbar";
import axios from "axios";
import PostedJobCard from "./PostedJobCard";
import Swal from "sweetalert2";

const PostedJobs = () => {
    const {user} = useAuth()
    const[jobs, setJobs] = useState([])

    const url = `http://localhost:5000/jobs?employerEmail=${user?.email}`
    useEffect( () =>{
        axios(url)
        .then(res =>{
            setJobs(res.data)
        })
    } ,[url])
    // console.log(jobs)

    const handelDelete = id =>{
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {

                axios.delete(`http://localhost:5000/jobs/${id}`)
                .then(res =>{
                    console.log(res.data)
                    if(res.data.deletedCount > 0){
                Swal.fire(
                'Deleted!',
                'Posted Job has been deleted.',
                'success'
              )
              const remaining = jobs.filter(job => job._id !== id)
              setJobs(remaining)
             }
                })
                console.log(id)
        
            }
          })
    }


    return (
        <div>
            <Navbar></Navbar>
            <h1 className="text-3xl font-semibold text-center my-20">Posted jobs</h1>
            <div>
                {
                    jobs?.map(data => <PostedJobCard 
                        handelDelete = {handelDelete}
                         key={data._id} data={data}></PostedJobCard> )
                }
            </div>
        </div>
    );
};

export default PostedJobs;