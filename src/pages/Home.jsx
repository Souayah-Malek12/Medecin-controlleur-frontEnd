import { useEffect, useState } from 'react';
import Footer from '../components/footer';
import Navbar from '../components/Navbar';

const HomePage = () => {
    const [articles, setArticles] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);

    const api_key = "pub_50834724c1498c003655d33b3bb0376ae0a91";
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`https://newsdata.io/api/1/news?apikey=${api_key}&q=pharmacy&country=gb`);
                const data = await response.json();
                setArticles(data.results);
            } catch (error) {
                console.log('Error while fetching API', error);
            }
        };

        fetchData();
    }, [api_key]);
    
    useEffect(() => {
        if (articles.length) {
            const interval = setInterval(() => {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % articles.length);
            }, 3000);

            return () => clearInterval(interval);
        }
    }, [articles]);

    const currentArticle = articles[currentIndex];

    return (
        <div className="flex flex-col min-h-screen bg-gray-100 m-10 p-8">
            
            <div className="flex flex-row flex-1 p-4">
                <div className="w-3/4 p-6 bg-blue-600  shadow-lg rounded-lg border border-gray-300">
                    <h2 className="text-3xl font-semibold mb-4 text-white font-extrabold">Latest News</h2>
                    {currentArticle ? (
                        <div key={currentArticle.article_id} className="border rounded-lg p-10 shadow-md bg-gray-50">
                            <img 
                                src={currentArticle.image_url} 
                                alt={currentArticle.title} 
                                className="w-full h-60 object-cover rounded-md mb-4" 
                            />
                            <h3 className="text-2xl font-semibold mb-2 text-gray-900">{currentArticle.title}</h3>
                            <p className="text-gray-800 mb-2">{currentArticle.description}</p>
                            <a href={currentArticle.link} className="text-blue-700 hover:underline font-medium">Read more</a>
                        </div>
                    ) : (
                        <p className="text-gray-600">Loading...</p>
                    )}
                </div>
                <div className="w-1/4 p-6 bg-gray-200 shadow-lg rounded-lg border border-gray-300 ml-4">
                    <h2 className="text-2xl font-semibold text-gray-800">Additional Info</h2>
                    {/* Add more content here as needed */}
                </div>
            </div>
            <Footer />
        </div>
     
    );
};

export default HomePage;
