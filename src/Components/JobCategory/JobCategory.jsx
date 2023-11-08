import axios, { all } from 'axios';
import { useEffect, useState } from 'react';
import { Tab, Tabs, TabList } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import JobCard from './JobCard';
import { MdDashboard } from "react-icons/md";
import { useQueries } from '@tanstack/react-query';
import { BsArrowRight } from "react-icons/bs";
import useAuth from '../../Hooks/useAuth';

const JobCategory = () => {
  const {user} = useAuth()
  const [categories, setCategories] = useState([]);
  const [allJobs, setAllJobs] = useState([]);
  const [category, setCategory] = useState('graphics-design')
  // const [catName, setCatName] = useState('web-development');
  // const [filteredJobs, setFilteredJobs] = useState([]);

  // console.log(category)

  // const data = useQueries({
  //   queryKey: ['jobs'],
  //   queryFn: async () =>{
  //     const allCategory = await fetch('http://localhost:5000/category')
  //     return await allCategory.json()
  //   }
  // })
  // console.log(data)


  useEffect(() =>{
    axios('http://localhost:5000/category')
    .then((res) => setCategories(res.data));
  } ,[])

  
  useEffect(() => {
   
    axios(`http://localhost:5000/jobs?category=${category}`, {withCredentials: true})
    .then((res) => {
      // console.log(res.data)
      setAllJobs(res.data)
    });
  }, [category]);

  // console.log(allJobs)

  const handleCategory = (name) => {
    console.log(name)
    setCategory(name)
    // setFilteredJobs(allJobs.filter((job) => job.category === name));
    // console.log(filteredJobs);
  };

  

  return (
    <div className='my-36'>
         <div>
         <h2 className='text-3xl text-center font-bold drop-shadow-md text-green-400 ' data-aos="fade-up">Top Featured <span>Jobs</span> </h2>
      <h1 className='text-center mb-7 mt-2 text-xl text-gray-400 font-bold drop-shadow-md'>
        
        <span className='flex justify-center gap-3 items-center' data-aos="fade-down">  Browse Category<BsArrowRight className='text-orange-500'></BsArrowRight></span> </h1>
         </div>
      <Tabs className='bg-gray-50' >
        <TabList className='bg-green-400 box font-bold text-2xl py-5 text-white max-w-max px-10 mx-auto rounded-full text-center'>
          
          {categories.map((cat) => (
            <Tab   
                    
              key={cat._id}
              onClick={() => handleCategory(cat.category_name)}
              
            >
            {cat.category_name  == 'graphics-design'? 'Graphics Design': cat.category_name == 'web-development'? 'Web Development': 'Digital Marketing'}
            </Tab>
          ))}
        </TabList>

     <div className='my-20'>
      <div className='text-center my-10'>
    

      </div>
     {allJobs?.map((job) => (
            <JobCard key={job._id} job={job} />
          ))}
     </div>
      </Tabs>
      
    </div>
  );
};

export default JobCategory;
