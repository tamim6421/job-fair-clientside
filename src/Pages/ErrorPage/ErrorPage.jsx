import { useNavigate, useRouteError } from "react-router-dom";
import four from '../../assets/404.svg'

const ErrorPage = () => {
    const error = useRouteError();
    const navigate = useNavigate()
    console.error(error);

    const handleBack =() =>{
        navigate('/')
    }
  
    return (
     <div className="h-[70vh] flex justify-center my-20 items-center">
         <div  id="error-page">
        <img src={four} alt="" />
       
        <p>
          <i>{error.statusText || error.message}</i>
        </p>
        <button onClick={handleBack} className="btn bg-green-500 text-white">back to home</button>
      </div>
     </div>
    );
};

export default ErrorPage;