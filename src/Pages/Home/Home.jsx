
import JobCategory from "../../Components/JobCategory/JobCategory";
import Navbar from "../../Components/Navbar/Navbar";
import Banner from "./Banner/Banner";



const Home = () => {
    return (
        <div>
           <Navbar></Navbar>
            {/* <Banner></Banner> */}

            <div>
                <JobCategory></JobCategory>
            </div>
        </div>
    );
};

export default Home;