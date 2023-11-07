import { Link } from 'react-router-dom';
import photo from '../../assets/dream.svg'
import { FaAddressBook, FaHandsHelping, FaSeedling } from "react-icons/fa";

const DreamJobs = () => {
  return (
    <div className='my-36'>
      <div className='flex gap-10 flex-col md:flex-row'>
        <div className='flex-[1] p-5 '>
            <img src={photo} alt="" />
        </div>
        <div className='flex-[1] p-5 '>
            <p className='text-3xl md:text-6xl font-semibold drop-shadow-lg text-green-500'>Your dream job is <span className='text-orange-400'>waiting </span> for you</p>
            <div className='flex items-center gap-5 mt-10'>
                <div>
                <p><FaAddressBook className='text-3xl text-orange-400 drop-shadow-lg'></FaAddressBook></p>
                </div>
                <div>
                <h1 className='text-2xl font-semibold text-green-500 drop-shadow-lg'>No cost to join</h1>
                <p className='text-xl'>Register and browse professionals, explore projects, or even book a consultation.</p>
                </div>
            </div>
            <div className='flex items-center gap-5 mt-10'>
                <div>
                <p><FaSeedling className='text-3xl text-orange-400 drop-shadow-lg'></FaSeedling></p>
                </div>
                <div>
                <h1 className='text-2xl font-semibold text-green-500 drop-shadow-lg'>Post a job and hire top talent</h1>
                <p className='text-xl'>Finding talent doesn’t have to be a chore. Post a job or we can search for you!.</p>
                </div>
            </div>
            <div className='flex items-center gap-5 mt-10'>
                <div>
                <p><FaHandsHelping className='text-3xl text-orange-400 drop-shadow-lg'></FaHandsHelping></p>
                </div>
                <div>
                <h1 className='text-2xl font-semibold text-green-500 drop-shadow-lg'>Work with the best—without breaking the rule</h1>
                <p className='text-xl'>Upwork makes it affordable to up your work and take advantage of low transaction rates.</p>
                </div>
                
            </div>

           <Link to='/register'> <button className='btn btn-success block mx-auto mt-10 px-7 rounded-full shadow-2xl hover:bg-green-600 text-white bg-green-500'>Sign up for free</button></Link>
        </div>
      </div>
    </div>
  );
};

export default DreamJobs;
