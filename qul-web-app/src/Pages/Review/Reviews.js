import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ReviewProcessing from '../Post/ReviewProcessing';
import ReviewCard from './ReviewCard';


function Reviews() {

  const [isLoading, setIsLoading] = useState(false); // State to track if form has been submitted
  const [reviews, setReviews] = useState([]);
    // State to store the input value
  const [searchText, setSearchText] = useState('');

    // Function to update the state with the input's current value
  const handleInputChange = (event) => {
    console.log('Input changed:', event.target.value);
    setSearchText(event.target.value);
    handleKeyPress(event); // Call the function to handle the Enter key press
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault(); // To prevent form submission if it's inside a form
      performSearch(searchText);
    }
  };

  const performSearch = async (value) => {
    try {
      const response = await fetch(`http://localhost:3000/api/search?search=${value}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      console.log('Search results:', data);
      setReviews(data); // Update the reviews state with the search results
    } catch (error) {
      console.error('Search error:', error);
    }
  };
  

  // This is called whenever the page is fetched
  useEffect(() => {
    const loadPosts = async () => {
      setIsLoading(true);
      console.log('Fetching reviews...');
      try {
        let response = await fetch('http://localhost:3000/api/reviews');
        if (response.ok) {
          console.log("Reviews fetched successfully! Setting reviews...");
          let results = await response.json();
          setReviews(results);
          console.log(results);
        } else {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
      } catch (error) {
        console.error("Could not fetch reviews:", error);
      }
      setIsLoading(false);
    };
  
    loadPosts(); // Call the function to execute the fetch operation.
  }, []);

  let variable1 = 0;
  let variable2 = 'no search term';

  return (
    <div className="flex flex-col justify-start items-center flex-grow md:w-5/6 lg:w-full max-w-maxw md:pt-3 p-3">
      
      <div className="flex flex-col items-center justify-start w-full font-custom font-bold">
        <h2 className="text-2xl font-bold mb-4 text-qul-red">Read Reviews</h2>
        <div className="relative w-full">
          <input
          className="pl-10 p-2 border bg-gray-100 rounded-3xl h-16 w-full"
          type="text"
          placeholder="Landlord, company name, property address..."
          value={searchText}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
        />

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