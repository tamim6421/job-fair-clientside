import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Mainlayout/MainLayout";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import AddJobs from "../Components/AddJobs/AddJobs";
import PostedJobs from "../Components/PostedJobs/PostedJobs";
import Register from "../Pages/Register/Register";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import JobDetails from "../Components/JobCategory/JobDetils/JobDetails";
import BidInputFields from "../Components/BidInputFields/BidInputFields";
import UpdateJobs from "../Components/AddJobs/UpdateJobs";
import MyBids from "../Mybids/MyBids";
import MyBidRequest from "../Mybids/MyBidRequest/MyBidRequest";
import PrivetRoute from "../PrivetRoute/PrivetRoute";
import ContactUs from "../Pages/ContactUs/ContactUs";


const router = createBrowserRouter([
    {
        path:'/',
        element: <MainLayout></MainLayout>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path:'/',
                element:<Home></Home>,
                // loader: () => fetch('http://localhost:5000/jobs')
            },
            {
                path:'/addJobs',
                element:<PrivetRoute><AddJobs></AddJobs></PrivetRoute>
            },
            {
                path:'/postedJobs',
                element: <PrivetRoute><PostedJobs></PostedJobs></PrivetRoute>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path: '/register',
                element:<Register></Register>
            },
            {
                path:'/jobDetails/:id',
                element:<PrivetRoute><JobDetails></JobDetails></PrivetRoute>,
                loader: ({params})=> fetch(`http://localhost:5000/jobs/${params.id}`)
            },
            {
                path:'/bidField',
                element:<BidInputFields></BidInputFields>,
                
            },
            {
                path:'/updateJobs/:id',
                element:<UpdateJobs></UpdateJobs>,
                loader: ({params})=> fetch(`http://localhost:5000/jobs/${params.id}`)
            },
            {
                path: '/myBids',
                element:<PrivetRoute><MyBids></MyBids></PrivetRoute>
            },
            {
                path:'/bidRequest',
                element: <PrivetRoute><MyBidRequest></MyBidRequest></PrivetRoute>
            },
            {
                path:'/contact',
                element:<ContactUs></ContactUs>
            }
        ]
    }
])

export default router;