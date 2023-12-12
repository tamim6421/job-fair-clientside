import { Helmet } from "react-helmet";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";
import image from "../../assets/dream.svg"
import { motion } from "framer-motion"
import { useState } from "react";
import { useEffect } from "react";
import Card from "./Card";



const AllJobs = () => {
    const [allJobs, setAllJobs] = useState([])
    const [search , setSearch] = useState('')

    useEffect( () =>{
        fetch(`http://localhost:5000/all?search=${search}`)
        .then(res => res.json())
        .then(data =>{
            setAllJobs(data)
        })
    } ,[search])

    const handelSearch = (e) =>{
        e.preventDefault()
        const value = e.target.search.value 
        setSearch(value)
      
    }
    // console.log(search)
    // console.log(allJobs)
  return (
    <div>
           <Helmet>
            <title>
                JOB FAIR | Jobs
                </title>
            </Helmet>
        <Navbar></Navbar>
         <div className="flex mt-10 flex-col shadow-lg p-5 md:flex-row">

         <div className='flex-[1] p-3'>
             
             <div>
             <motion.p
                initial ={{opacity : 0}}
                animate ={{opacity : 1}}
                transition={{delay: 0.2, duration: 2}}
                className='text-green-500 text-3xl md:text-6xl drop-shadow-lg font-extrabold mt-20'  data-aos="fade-up" >Find  <span className='text-orange-400'> your job </span>  <br />  without any hassle.<span className='text-orange-400'>!!</span></motion.p>
             </div>
               
                <p className='text-xl mt-10 drop-shadow-lg ' data-aos="fade-up" >Forget the old rules. You can have the best people.
                            Right now. Right here.</p>
            </div>
        <div className="flex-[1]">
            <img className="w-3/4 mx-auto" src={image} alt="" />
        </div>  
      </div>

        
        <div>

            <div className="w-3/4 mt-20 mx-auto">
                <h1 className="text-5xl font-semibold text-green-500 text-center mt-36 mb-3"> Search Your Job By <span className="text-orange-500">Category</span> </h1>
                <p className="text-center mb-10 text-gray-400 text-xl">Search Job by -----  Web-Development/ Graphics Design/ Digital Marketing </p>
                <form
                onSubmit={handelSearch}
                 className="w-3/4 flex gap-4 flex-col md:flex-row justify-center items-center mx-auto">
                    <input className= "px-8 py-10 rounded-full input input-bordered input-success " type="text" placeholder="Search by Category" name="search" id="" />
                    <input type="submit" value="Search" 
                   className="bg-green btn px-4 bg-green-500 text-white rounded-full"
                    />
                </form>

            </div>

            <div className="my-20">
               

                {
                    allJobs?.map( job => <Card key={job._id} job={job}></Card> )
                }

            </div>
        </div>
        
      <Footer></Footer>
    </div>
  );
};

export default AllJobs;
