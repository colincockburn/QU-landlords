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

  const ReviewBox = ({ title, text }) => {
    return review.writtenReview ? (
      <div className="relative px-4 pb-4 pt-1 w-full mx-auto bg-gray-200 rounded-xl shadow-md flex flex-col items-start space-y-4 border border-black">
        <h3 className="absolute top-0 left-5 -translate-y-1/2 bg-gray-200 px-2 text-lg font-bold text-gray-800">
          {title}
        </h3>
        <p className="text-gray-600">{text}</p>
      </div>
    ) : null;
  };

  const Address = () => {
    return review.propertyAddress ? (
      <div className="flex justify-between">
        <span className="text-gray-700">Property Address / Postal Code:</span>
        <span className="text-left">{review.propertyAddress}</span>
      </div>
    ) : null;
  };

  const Rent = () => {
    return review.rentAmount ? (
      <div className="flex justify-between">
        <span className="text-gray-700">Rent:</span>
        <span className="text-left">{review.rentAmount}</span>
      </div>
    ) : null;
  }

  const Duration = () => {
    return review.duration ? (
      <div className="flex justify-between">
        <span className="text-gray-700">Duration:</span>
        <span className="text-left">{review.duration}</span>
      </div>
    ) : null;
  }


  return (
    <div className="flex flex-col items-center mx-auto bg-gray-200 rounded-lg shadow-md mb-6 w-full max-w-lg font-custom">
      <div className="bg-red-600 rounded-lg text-center py-2 text-white text-xl font-bold w-full shadow-lg">{review.landlordName}</div>
      <div className="p-6 w-full max-w-md">
        <div className="flex flex-col space-y-2 mb-4">
          <Rent />
          <Address />
          <Duration />
          <div className="flex justify-between">
            <span className="text-gray-700">Reliability:</span>
            <span className="text-left">{generateStars(review.reliability)}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-700">Recommendation:</span>
            <span className="text-left">{generateStars(review.recommendation)}</span>
          </div>
        </div>
        <ReviewBox  title='Review' text={review.writtenReview} />
      </div>
    </div>
  );
}

export default ReviewCard;