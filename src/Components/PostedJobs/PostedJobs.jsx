import { useEffect, useState } from "react";
import useAuth from "../../Hooks/useAuth";
import Navbar from "../Navbar/Navbar";
import axios from "axios";
import PostedJobCard from "./PostedJobCard";
import Swal from "sweetalert2";
import useAxiosSec from "../../Hooks/useAxiosSec";
import { Helmet } from "react-helmet-async";
import Title from "../Title/Title";
import Footer from "../Footer/Footer";

const PostedJobs = () => {
    const {user} = useAuth()
    const[jobs, setJobs] = useState([])
    const axiosSecure = useAxiosSec()

    const url = `/findjobs?email=${user?.email}`

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axiosSecure.get(url);
                setJobs(response.data);
            } catch (error) {
                console.error('Error:', error);
                // Handle the error here
            }
        }
        fetchData();
    }, [url, axiosSecure]);
    

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

                axios.delete(`https://job-fair-server.vercel.app/jobs/${id}`)
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

    console.log(jobs)
    return (
        <div>
            <Helmet>
            <title>
                JOB FAIR | Posted Job
                </title>
            </Helmet>
            <Navbar></Navbar>
            <h1 className="text-center my-20" data-aos="fade-down">
                <Title> Your Posted jobs</Title>
            </h1>
            
            <div>
                {
                    jobs?.map(data => <PostedJobCard 
                        handelDelete = {handelDelete}
                         key={data._id} data={data}></PostedJobCard> )
                }
            </div>
            <Footer></Footer>
        </div>
    );
};

export default PostedJobs;