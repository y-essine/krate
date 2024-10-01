import { Outlet } from "react-router-dom";
import Sidebar from "../components/layout/Sidebar/Sidebar";
import Navbar from "../components/layout/Navbar/Navbar";

const Main = () => {
    return (
        <div className="flex h-full">
            <Sidebar />
            <div className="h-screen w-full flex-grow">
                <Navbar />
                <Outlet />
            </div>
        </div>
    );
};

export default Main;
