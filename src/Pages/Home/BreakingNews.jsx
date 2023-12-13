import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const BreakingNews = () => {
    return (
        <div className="flex m-2 bg-red-100">
            <button className="btn bg-pink-300">Breaking News</button>
            <Marquee pauseOnHover={true} spreed={100} className="border rounded-lg">
                <Link className="mr-12" to='/'>
                    I can be a React component, multiple React components.....
                </Link>
                <Link className="mr-12" to='/'>
                    I can be a React component, multiple React components.....
                </Link>
                <Link className="mr-12" to='/'>
                    I can be a React component, multiple React components.....
                </Link>
            </Marquee>
        </div>
    );
};

export default BreakingNews;