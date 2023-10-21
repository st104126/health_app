import { Outlet } from "react-router-dom";
import TopNav from "./TopNav";
import Footer from "./Footer";


const Layout = () => {
    return (
        <div>
            <TopNav />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Layout;