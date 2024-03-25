import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ReviewProcessing from '../Post/ReviewProcessing';
import ReviewCard from './ReviewCard';


function Reviews() {

  const [isLoading, setIsLoading] = useState(false); // State to track if form has been submitted
  const [reviews, setReviews] = useState([]);

  // This is called whenever the page is fetched
  useEffect(() => {
    const loadPosts = async () => {
      setIsLoading(true);
      console.log('Fetching reviews...');
      try {
        let response = await fetch('http://localhost:3000/api/reviews');
        if (response.ok) {
          console.log("Reviews fetched successfully!");
        } else {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        let results = await response.json();
        setReviews(results);
        console.log(results);
      } catch (error) {
        console.error("Could not fetch reviews:", error);
      }
      setIsLoading(false);
    };
  
    loadPosts(); // Call the function to execute the fetch operation.
  }, []);

  return (
    <div className="flex flex-col justify-start items-center flex-grow md:w-5/6 lg:w-full max-w-maxw md:pt-3">
      <div className="hidden md:flex flex-col flex-2 items-start justify-start w-full">
        <h2 className="text-2xl font-bold mb-4 text-qul-red">Read Reviews</h2>
        <div className="relative w-full">
          <input className="pl-10 p-2 border bg-gray-100 rounded-3xl h-16 w-full" type="text" placeholder="Landlord, company name, property address..." />
          <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 h-6 w-6 text-gray-800" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
      </div>
      {isLoading ? (
        <ReviewProcessing />
      ) : (
        <div className="w-full">
          {reviews.map(review => (
            <ReviewCard key={review._id} review={review} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Reviews;