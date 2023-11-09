import { useEffect, useState } from "react";
import Navbar from "../Components/Navbar/Navbar";
import useAuth from "../Hooks/useAuth";
import useAxiosSec from "../Hooks/useAxiosSec";
import { Helmet } from "react-helmet-async";
import toast from "react-hot-toast";
import Title from "../Components/Title/Title";
import Footer from "../Components/Footer/Footer";

const MyBids = () => {
  const { user } = useAuth();
  const [myBids, setMyBids] = useState([]);
  const axiosSecure = useAxiosSec();

  const url = `/bidProject?email=${user?.email}`;
  //   const url = `https://job-fair-server.vercel.app/bidProject?email=${user?.email}`;
  useEffect(() => {
    axiosSecure.get(url).then((res) => {
      setMyBids(res.data);
    });

    // axi(url, { withCredentials: true })
    //   .then((res) => res.json())
    //   .then((data) => {
    //     setMyBids(data);
    //   });
  }, [url, axiosSecure]);

  console.log(myBids);

  const handelComplete = (id) => {
    console.log(id);
    fetch(`https://job-fair-server.vercel.app/bidProject/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ status: "Completed" }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        // setMyBids(data)
        if (data.modifiedCount > 0) {
          toast.success("Bid Completed");

          const remaining = myBids.filter((stat) => stat._id !== id);
          const updated = myBids.find((status) => status._id === id);
          updated.status = "Completed";
          const newStatus = [updated, ...remaining];
          setMyBids(newStatus);
        }
      });
  };

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>JOB FAIR | My Bids</title>
      </Helmet>
      <Navbar></Navbar>
      <div className="mt-36 mb-10 text-center" data-aos="fade-up">
        <Title>Your Bid Jobs</Title>
      </div>

      <div>
        <div className="overflow-x-auto ">
          <table className="table">
            {/* head */}
            <thead
              className=" bg-green-500 rounded-full  text-white rounded-ful"
              data-aos="flip-down"
            >
              <tr className="text-xl">
                <th> Number</th>
                <th>Job Title</th>
                <th>Email</th>
                <th>Deadline</th>
                <th className="pl-10">Status</th>
                <th className="pl-10">Action</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {myBids?.map((bids, i) => (
                <tr className="bg-green-50" key={bids._id}>
                  <th className="text-gray-400 font-semibold">{i + 1}</th>
                  <td> {bids.allJobs.jobTitle} </td>
                  <td>{bids.allJobs.employerEmail}</td>
                  <td>{bids.date}</td>
                  <td
                    className={
                      bids.status == "Rejected"
                        ? "font-bold text-red-500"
                        : bids.status == "Completed"
                        ? "text-[#d900fa] font-bold"
                        : bids.status == "Pending"
                        ? "text-blue-500 font-bold"
                        : "text-green-500  font-bold"
                    }
                  >
                    {" "}
                    <p className="bg-gray-200 w-[90px] text-center rounded-full py-[5px] ">
                      {bids.status == "Rejected" ? "Cancelled" : bids.status}
                    </p>{" "}
                  </td>
                  <td className="">
                    {bids.status == "Completed" ? (
                      <div>
                        <button
                          onClick={() => handelComplete(bids._id)}
                          className="btn btn-sm bt-success bg-green-500 text-white hidden"
                        >
                          {" "}
                          Complete{" "}
                        </button>
                      </div>
                    ) : (
                      <div>
                        <button
                          onClick={() => handelComplete(bids._id)}
                          className="btn btn-success bg-green-500 text-white  btn-sm"
                        >
                          {" "}
                          Complete{" "}
                        </button>
                      </div>
                    )}
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

export default MyBids;
