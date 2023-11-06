import { useLoaderData } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import useAuth from "../../Hooks/useAuth";
import { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import Swal from "sweetalert2";


const UpdateJobs = () => {
    const jobs = useLoaderData()
    const { jobTitle,deadline, priceRange, shortDescription, _id, category,maximumPrice,minimumPrice} = jobs;
  const {user} = useAuth()
    const [categories, setCategories] = useState([]);
    const [catItem, setCatItem] = useState('digital-marketing')
    // console.log(categories)
   useEffect( ()=>{
        axios('http://localhost:5000/category')
        .then(res => {
            setCategories(res.data)
        })
    } ,[])
   
    console.log(jobs)

    const handleDateChange = (event) => {
      const currentDate = new Date();
      const enteredDate = new Date(event.target.value)

      if (!isNaN(enteredDate) && enteredDate < currentDate) {
       
        return Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Your Date Can Not Be Earlier The Toady",
        })
        
      } 
    
    };

    const handelUpdateJobs = event =>{
        event.preventDefault()
        const form = event.target
        const category = catItem
        const employerEmail = user?.email
        const title = form.title.value
        const date = form.date.value 
        const minimumPrice = form.minimum.value 
        const maximumPrice = form.maximum.value
        const description = form.description.value

        const updatedJobs = {
            category,
            employerEmail,
            jobTitle :title,
            deadline:date,
            minimumPrice,
            maximumPrice,
            shortDescription:description
            
        }
        console.log(updatedJobs)
        axios.put(`http://localhost:5000/jobs/${_id}`, updatedJobs)
        .then(res => {
            console.log(res.data)
            if(res.data.modifiedCount > 0){
                toast.success('Job Updated Successful')
            }
        })
    }
    return (
        <div>
            <Navbar></Navbar>
            <h1 className="text-center my-20 font-bold text-3xl">Update Your Posted Jobs</h1>

            <div>
            <form onSubmit={handelUpdateJobs} >
        <div className="md:flex gap-4  mb-8 px-4">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text text-orange-300 text-lg font-semibold  " data-aos="fade-up">Email Of The Employer </span>
              </label>
              <label className="input-group">
                <input
                  type="email"
                  placeholder="Employer Email"
                  name="email"
                  defaultValue={user?.email}
                  required
                  readOnly
                  className="input input-bordered w-full"
                  data-aos="fade-up"

                />
              </label>
            </div>
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text text-orange-300  text-lg font-semibold " data-aos="fade-down" >Job Title</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  placeholder="Job Title"
                  name="title"
                defaultValue={jobTitle}
                  required
                  className="input input-bordered w-full"
                  data-aos="fade-down"
                />
              </label>
            </div>
          </div>

        

          <div className="md:flex gap-4 mb-8 px-4">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text text-orange-300  text-lg font-semibold " data-aos="fade-up"> Deadline</span>
              </label>
              <label className="input-group">
              <input
        type="date"
        id="input"
        className="input input-bordered w-full"
        name="date"
        onChange={handleDateChange}
      />
        
                {/* <input
                  type="date"
                  name="date"
                  required
                 
                  placeholder="date"
                  className="input input-bordered w-full"
                  data-aos="fade-up"
                /> */}
              </label>
            </div>
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text text-orange-300  text-lg font-semibold " data-aos="fade-down">Category</span>
              </label>
              <select className="input input-bordered "
              onChange={ (e) => setCatItem(e.target.value)}
              name="" id="">
                <option value="" disabled >Chose One</option>
               {
                categories.map( item =>  <option key={item._id} value={item.category_name} > {item.category_name} </option> )
               }
              </select>
            </div>
          </div>


          <div className="md:flex gap-4 mb-8 px-4">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text text-orange-300 text-lg font-semibold " data-aos="fade-up">Minimum Price</span>
              </label>
              <label className="input-group">
                <input
                  type="number"
                  name="minimum"
                defaultValue={minimumPrice}
                  required
                  placeholder="Minimum Price"
                  className="input input-bordered w-full"
                  data-aos="fade-up"
                />
              </label>
            </div>
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text text-orange-300  text-lg font-semibold " data-aos="fade-down">Maximum Price</span>
              </label>
              <label className="input-group">
                <input
                  type="number"
                  placeholder="Maximum Price"
                    defaultValue={maximumPrice}
                    required
                  name="maximum"
                  className="input input-bordered w-full"
                  data-aos="fade-down"
                />
              </label>
            </div>
          </div>

          <div className="md:flex gap-4 mb-8 px-4">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text text-orange-300  text-lg font-semibold " data-aos="fade-up">Description</span>
              </label>
              <textarea className="textarea textarea-accent" required defaultValue={shortDescription} name="description" placeholder="text here"></textarea>
            </div>
          </div>

          <input
            type="submit"
            name=""
            value="Update Posted Job"
            className="btn btn-block text-black bg-yellow-300 hover:bg-yellow-400"
            id=""
            data-aos="fade-down"
          />
        </form>
            </div>
        </div>
    );
};

export default UpdateJobs;