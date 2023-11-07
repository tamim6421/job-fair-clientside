import { Outlet } from "react-router-dom";
import { Toaster } from 'react-hot-toast';

const MainLayout = () => {
    return (
        <div className="font-manrope text-gray-500">
            
           <div>
            <Outlet></Outlet>
           </div>
           <Toaster />
        </div>
    );
};

export default MainLayout;