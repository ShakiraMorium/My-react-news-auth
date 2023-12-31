import AllNews from "../Shared/AllNews/AllNews";
import Header from "../Shared/Header/Header";
import LeftSideNav from "../Shared/LeftSideNav/LeftSideNav";
import Navbar from "../Shared/Navbar/Navbar";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";
import BreakingNews from "./BreakingNews";






const Home = () => {
    return (
        <div>
            <Header></Header>
            
            <BreakingNews></BreakingNews>
            <Navbar></Navbar>
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                <div className="border">
                    <LeftSideNav></LeftSideNav>
                </div>
                <div className="lg:col-span-2 border">
                    
                    <AllNews></AllNews>
                </div>
                <div className="border  rounded-lg">
                    <RightSideNav></RightSideNav>
                </div>
            </div>
        </div>
    );
};

export default Home;