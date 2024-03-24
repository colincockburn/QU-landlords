import React, { useState } from 'react';

function Post() {
  const [review, setReview] = useState({
    landlordName: '',
    propertyAddress: '',
    rentAmount: '',
    reliability: 0,
    recommendation: 0,
    writtenReview: ''
  });

  // Handle change for inputs
  const handleChange = (e) => {
      setReview({ ...review, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3000/api/reviews', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify(review),
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data);
        // Handle success, clear form, show message, etc.
      } else {
          const errorData = await response.json();
          console.error('Server responded with an error:', errorData);
          // Handle errors, show user message, etc.
      }

      const data = await response.json();
      console.log(data);
      // Handle success, clear form, show message, etc.
    } catch (error) {
        console.error('Error:', error);
        // Handle errors, show user message, etc.
    }
  };

  // Rating buttons (for reliability and recommendation)
  const ratingButtons = [1, 2, 3, 4, 5].map((number) => (
        <button
            key={number}
            className="focus:outline-none focus:ring focus:border-blue-300 ... other styles"
            onClick={() => setReview({ ...review, reliability: number })} // or recommendation
        >
            {number}
        </button>
    ));


  return (
    <div className="max-w-2xl mx-auto p-6 bg-white">
    <h2 className="text-2xl font-semibold mb-6">Write a review</h2>
    <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-2 gap-6 mb-6">
            <input
                className="border-gray-300 shadow-sm rounded-md p-2"
                placeholder="Landlord Name or Property Management Company"
                name="landlordName"
                value={review.landlordName}
                onChange={handleChange}
            />
            <input
                className="border-gray-300 shadow-sm rounded-md p-2"
                placeholder="Property Address (Optional)"
                name="propertyAddress"
                value={review.propertyAddress}
                onChange={handleChange}
            />
        </div>
        <div className="grid grid-cols-2 gap-6 mb-6">
            <input
                className="border-gray-300 shadow-sm rounded-md p-2"
                placeholder="Extra"
                // No state associated in the provided example
            />
            <input
                className="border-gray-300 shadow-sm rounded-md p-2"
                placeholder="Rent Amount (Optional)"
                name="rentAmount"
                value={review.rentAmount}
                onChange={handleChange}
            />
        </div>
        <div className="flex items-center space-x-4 mb-6">
            <label className="font-medium">Landlord / Company Reliability</label>
            <div>{ratingButtons}</div>
        </div>
        <div className="flex items-center space-x-4 mb-6">
            <label className="font-medium">Recommendation</label>
            <div>{ratingButtons}</div>
        </div>
        <div className="mb-6">
            <textarea
                className="border-gray-300 shadow-sm rounded-md w-full p-2"
                placeholder="Written review (Optional)"
                name="writtenReview"
                value={review.writtenReview}
                onChange={handleChange}
            />
        </div>
        <button
            type="submit"
            className="bg-red-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
        >
            Post
        </button>
        <div className="text-xs text-gray-500 text-center mt-4">
            Your post is 100% anonymous and is subject to being reported if inappropriate.
        </div>
    </form>
  </div>
  );
}

export default Post;