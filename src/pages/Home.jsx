import { useEffect, useState } from 'react';
import Footer from '../components/footer';

import img1 from '../img/HomeImg/Image1.jpg';
import img2 from '../img/HomeImg/Image2.jpg';
import img3 from '../img/HomeImg/Image3.jpg';
import img4 from '../img/HomeImg/Image4.jpg';

const HomePage = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const imgs = [img1, img2, img3, img4];

    useEffect(() => {
        if (imgs.length) {
            const interval = setInterval(() => {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % imgs.length);
            }, 3000);

            return () => clearInterval(interval);
        }
    }, [imgs]);

    const currentArticle = imgs[currentIndex];

    return (
        <div className="flex flex-col min-h-screen bg-gray-100 m-10 p-8">
            <div className="flex flex-row flex-1 p-4 space-x-4">
                <div className="w-3/4 bg-blue-600 shadow-lg rounded-lg border border-gray-300 overflow-hidden transition-transform transform hover:scale-105">
                    {currentArticle ? (
                        <div className="relative">
                            <img 
                                src={currentArticle} 
                                alt="HomeImage" 
                                className="w-full h-60 object-cover rounded-lg transition-transform duration-500 ease-in-out transform hover:scale-110" 
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black opacity-50"></div>
                        </div>
                    ) : (
                        <p className="text-gray-600 text-center p-4">Loading...</p>
                    )}
                </div>
                <div className="w-1/4 bg-gray-200 shadow-lg rounded-lg border border-gray-300 p-6 transition-transform transform hover:scale-105">
                    <h2 className="text-2xl font-semibold text-gray-800">Additional Info</h2>
                    <p className="text-gray-600 mt-2">Here you can add some extra details or content that complements the main article.</p>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default HomePage;
