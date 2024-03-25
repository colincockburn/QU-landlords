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
      <span style={index < rating ? {color: 'gold'} : {color: 'black'}}>
        {index < rating ? '★' : '☆'}
      </span>
    );
  };

  const ReviewCard = ({ title, text }) => {
    return (
      <div className="relative px-4 pb-4 pt-1 w-full mx-auto bg-gray-200 rounded-xl shadow-md flex flex-col items-start space-y-4 border border-black">
        <h3 className="absolute top-0 left-5 -translate-y-1/2 bg-gray-200 px-2 text-lg font-bold text-gray-800">
          {title}
        </h3>
        <p className="text-gray-600">{text}</p>
      </div>
    );
  };

  return (
    <div className="flex flex-col items-center mx-auto bg-gray-200 rounded-lg shadow-md mb-6 w-full max-w-lg">
      <div className="bg-red-600 rounded-lg text-center py-2 text-white text-xl font-bold w-full ">{reviewData.landlordName}</div>
      <div className="p-6 w-full max-w-md">
        <div className="flex flex-col space-y-2 mb-4">
          <div className="flex justify-between">
            <span className="text-gray-700 ">Rent:</span>
            <span className="text-left ">{reviewData.rent}</span>
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
        </div>
        <ReviewCard  title='Review' text={reviewData.reviewText} />
      </div>
    </div>
  );
}

export default ReviewCard;
