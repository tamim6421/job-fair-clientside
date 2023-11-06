import Title from "../Title/Title";
import { AiFillLock } from "react-icons/ai";

const HowItWorks = () => {
  return (
    <div className="my-40">
      <p className="text-center  drop-shadow-sm">
        {" "}
        <Title>
          How It Works <span className="text-red-500"> ? </span>
        </Title>{" "}
      </p>
      <p className="text-center">
        Post a job to tell us about your project. We'll quickly match you with
        the right{" "}
      </p>

      <div className="grid gap-5 grid-cols-1 md:grid-cols-3 mt-36">
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img
              src="https://i.ibb.co/7zDC0sx/2913133.png"
              className="w-36"
              alt=""
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Create An Account</h2>
            <p>
              Post a job to tell us about your project. We'll quickly match you
              with the right freelancers find place best.
            </p>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img
              src="https://i.ibb.co/TqzpsVK/add-image-icon-png-1.png"
              className="w-36"
              alt=""
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Added a New Jobs</h2>
            <p>
              Post a job to tell us about your project. We'll quickly match you
              with the right freelancers find place best.
            </p>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img
              src="https://i.ibb.co/tBTYyXx/download.png"
              className="w-36"
              alt=""
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Save & Apply</h2>
            <p>
              Post a job to tell us about your project. We'll quickly match you
              with the right freelancers find place best.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
