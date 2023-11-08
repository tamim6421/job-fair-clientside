import axios from "axios";
import useAuth from "../../Hooks/useAuth";
import Navbar from "../Navbar/Navbar";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { useRef } from "react";
import { useState } from "react";

const BidInputFields = () => {
  const [inputDate, setInputDate] = useState("");
  const navigate = useNavigate();
  const inputRef = useRef();

  const { user } = useAuth();
  const allJobs = JSON.parse(localStorage.getItem("jobsData"));
  console.log(allJobs);

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
  const handelSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const price = form.price.value;
    const date = inputDate;
    const email = user?.email;
    const bidInfo = {
      email,
      price,
      date,
      status: "Pending",
      completed: false,
      allJobs,
    };
    console.log(bidInfo);

    if (allJobs.employerEmail === user?.email) {
      return toast.error("Can not Bid Your Worn Job");
    }

    axios
      .post("https://job-fair-server.vercel.app/bidProject", bidInfo)
      .then((data) => {
        console.log(data.data);
        if (data.data.insertedId) {
          toast.success("Project Bid successfully");
        }
      });

    navigate("/myBids");
  };

  return (
    <div>
      <Navbar></Navbar>
      <div className=" flex h-[100vh] justify-center items-center w-3/4 mx-auto  ">
        <form
          onSubmit={handelSubmit}
          className="card-body shadow-2xl rounded-lg"
        >
          <h1 className="text-3xl font-semibold text-center drop-shadow-lg text-green-500 ">
            Input Your Bid Data
          </h1>
          <hr />
          <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
            <div className="form-control">
              <label className="label">
                <span className="label-text text-green-500 text-lg">Price</span>
              </label>
              <input
                type="number"
                placeholder="Price"
                name="price"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text  text-green-500 text-lg">
                  Dead Line
                </span>
              </label>
              <input
                type="date"
                id="input"
                ref={inputRef}
                className="input input-bordered w-full"
                name="date"
                onChange={handleDateChange}
              />
              {/* <input
              type="date"
              placeholder="Dead Line"
              name="date"
              className="input input-bordered"
              required
            /> */}
              <label className="label"></label>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text  text-green-500 text-lg">
                  {" "}
                  Your Email
                </span>
              </label>
              <input
                type="email"
                placeholder="Your Email"
                defaultValue={user?.email}
                readOnly
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-green-500 text-lg">
                  Buyer Email
                </span>
              </label>
              <input
                type="email"
                placeholder="Buyer Email"
                defaultValue={allJobs.employerEmail}
                name=""
                readOnly
                className="input input-bordered"
                required
              />
              <label className="label"></label>
            </div>
          </div>
          <div className="form-control mt-6">
            <input
              className="btn btn-success bg-green-500 text-white"
              type="submit"
              value="Bid On The Project"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default BidInputFields;
