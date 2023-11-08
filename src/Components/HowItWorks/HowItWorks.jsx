import Title from "../Title/Title";
import amin from '../../assets/teach- 1699341621073.json'
import Lottie from "lottie-react";

const HowItWorks = () => {
  return (
    <div className="my-40 p-5">
     
      <p className="text-center  drop-shadow-sm" data-aos="fade-up">
        {" "}
        <Title>
          How It Works <span className="text-red-500"> ? </span>
        </Title>{" "}
      </p>
      <p className="text-center text-lg" data-aos="fade-down">
        Post a job to tell us about your project. Well quickly match you with
        the right{" "}
      </p>
      <div className="my-5  w-2/4 mx-auto" data-aos="zoom-in-up">
      <Lottie animationData={amin} ></Lottie>
        </div>
      <div className="grid gap-5 grid-cols-1 md:grid-cols-3 mt-5">
        <div className="card  bg-green-100 shadow-xl" data-aos="zoom-in-up">
          <figure className="px-10 pt-10">
            <img
              src="https://i.ibb.co/7zDC0sx/2913133.png"
              className="w-28 box"
              alt=""
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title text-2xl drop-shadow-xl text-green-500 ">Create An Account</h2>
            <p className="drop-shadow-xl">
              Post a job to tell us about your project. Well quickly match you
              with the right freelancers find place best.
            </p>
          </div>
        </div>
        <div className="card  bg-green-100 shadow-xl " data-aos="zoom-in-down">
          <figure className="px-10 pt-10">
            <img
              src="https://i.ibb.co/TqzpsVK/add-image-icon-png-1.png"
              className="w-28 box"
              alt=""
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title text-2xl drop-shadow-xl text-green-500 ">Added a New Jobs</h2>
            <p className="drop-shadow-xl">
              Post a job to tell us about your project. Well quickly match you
              with the right freelancers find place best.
            </p>
          </div>
        </div>
        <div className="card  bg-green-100 shadow-xl" data-aos="zoom-in-up">
          <figure className="px-10 pt-10">
            <img
              src="https://i.ibb.co/tBTYyXx/download.png"
              className="w-28 box"
              alt=""
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title text-2xl drop-shadow-xl text-green-500 ">Save & Apply</h2>
            <p className="drop-shadow-xl">
              Post a job to tell us about your project. Well quickly match you
              with the right freelancers find place best.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
