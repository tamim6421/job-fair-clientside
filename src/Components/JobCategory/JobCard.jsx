const JobCard = ({job}) => {
  const { category, jobTitle, priceRange, shortDescription, deadline } = job;
  //console.log(job);
  return (
    <div className="card card-side bg-base-100 shadow-xl">
        <div>
            <h1> {jobTitle} </h1>
        </div>
      <div className="card-body">
        <h2 className="card-title">{category}</h2>
        <p>Click the button to watch on Jetflix app.</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Watch</button>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
