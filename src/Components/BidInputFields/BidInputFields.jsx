import useAuth from "../../Hooks/useAuth";
import Navbar from "../Navbar/Navbar";

const BidInputFields = ({jobs}) => {
    console.log(jobs)
    const {user} = useAuth()

    const handelSubmit = event =>{
        event.preventDefault()
        const form = event.target 
        const price = form.price.value 
        const date = form.date.value 
        const email = user?.email
        const bidInfo = {
            email ,
            price,
            date,

        }
        console.log(bidInfo)
    }
  return (

    <div>
        <Navbar></Navbar>
        <div className=" flex h-[100vh] justify-center items-center w-3/4 mx-auto  ">
      <form onSubmit={handelSubmit} className="card-body shadow-2xl rounded-lg">
        <h1 className="text-3xl font-semibold text-center text-green-400 ">
          Your Bid Information
        </h1>
        <hr />
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Price</span>
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
              <span className="label-text">Dead Line</span>
            </label>
            <input
              type="date"
              placeholder="Dead Line"
              name="date"
              className="input input-bordered"
              required
            />
            <label className="label">
            
            </label>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text"> Your Email</span>
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
              <span className="label-text">Buyer Email</span>
            </label>
            <input
              type="email"
              placeholder="Buyer Email"
              defaultValue='tamimhossain6421@gmail.com'
              name=""
              readOnly
              className="input input-bordered"
              required
            />
            <label className="label">
             
            </label>
          </div>
        </div>
        <div className="form-control mt-6">
    
          <input className="btn btn-success" type="submit" value="Bid On The Job" />
        </div>
      </form>
    </div>
    </div>
  );
};

export default BidInputFields;
