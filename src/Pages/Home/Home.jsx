
import { Helmet } from "react-helmet";
import Candidate from "../../Components/Candidate/Candidate";
import Footer from "../../Components/Footer/Footer";
import HowItWorks from "../../Components/HowItWorks/HowItWorks";
import JobCategory from "../../Components/JobCategory/JobCategory";
import Navbar from "../../Components/Navbar/Navbar";
import Banner from "./Banner/Banner";



const Home = () => {
    return (
        <div>
             <Helmet>
                <title>
                JOB FAIR | Home
                </title>
            </Helmet>
           <Navbar></Navbar>
          
            <Banner></Banner>

            <div>
                <JobCategory></JobCategory>
            </div>

            <Candidate></Candidate>
            <HowItWorks></HowItWorks>
            <Footer></Footer>
        </div>
    );
};

export default Home;