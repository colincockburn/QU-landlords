import React from 'react';

function ReviewCard() {
  // Replace with actual data or props
  const reviewData = {
    landlordName: 'Axon Properties',
    rent: '$800 / room',
    address: '1-200 Union St.',
    duration: '1 year',
    reliability: 3, // This would be out of 5, for example
    recommendation: 2, // Also out of 5
    reviewText: 'They responded quickly when there was an issue but the rent was too expensive for the property. I would not recommend them as my first option.',
  };

  // Function to generate stars for ratings
  const generateStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => 
      index < rating ? '★' : '☆'
    ).join('');
  };

  return (
    <div className="max-w-md mx-auto bg-white rounded-lg shadow-md overflow-hidden m-6">
      <div className="bg-red-600 text-center py-2 text-white text-xl font-bold">{reviewData.landlordName}</div>
      <div className="p-4">
        <div className="flex flex-col space-y-1">
          <div className="flex justify-between">
            <span className="text-gray-700">Rent:</span>
            <span className="text-left">{reviewData.rent}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-700">Property Address:</span>
            <span className="text-left">{reviewData.address}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-700">Duration:</span>
            <span className="text-left">{reviewData.duration}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-700">Reliability:</span>
            <span className="text-left">{generateStars(reviewData.reliability)}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-700">Recommendation:</span>
            <span className="text-left">{generateStars(reviewData.recommendation)}</span>
          </div>
          <div className="mt-8 border border-qul-dark-gray rounded-lg p-2">
            <p className="text-gray-700 font-bold mb-1">Review:</p>
            <p className="text-gray-600 whitespace-pre-line">{reviewData.reviewText}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReviewCard;
