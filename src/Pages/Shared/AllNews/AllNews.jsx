import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const AllNews = () => {
    const [allNews, setAllNews] = useState([]);

    

    useEffect(()=> { 
        fetch('news.json')
        .then(res =>res.json())
        .then(data => setAllNews(data))
    }, [])


    return (
        <div>
            <h2 className="text-4xl">News comming Soon...</h2>
            {
                allNews.map(news => <Link key={news.id}>
                {news.name}</Link>)
            }
        </div>
    );
};

export default AllNews;