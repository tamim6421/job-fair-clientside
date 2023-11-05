import axios, { all } from 'axios';
import { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import JobCard from './JobCard';

const JobCategory = () => {
  const [categories, setCategories] = useState([]);
  const [allJobs, setAllJobs] = useState([]);
  const [category, setCategory] = useState('web-development')
  const [catName, setCatName] = useState('web-development');
  const [filteredJobs, setFilteredJobs] = useState([]);

  console.log(category)


  useEffect(() => {
    axios('http://localhost:5000/category').then((res) => setCategories(res.data));
    axios(`http://localhost:5000/jobs?category=${category}`)
    .then((res) => setAllJobs(res.data));
  }, []);

  console.log(allJobs)

  const handleCategory = (name) => {
    console.log(name)
    setCategory(name)
    // setFilteredJobs(allJobs.filter((job) => job.category === name));
    // console.log(filteredJobs);
  };

  

  return (
    <div className='my-36'>
      <Tabs >
        <TabList>
          {categories.map((cat) => (
            <Tab
            value={category}
              key={cat._id}
              onChange={(e) => handleCategory(e.target.value)}
            >
              {cat.category_name}
            </Tab>
          ))}
        </TabList>

        <TabPanel>
          {/* {filteredJobs?.map((job) => (
            <JobCard key={job._id} job={job} />
          ))} */}
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default JobCategory;
