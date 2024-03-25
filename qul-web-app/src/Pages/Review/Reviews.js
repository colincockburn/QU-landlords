import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ReviewProcessing from '../Post/ReviewProcessing';
import ReviewCard from './ReviewCard';


function Reviews() {

  const [isLoading, setIsLoading] = useState(false); // State to track if form has been submitted

  useEffect(() => { 
    setIsLoading(true);
    // Write code to pause for three secends
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    // This function will be called when the Reviews component is mounted
    console.log('User navigated to the Reviews page');
    // Place your logic here, like fetching data from an API, setting up subscriptions, etc.
  }, []);

  let variable1 = 0;
  let variable2 = 'no search term';

  return (
    <div className="flex flex-col justify-start items-center flex-grow md:w-5/6 lg:w-full max-w-maxw md:pt-3 p-3">
      
      <div className="flex flex-col items-center justify-start w-full font-custom font-bold">
        <h2 className="text-2xl font-bold mb-4 text-qul-red">Read Reviews</h2>
        <div className="relative w-full">
          <input className="pl-10 p-2 border bg-gray-200 rounded-3xl h-16 w-full" type="text" placeholder="Landlord, company name, property address..." />
          <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 h-6 w-6 text-gray-800" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
        <div className='flex justify-center items-center m-3'>
          <p className="text-qul-red">
            <span className="text-red-700">{variable1}</span> results for <span className="text-red-700">{variable2}</span>
          </p>
        </div>
        {isLoading && <ReviewProcessing />}
        <ReviewCard />
      </div>
    </div>
  );
}

export default Reviews;