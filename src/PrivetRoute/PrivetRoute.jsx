/* eslint-disable react/prop-types */
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hooks/useAuth";

const PrivetRoute = ({ children }) => {
  const { user, loading } = useAuth();

  const location = useLocation();
  // console.log(location.pathname)
  if (loading) {
    return (
      <span className="loading loading-spinner text-green-500 block mx-auto loading-lg text-center my-44"></span>
    );
  }

  if (user) {
    return children;
  }

  return <Navigate state={location.pathname} to="/login"></Navigate>;
};

export default PrivetRoute;
