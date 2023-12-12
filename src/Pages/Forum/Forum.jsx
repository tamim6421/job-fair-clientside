import toast from "react-hot-toast";
import useAxiosPublic from "../../Hooks/axiosPublic";
import useAuth from "../../Hooks/useAuth";
import { imageUpload } from "../../utlies";
import Footer from "../../Components/Footer/Footer";
import Title from "../../Components/Title/Title";
import { MdAddPhotoAlternate } from "react-icons/md"
import Navbar from "../../Components/Navbar/Navbar";
import { Helmet } from "react-helmet";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PostCard from "./PostCard";

const Forum = () => {
    const {user} = useAuth()
    const axiosPublic = useAxiosPublic()



    
    const [currentPage, setCurrentPage] = useState(0)
    
    const [itemsParPage, setItemsParPage] = useState(5)
    const navigate = useNavigate()
    // console.log(currentPage)

    const {data: allPost, refetch } = useQuery({
        queryKey: ['allPost', currentPage],
        queryFn: async ({ pageParam = currentPage }) =>{
            const res = await axiosPublic.get(`/allpost?page=${currentPage}&size=${itemsParPage}`)
            return res.data
        }
    })

    // console.log(allPost)

        const number = allPost?.count
    const numberOfPage = Math.ceil(number / itemsParPage)
    const pages = Array.from({ length: numberOfPage }, (_, index) => index);

    // console.log(pages)
    




    // handel Post 
    const handelPost = async(e) =>{
    
        e.preventDefault()
        const form = e.target 
        const text =  form.text.value 
        const image = form.image.files[0]
        console.log(text,image)

        // upload image url 
        const imageURl = await imageUpload(image)

        // hose image 
        const host = {
            name: user?.displayName,
            image: user?.photoURL,
            email: user?.email
        }

        const postData = {
            post: text,
            host,
            image: imageURl?.data?.display_url,
            date: new Date()
        }

        // console.log(postData)
      
        // post data to the database 
             
            axiosPublic.post('/posts', postData )
            .then( res => {
                console.log(res.data)
                if(res.data.insertedId){
                toast.success('Post Uploaded')
                  e.target.reset();
                 refetch()
                
                }
              })

      

        
    }

    
    return (
        <div>
            <Navbar></Navbar>

            <Helmet>
        <title>
          JobFair | Forum
        </title>
       </Helmet>
            {
            user != null ?
            <div className="mt-20">
                <div className="pt-16 text-center">
                <Title>Add a New Post</Title>
                <hr className=" border-2 w-24 mb-5 border-orange-500 mx-auto" data-aos="fade-up"  />
                </div>

                <div className="flex pt-5 items-center justify-center gap-3 text-center mx-auto">
                <div className="avatar online placeholder">
                    <div className="bg-neutral text-neutral-content rounded-full w-12">
                        <span className="">
                            <img src={user?.photoURL} alt="" />
                        </span>
                    </div>
                 </div>
                <div>
                <button
                onClick={()=>document.getElementById('my_modal_3').showModal()}
                className=" btn btn-outline   md:px-10  text-center flex justify-around hover:bg-purple-600 hover:text-white rounded-full  mx-auto">Whats on your mind ?....  <p>
                <MdAddPhotoAlternate className="text-4xl text-green-600 " />
                </p></button>
                </div>
               
                </div>


            </div> : <p className="pt-20">
                <Title>Please login to add new post</Title>
            
                <hr className=" border-2 w-24 mt-2 border-orange-500 mx-auto" data-aos="fade-up"  />
            </p>
            }
            <div>
            <div>
                    {
                        allPost?.result?.map( data => <PostCard key={data._id} data={data}></PostCard> )
                    }
                    <div className="pages text-center my-10">
                      
                        {
                            pages.map((number, i) => <button
                            onClick={() => setCurrentPage(number)}
                            key={i} 
                            className={currentPage === number ? 'selected btn rounded-full bg-green-400 mr-3 btn-sm ' : "btn  bg-gray-400 rounded-full mr-3 btn-sm"}> {number} </button> )
                        }
                    </div>
                </div> 
             
            </div>

                {/* modal for new post */}
               <div>
               <dialog id="my_modal_3" className="modal">
                <div className="modal-box">
                    <form method="dialog">
                    {/* if there is a button in form, it will close the modal */}
                    <button  className="btn btn-sm  bg-red-800 text-white btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    
                    <div className="p-4">
                        <h1 className="text-xl font-semibold text-gray-500 my-5">Create a new Post</h1>
                        <form onSubmit={handelPost} className="space-y-3">
                        <textarea name="text" className="textarea w-full textarea-bordered" placeholder="Whats on your mind ?"></textarea>
                    <input type="file" name="image" accept="image/*" className="file-input-bordered file-input w-full max-w-xs" />
                    <div>
                    <button className="btn bg-green-500 btn-outline px-7 mt-5 text-white">Post</button>
                    </div>
                        </form>
                   
                    </div>
                </div>
                </dialog>
               </div>
               <Footer></Footer>
        </div>
    );
};

export default Forum;