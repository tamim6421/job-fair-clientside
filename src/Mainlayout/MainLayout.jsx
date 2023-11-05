import { Outlet } from "react-router-dom";
import { Toaster } from 'react-hot-toast';

const MainLayout = () => {
    return (
        <div>
            
           <div>
            <Outlet></Outlet>
           </div>
           <Toaster />
        </div>
    );
};

export default MainLayout;