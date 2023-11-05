

const PostedJobCard = ({data}) => {
    const{jobTitle,maximumPrice,minimumPrice,employerEmail,deadline,category  } = data
    console.log(data)
    return (
        <div>
            <div className="bg-gray-300 h-[200px] mb-20">
                <h1>hello</h1>
            </div>
        </div>
    );
};

export default PostedJobCard;