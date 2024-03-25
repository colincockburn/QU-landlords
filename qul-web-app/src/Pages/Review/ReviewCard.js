import React from 'react';

function ReviewCard({ review }) {
  // Function to generate stars for ratings
  const generateStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) =>
      index < rating ? '★' : '☆'
    ).join('');
  };

  return (
    <div className="max-w-md mx-auto bg-white rounded-lg shadow-md overflow-hidden m-6">
      <div className="bg-red-600 text-center py-2 text-white text-xl font-bold">{review.landlordName}</div>
      <div className="p-4">
        <div className="flex flex-col space-y-1">
          <div className="flex justify-between">
            <span className="text-gray-700">Rent:</span>
            <span className="text-left">{review.rentAmount}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-700">Property Address:</span>
            <span className="text-left">{review.propertyAddress}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-700">Duration:</span>
            <span className="text-left">{review.duration}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-700">Reliability:</span>
            <span className="text-left">{generateStars(review.reliability)}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-700">Recommendation:</span>
            <span className="text-left">{generateStars(review.recommendation)}</span>
          </div>
          <div className="mt-8 border-t border-qul-dark-gray pt-2">
            <p className="text-gray-700 font-bold">Review:</p>
            <p className="text-gray-600 whitespace-pre-line">{review.writtenReview}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReviewCard;
