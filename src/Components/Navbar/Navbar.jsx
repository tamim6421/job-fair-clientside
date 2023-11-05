import { Link, NavLink } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";


const Navbar = () => {
  const{user, logOut} = useAuth()

    const links = <>

        <li>
        <NavLink
  to="/"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "active" : ""
  }
>
  Home
</NavLink>
        </li>
        <li>
        <NavLink
  to="/addJobs"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "active" : ""
  }
>
  Add Jobs
</NavLink>
        </li>
        <li>
        <NavLink
  to="/postedJobs"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "active" : ""
  }
>
  Posted Jobs
</NavLink>
        </li>
        <li>
        <NavLink
  to="/login"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "active" : ""
  }
>
  Login
</NavLink>
        </li>
    </>
    return (
        <div>
        <div className="navbar shadow-lg px-10 font-semibold text-rose-500 ">
<div className="navbar-start">
<div className="dropdown">
  <label tabIndex={0} className="btn  bg-[#fb70895d] lg:hidden">
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
  </label>
  <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-rose-100 rounded-box w-29">
   {links}
  
  </ul>
</div>
<Link to='/'><button className=" normal-case px-4 text-[#f87e95] font-extrabold text-2xl">Work</button></Link>
</div>
<div className="navbar-center hidden lg:flex">
<ul className="menu menu-horizontal px-1">
 {links}
</ul>
</div>
<div className="navbar-end">
{
  user ? <div> 
      <div className="dropdown dropdown-end">
  <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
    <div className="w-10 rounded-full">
      {
        user.photoURL === null ?  <img  src="https://i.ibb.co/hXYvv9g/girl2.jpg" alt={user.displayName} /> :
        <img src={user.photoURL } alt={user.displayName} />
      }
      
    </div>
  </label>
  <ul tabIndex={0} className="menu menu-sm dropdown-content text-sm  space-y-2 mt-3 z-[1] p-2 shadow bg-rose-200 rounded-box min-w-min">
    <li>
    {
              user.displayName == null ? <button className="btn btn-sm text-white bg-pink-500"> User </button> :<button className="btn btn-sm  text-white bg-pink-500">  {user.displayName} </button>
            }
          </li>
          <li>
          <button className="btn btn-sm text-white bg-pink-400" > {user.email} </button>
          </li>
          <li className="w-full">
           <button
          onClick={logOut}
            className="btn btn-sm text-white  w-full bg-pink-400" > LogOut </button>
          </li>
  </ul>
</div>

  </div> : <Link to='/login'> <button className="rounded-lg btn-sm text-white bg-pink-400 ">lOGIN</button> </Link>

}

</div>
</div>
    </div>
    );
};

export default Navbar;