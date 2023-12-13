import { FcGoogle } from "react-icons/fc";
import { FaFacebook, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";
import qZone1 from "../../../assets/qZone1.png"
import qZone2 from "../../../assets/qZone2.png"
import qZone3 from "../../../assets/qZone3.png"



const RightSideNav = () => {
    return (
        <div>
            <div className="p-4 space-y-3 mb-6">
                <h2 className="text-3xl font-bold ">Login With</h2>
                <button className="btn btn-outline w-full">
                    <FcGoogle/>
                    Login With Google
                </button>
                <button className="btn btn-outline w-full">
                    <FaGithub />
                    Login With Github
                </button>
            </div>
            {/* login style */}
            <div className="p-4  mb-6 ">
                <h2 className="text-3xl font-bold mb-2">Find Us On</h2>
                <a className=" border- p-4 flex text-lg item-center  rounded-t-lg " href="">
                < FaFacebook className="mr-3 mt-1 " /> 
                <span>Facebook</span>
                </a>
                <a className="p-4 flex text-lg item-center border rounded-t-lg" href="">
                <FaTwitter className="mr-3 mt-1"/> 
                <span>Twitter</span>
                </a>
                <a className="p-4 flex text-lg item-center border rounded-t-lg" href="">
                < FaInstagram className="mr-3 mt-1" /> 
                <span>Instragram</span>
                </a>
                
            </div>
            {/* qoue Zone */}
            <div className="p-4 space-y-3 mb-6">
                <h2 className="text-3xl font-bold ">QZone</h2>
                <img src={qZone1} alt="" />
                <img src={qZone2}alt="" />
                <img src={qZone3} alt="" />
                
            </div>
        </div>



    );
};

export default RightSideNav;