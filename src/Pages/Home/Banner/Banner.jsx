

import Lottie from 'lottie-react';
import animation from '../../../assets/banner anim.json'
import { BsArrowRight } from "react-icons/bs";
import { motion } from "framer-motion"
const Banner = () => {
    return (
        <div className=" mt-10 shadow-md flex px-5 md:px-10 flex-col md:flex-row md:h-[600px]">
            <div className='flex-[1] p-3'>
                <p 
               
                className='bg-green-200 text-xl max-w-max px-5 shadow-lg py-2 rounded-full'  data-aos="fade-down" > <span className='badge bg-orange-400 text-white  badge-info gap-2'  data-aos="fade-up" > new</span> Job Fair is now a popular job find platform</p>
             <div>
             <motion.p
                initial ={{opacity : 0}}
                animate ={{opacity : 1}}
                transition={{delay: 0.2, duration: 2}}
                className='text-green-500 text-3xl md:text-6xl drop-shadow-lg font-extrabold mt-20'  data-aos="fade-up" >Find  <span className='text-orange-400'> your job </span>  <span className='text-purple-400'>&</span> <br /> make sure goal <span className='text-orange-400'>!!</span></motion.p>
             </div>
               
                <p className='text-xl mt-10 drop-shadow-lg ' data-aos="fade-up" >Forget the old rules. You can have the best people.
                            Right now. Right here.</p>

                            <div className="form-control mt-5">
                        <div className="input-group">
                            <input type="text" placeholder="Search…" className="input input-bordered border-green-400" />
                            <button className="btn bg-green-500 btn-square">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                            </button>
                        </div>
                        </div>

                <div>
                    <motion.button 
                    animate={{rotateZ : 360}}
                    className='btn box bg-green-500 mt-10 shadow-lg hover:bg-green-600 text-white font-bold px-5 rounded-full' data-aos="fade-down">Get Started <BsArrowRight  className='text-white text-3xl font-bold'></BsArrowRight> </motion.button>
                </div>

            </div>
            <div className='flex-[1]'>
            <Lottie animationData={animation} loop={true} ></Lottie>
            </div>
             
        </div>
    );
};

export default Banner;