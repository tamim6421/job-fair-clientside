

import Lottie from 'lottie-react';
import animation from '../../../assets/banner anim.json'
import { BsArrowRight } from "react-icons/bs";
import { motion } from "framer-motion"
const Banner = () => {
    return (
        <div className=" mt-10 shadow-md flex flex-col md:flex-row h-[600px]">
            <div className='flex-[1] p-3'>
                <motion.p 
                initial={{ y: -250}}
                animate = {{y: -10}}
                className='bg-green-200 text-xl max-w-max px-5 shadow-lg py-2 rounded-full'> <span className='badge bg-orange-400 text-white  badge-info gap-2'> new</span> Job Fair is now a popular job find platform</motion.p>
                <motion.p
                initial ={{opacity : 0}}
                animate ={{opacity : 1}}
                transition={{delay: 0.2, duration: 2}}
                className='text-green-500 text-6xl drop-shadow-lg font-extrabold mt-20' >Find  <span className='text-orange-400'> your job </span>  <span className='text-purple-400'>&</span> <br /> make sure goal <span className='text-orange-400'>!!</span></motion.p>

                <p className='text-xl mt-10 drop-shadow-lg '>Forget the old rules. You can have the best people.
                            Right now. Right here.</p>

                <div>
                    <motion.button 
                    animate={{rotateZ : 360}}
                    className='btn bg-green-500 mt-10 shadow-lg hover:bg-green-600 text-white font-bold px-5 rounded-full'>Get Started <BsArrowRight  className='text-white text-3xl font-bold'></BsArrowRight> </motion.button>
                </div>
            </div>
            <div className='flex-[1]'>
            <Lottie animationData={animation} loop={true} ></Lottie>
            </div>
             
        </div>
    );
};

export default Banner;