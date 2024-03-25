import React from 'react';
import { Link } from 'react-router-dom';

function SubmissionSuccess() {
  return (
    <div className="bg-white shadow-md rounded-lg px-10 py-14 max-w-lg mx-auto mt-20 text-center">
      <div className="mx-auto mb-6">
        <div className="w-16 h-16 rounded-full bg-qul-red inline-flex items-center justify-center">
          <svg className="w-10 h-10 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" stroke="currentColor" viewBox="0 0 24 24">
            <path d="M5 13l4 4L19 7"></path>
          </svg>
        </div>
      </div>
      <h1 className="text-2xl font-bold mb-4">Review successfully submitted!</h1>
      <p className="mb-8 text-gray-600">Thank you for taking the time to submit a review. This will help many future tenants.</p>
        <Link to="/reviews" className="border bg-qul-red text-white font-bold w-full h-14 py-2 px-4 md:mb-5 rounded-xl">
          Read Reviews
        </Link>
      {/* <button 
        className="text-white bg-qul-red hover:bg-red-700 font-medium py-2 px-6 rounded-lg transition duration-300"
      >
        Check reviews
      </button> */}
    </div>
  );
}

export default SubmissionSuccess;