import { useEffect, useState } from 'react';
import Footer from '../components/footer';

import img1 from '../img/HomeImg/Image1.jpg';
import img2 from '../img/HomeImg/Image2.jpg';
import img3 from '../img/HomeImg/Image3.jpg';
import img4 from '../img/HomeImg/Image4.jpg';

import Img1 from '../img/HomeDiv/doctor.png';
import Img2 from '../img/HomeDiv/courrier.png';
import Img4 from '../img/HomeDiv/safe.png';
import Img5 from '../img/HomeDiv/storage.png';

import capt from '../img/capt1.png';

const HomePage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const imgs = [capt, img1, img2, img3, img4];

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
    <div className="flex flex-col min-h-screen bg-gray-100 mt-20">
      <div className="flex flex-col md:flex-row flex-1 p-8 md:p-12">
        <div className="flex flex-col md:w-1/2 mb-8 md:mb-0 md:mr-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Professional email that stays with you throughout your career
          </h2>
          <p className="text-gray-600 mb-4">
            Free and with unlimited storage, I-Sante Expert email has been trusted by doctors for over 10 years.
          </p>
          <p className="text-gray-600 mb-6">
            International Medical professionals can access this feature.
          </p>
          <a
            className="bg-blue-700 text-white px-6 py-3 rounded-full shadow-lg hover:bg-blue-800 transition-colors"
            href="/registre"
          >
            Join today
          </a>
          <p className="text-sm text-gray-600 mt-4">
            ALREADY REGISTERED?{' '}
            <a href="/login" className="text-blue-700 font-semibold hover:underline">
              LOG IN
            </a>
          </p>
        </div>
        <div className="flex-1 h-150 flex justify-center">
          <div className="w-full h-150  shadow-lg rounded-lg border border-red-300 overflow-hidden transition-transform transform hover:scale-105">
            {currentArticle ? (
              <div className="relative">
                <img
                  src={currentArticle}
                  alt="HomeImage"
                  className="w-full h-150 object-cover rounded-lg transition-transform duration-500 ease-in-out transform hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black opacity-50 z-10"></div>
              </div>
            ) : (
              <p className="text-gray-600 text-center p-4">Loading...</p>
            )}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-8 px-4 py-12 bg-gradient-to-r from-blue-50 to-blue-100">
        <div className="flex flex-col items-center text-center">
          <div className="bg-white p-1 rounded-full shadow-lg">
            <img className="w-20 h-15 text-blue-900 rounded-full" src={Img1} alt="Doctor Icon" />
          </div>
          <p className="mt-6 text-blue-900 font-bold text-lg">Used by more than 1,500 doctors daily</p>
        </div>

        <div className="flex flex-col items-center text-center">
          <div className="bg-white p-1 rounded-full shadow-lg">
            <img className="w-20 h-15 text-blue-900 rounded-full" src={Img2} alt="Email Icon" />
          </div>
          <p className="mt-6 text-blue-900 font-bold text-lg">
            Well-recognized and respected email address that will stay with you throughout your career
          </p>
        </div>

        <div className="flex flex-col items-center text-center">
          <div className="bg-white p-1 rounded-full shadow-lg">
            <img className="w-20 h-15 text-blue-900 rounded-full" src={Img5} alt="Storage Icon" />
          </div>
          <p className="mt-6 text-blue-900 font-bold text-lg">Unlimited storage for your medical records</p>
        </div>

        <div className="flex flex-col items-center text-center">
          <div className="bg-white p-1 rounded-full shadow-lg">
            <img className="w-20 h-15 text-blue-900 rounded-full" src={Img4} alt="Search Icon" />
          </div>
          <p className="mt-6 text-blue-900 font-bold text-lg">
            Advanced search options to find your records and Courriers quickly
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default HomePage;
