import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import userPic from "../../../assets/1.png"



const LeftSideNav = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('categories.json')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])
    return (
        <div className="space-y-6">
            <h2 className="text-3xl">All Categories</h2>
            {
                categories.map(category => <Link
                    className="block ml-4 text-2xl font-semibold"
                    key={category.id}
                    to={`/category/${category.id}`}>{category.name}</Link>)
            }
            {/* card */}
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={userPic } alt="Shoes" className="rounded-xl" />
                    
                </figure>
                <div className="card-body items-center text-center">
                    
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LeftSideNav;


