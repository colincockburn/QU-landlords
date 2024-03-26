import React from 'react';

function ReviewCard({ review }) {


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
    <div className="flex flex-col items-center mx-auto bg-gray-200 rounded-lg shadow-md mb-6 w-full max-w-lg font-custom">
      <div className="bg-red-600 rounded-lg text-center py-2 text-white text-xl font-bold w-full ">{review.landlordName}</div>
      <div className="p-6 w-full max-w-md">
        <div className="flex flex-col space-y-2 mb-4">
          <div className="flex justify-between">
            <span className="text-gray-700 ">Rent:</span>
            <span className="text-left ">{review.rentAmount}</span>
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
        </div>
        <ReviewCard  title='Review' text={review.writtenReview} />
      </div>
    </div>
  );
}

export default ReviewCard;