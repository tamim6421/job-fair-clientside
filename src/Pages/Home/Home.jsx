
import { Helmet } from "react-helmet";
import Candidate from "../../Components/Candidate/Candidate";
import Footer from "../../Components/Footer/Footer";
import HowItWorks from "../../Components/HowItWorks/HowItWorks";
import JobCategory from "../../Components/JobCategory/JobCategory";
import Navbar from "../../Components/Navbar/Navbar";
import Banner from "./Banner/Banner";
import DreamJobs from "../../Components/DreamJobs/DreamJobs";
import Motion from "../../Components/Motion/Motion";



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
            <DreamJobs></DreamJobs>
            <Candidate></Candidate>
            <HowItWorks></HowItWorks>
            <Motion></Motion>
            <Footer></Footer>
        </div>
    );
};

export default Home;