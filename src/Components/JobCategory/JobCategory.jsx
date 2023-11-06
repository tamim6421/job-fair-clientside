import axios, { all } from 'axios';
import { useEffect, useState } from 'react';
import { Tab, Tabs, TabList } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import JobCard from './JobCard';
import { MdDashboard } from "react-icons/md";
import { useQueries } from '@tanstack/react-query';

const JobCategory = () => {
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
    .then((res) => setCategories(res.data.sort((a, b) => a < b )));
  } ,[])

  
  useEffect(() => {
   
    axios(`http://localhost:5000/jobs?category=${category}`)
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
      <Tabs className='bg-gray-50' >
        <TabList className='bg-green-100 font-bold text-2xl py-1 text-center'>
          
          {categories.map((cat) => (
            <Tab   
                    
              key={cat._id}
              onClick={() => handleCategory(cat.category_name)}
              
            >
            {cat.category_name}
            </Tab>
          ))}
        </TabList>

     <div className='my-20'>
      <div className='text-center my-10'>
        <h2 className='text-3xl text-green-400 font-semibold '>Top Featured <span>Jobs</span> </h2>

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
