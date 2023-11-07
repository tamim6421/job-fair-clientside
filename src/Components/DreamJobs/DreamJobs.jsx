import { Link } from 'react-router-dom';
import photo from '../../assets/dream.svg'
import { FaAddressBook, FaHandsHelping, FaSeedling } from "react-icons/fa";

const DreamJobs = () => {
  return (
    <div className='my-36'>
      <div className='flex gap-10 flex-col md:flex-row'>
        <div className='flex-[1] p-5 box'>
            <img data-aos="zoom-in-up"  src={photo} alt="" />
        </div>
        <div className='flex-[1] p-5 '>
            <p className='text-3xl md:text-6xl font-semibold drop-shadow-lg text-green-500' data-aos="fade-up">Your dream job is <span className='text-orange-400'>waiting </span> for you</p>
            <div className='flex items-center gap-5 mt-10'>
                <div>
                <p><FaAddressBook className='text-3xl text-orange-400 drop-shadow-lg' data-aos="zoom-in-up"></FaAddressBook></p>
                </div>
                <div>
                <h1 className='text-2xl font-semibold text-green-500 drop-shadow-lg' data-aos="zoom-in-down">No cost to join</h1>
                <p className='text-xl' data-aos="zoom-in-up">Register and browse professionals, explore projects, or even book a consultation.</p>
                </div>
            </div>
            <div className='flex items-center gap-5 mt-10'>
                <div>
                <p><FaSeedling className='text-3xl text-orange-400 drop-shadow-lg' data-aos="fade-up"></FaSeedling></p>
                </div>
                <div>
                <h1 className='text-2xl font-semibold text-green-500 drop-shadow-lg' data-aos="fade-down">Post a job and hire top talent</h1>
                <p className='text-xl' data-aos="fade-up">Finding talent doesn’t have to be a chore. Post a job or we can search for you!.</p>
                </div>
            </div>
            <div className='flex items-center gap-5 mt-10'>
                <div>
                <p><FaHandsHelping className='text-3xl text-orange-400 drop-shadow-lg' data-aos="fade-down"></FaHandsHelping></p>
                </div>
                <div>
                <h1 className='text-2xl font-semibold text-green-500 drop-shadow-lg' data-aos="fade-up">Work with the best—without breaking the rule</h1>
                <p className='text-xl' data-aos="fade-down">Upwork makes it affordable to up your work and take advantage of low transaction rates.</p>
                </div>
                
            </div>

           <Link to='/register'> <button className='btn box box btn-success block mx-auto mt-10 px-7 rounded-full shadow-2xl hover:bg-green-600 text-white bg-green-500' data-aos="fade-up">Sign up for free</button></Link>
        </div>
      </div>
    </div>
  );
};

export default DreamJobs;
