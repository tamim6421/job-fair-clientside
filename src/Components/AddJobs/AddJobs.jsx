import { useRef, useState } from "react";
import useAuth from "../../Hooks/useAuth";
import Navbar from "../Navbar/Navbar";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";


import "react-datepicker/dist/react-datepicker.css";
import Swal from "sweetalert2";
import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import Title from "../Title/Title";
import Footer from "../Footer/Footer";

const AddJobs = () => {
  const [inputDate, setInputDate] = useState("");

  const { user } = useAuth();
  const [catItem, setCatItem] = useState("digital-marketing");
  const navigate = useNavigate();
  const inputRef = useRef();



  const { data, isLoading } = useQuery({
    queryKey: ["jobs"],
    queryFn: async () => {
      const allCategory = await fetch(
        "https://job-fair-server.vercel.app/category"
      );
      return await allCategory.json();
    },
  });
  // console.log(data)

  if (isLoading) {
    // return <p> Loading.....</p>
  }

  const handleDateChange = (event) => {
    const currentDate = new Date();
    const enteredDate = new Date(event.target.value);

    if (!isNaN(enteredDate) && enteredDate < currentDate) {
      inputRef.current.value = "";
      return Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Your Date Can not be Earlier than Today",
      });
    } else {
      setInputDate(event.target.value);
    }
  };
  console.log(inputDate);

  // console.log(catItem)
  const handleSubmitJobs = (event) => {
    event.preventDefault();
    const form = event.target;
    const category = catItem;
    const employerEmail = user?.email;
    const title = form.title.value;
    const date = inputDate;
    const minimumPrice = form.minimum.value;
    const maximumPrice = form.maximum.value;
    const description = form.description.value;
    console.log(date);
    const addJob = {
      category,
      employerEmail,
      jobTitle: title,
      deadline: date,
      minimumPrice,
      maximumPrice,
      shortDescription: description,
    };
    console.log(addJob);
    axios
      .post("https://job-fair-server.vercel.app/jobs", addJob)
      .then((res) => {
        console.log(res.data);
        if (res.data.insertedId) {
          toast.success("Job added Successfully");
        }
      });
    navigate("/postedJobs");
  };

  // console.log(inputDate)
  // const compareDates = () => {
  //   const currentDate = new Date();
  //   const enteredDate = new Date(inputDate);

  //   if (!isNaN(enteredDate) && enteredDate >= currentDate) {
  //     setComparisonResult('The entered date is greater than or equal to today.');
  //   } else {
  //     setComparisonResult('The entered date is earlier than today.');
  //   }
  // };

  return (
    <div>
      <Helmet>
        <title>JOB FAIR | Add Jobs</title>
      </Helmet>
      <Navbar></Navbar>

      <div className="text-center mt-36 mb-5" data-aos="fade-up">
        <Title>Added a New Job</Title>
      </div>
      <div className="shadow-lg p-5 rounded-lg ">
        <form onSubmit={handleSubmitJobs}>
          <div className="md:flex gap-4  mb-8 px-4">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span
                  className="label-text text-green-500 text-lg font-semibold  "
                  data-aos="fade-up"
                >
                  Email Of The Employer{" "}
                </span>
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
                <span
                  className="label-text text-green-500  text-lg font-semibold "
                  data-aos="fade-down"
                >
                  Job Title
                </span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  placeholder="Job Title"
                  name="title"
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
                <span
                  className="label-text text-green-500  text-lg font-semibold "
                  data-aos="fade-up"
                >
                  {" "}
                  Deadline
                </span>
              </label>
              <label className="input-group">
                <input
                  type="date"
                  id="input"
                  ref={inputRef}
                  className="input input-bordered w-full"
                  name="date"
                  onChange={handleDateChange}
                  required
                />
              </label>
            </div>
            <div className="form-control md:w-1/2">
              <label className="label">
                <span
                  className="label-text text-green-500  text-lg font-semibold "
                  data-aos="fade-down"
                >
                  Category
                </span>
              </label>
              <select
                className="input input-bordered "
                onChange={(e) => setCatItem(e.target.value)}
                name=""
                id=""
              >
                <option value="" disabled>
                  Chose One
                </option>
                {data?.map((item) => (
                  <option key={item._id} value={item.category_name}>
                    {" "}
                    {item.category_name}{" "}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="md:flex gap-4 mb-8 px-4">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span
                  className="label-text text-green-500 text-lg font-semibold "
                  data-aos="fade-up"
                >
                  Minimum Price
                </span>
              </label>
              <label className="input-group">
                <input
                  type="number"
                  name="minimum"
                  required
                  placeholder="Minimum Price"
                  className="input input-bordered w-full"
                  data-aos="fade-up"
                />
              </label>
            </div>
            <div className="form-control md:w-1/2">
              <label className="label">
                <span
                  className="label-text text-green-500  text-lg font-semibold "
                  data-aos="fade-down"
                >
                  Maximum Price
                </span>
              </label>
              <label className="input-group">
                <input
                  type="number"
                  placeholder="Maximum Price"
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
                <span
                  required
                  className="label-text text-green-500  text-lg font-semibold "
                  data-aos="fade-up"
                >
                  Description
                </span>
              </label>
              <textarea
                className="textarea textarea-accent"
                name="description"
                placeholder="text here"
              ></textarea>
            </div>
          </div>

          <input
            type="submit"
            name=""
            value="Add New Jobs"
            className="btn btn-block text-white bg-green-500 hover:bg-green-600"
            id=""
            data-aos="fade-down"
          />
        </form>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default AddJobs;
