import { useNavigate, useRouteError } from "react-router-dom";


const ErrorPage = () => {
    const error = useRouteError();
    const navigate = useNavigate()
    console.error(error);

    const handleBack =() =>{
        navigate('/')
    }
  
    return (
     <div className="h-[70vh] flex justify-center items-center">
         <div  id="error-page">
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
          <i>{error.statusText || error.message}</i>
        </p>
        <button onClick={handleBack} className="btn">back to home</button>
      </div>
     </div>
    );
};

export default ErrorPage;