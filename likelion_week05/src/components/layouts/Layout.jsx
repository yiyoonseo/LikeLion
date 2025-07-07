import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const Layout = () => {
    return(
        <>
            <Navbar />
            <div className="pt-20 bg-[#F9FAFB] min-h-screen">
                <Outlet />
            </div>
        </>
    )
}

export default Layout;