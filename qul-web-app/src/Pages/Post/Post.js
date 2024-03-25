import React, { useState } from 'react';
import SubmissionSuccess from './SubmissionSuccess';
import ReviewProcessing from './ReviewProcessing';

function Post() {

  const [isLoading, setIsLoading] = useState(false); // State to track if form has been submitted
  const [isSubmitted, setIsSubmitted] = useState(false); // State to track if form has been submitted

  const [review, setReview] = useState({ // State to track form inputs
    landlordName: '',
    propertyAddress: '',
    duration: '',
    rentAmount: '',
    reliability: 0,
    recommendation: 0,
    writtenReview: '',
  });

  // Handle change for inputs
  const handleChange = (e) => {
      setReview({ ...review, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {

    setIsLoading(true);

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

        // Handle success
        setIsLoading(false);
        setIsSubmitted(true);
      } else {
          const errorData = await response.json();
          console.error('Server responded with an error:', errorData);

          // TODO: Display error message to user
          setIsLoading(false);
      }
    } catch (error) {
        console.error('Error:', error);

        setIsLoading(false);
    }
  };

  const createRatingButtons = (ratingType) => {
    return [1, 2, 3, 4, 5].map((number) => (
      <button
        key={number}
        className={`border border-blue-400 rounded-lg p-2 mr-2 w-10 text-center ${review[ratingType] === number ? 'bg-blue-500 text-white' : 'text-blue-400'}`}
        onClick={() => setReview({ ...review, [ratingType]: number })}
      >
        {number}
      </button>
    ));
  };

  return (
    isSubmitted ? (
      <SubmissionSuccess />
    ) : isLoading ? (
      <ReviewProcessing />
    ) : (
        <div className="flex flex-col justify-start items-center flex-grow w-full md:w-5/6 lg:w-full max-w-maxw p-2 font-custom text-qul-dark-gray">
        <div className='w-full'>
            <h2 className="text-2xl md:text-4xl font-semibold mb-1 md:mb-6 md:mt-6 text-qul-red">Write a review</h2>
        </div>
        <form onSubmit={handleSubmit} className='w-full text-sm md:text-lg'>
            {/* section that splits on md screens */}
            <div className='flex flex-col md:flex-row'>
                {/* landlord/duration/maybe landlord rating div */}
                <div className="flex flex-col justify-between w-full md:mr-10">
                    <label htmlFor="landlordName" className='md:mb-2 text-sm'>Landlord Name</label>
                    <input
                        type="text"
                        id="landlordName"
                        name="landlordName"
                        className='border border-gray-900 rounded-xl bg-transparent p-2 mb-2 md:mb-10 w-full'
                        placeholder='John Doe'
                        value={review.landlordName}
                        onChange={handleChange}
                        required
                    />
                    <label htmlFor="duration" className='md:mb-2 text-sm'>Duration</label>
                    <input
                        type="text"
                        id="duration"
                        name="duration"
                        className='border border-gray-900 rounded-xl bg-transparent p-2 mb-2 md:mb-10 w-full'
                        placeholder='1 year'
                        value={review.duration}
                        onChange={handleChange}
                        required
                    />
                    <div className="hidden md:flex flex-col mb-2 md:mb-10">
                        <label htmlFor="reliability" className='md:mb-2 text-sm'>Reliability</label>
                        <div>{createRatingButtons("reliability")}</div>

                    </div>
                </div>
                {/* address rent amount recommendation and maybe reliability */}
                <div className="flex flex-col justify-between w-full">
                    <label htmlFor="propertyAddress" className='md:mb-2 text-sm'>Property Address (Optional)</label>
                    <input
                        type="text"
                        id="propertyAddress"
                        name="propertyAddress"
                        className='border border-gray-900 rounded-xl bg-transparent p-2 mb-2 md:mb-10 w-full'
                        placeholder='123 Fake Street'
                        value={review.propertyAddress}
                        onChange={handleChange}
                        required
                    />
                    <label htmlFor="rentAmount" className='md:mb-2 text-sm'>Rent Amount (Optional)</label>
                    <input
                        type="text"
                        id="rentAmount"
                        name="rentAmount"
                        className='border border-gray-900 rounded-xl bg-transparent p-2 mb-2 md:mb-10 w-full'
                        placeholder='$800 / room + utilities'
                        value={review.rentAmount}
                        onChange={handleChange}
                        required
                    />
                    <div className='flex flex-col mb-2 md:mb-10'>
                        <label htmlFor="recommendation" className='md:mb-2 text-sm'>Recommendation</label>
                        <div>{createRatingButtons("recommendation")}</div>

                    </div>
                    <div className="md:hidden flex flex-col mb-2 md:mb-10 ">
                        <label htmlFor="reliability" className='md:mb-2 text-sm'>Reliability</label>
                        <div>{createRatingButtons("reliability")}</div>
                    </div>
                </div>
            </div>

            {/* review and post */}
            <div className='flex flex-col'>
                <label htmlFor="writtenReview" className='md:mb-2 text-sm'>Written Review (Optional)</label>
                <textarea
                    id="writtenReview"
                    name="writtenReview"
                    className='border border-gray-900 rounded-xl bg-transparent p-2 mb-2 md:mb-16 w-full'
                    placeholder='John Doe is a great landlord'
                    value={review.writtenReview}
                    onChange={handleChange}
                    required
                    rows={2}
                    />
                <div className='flex flex-col justify-center items-center'>                
                    <button
                        type="submit"
                        className=" bg-qul-red hover:bg-qul-red-light text-white font-bold h-14 w-60 py-2 mb-1 md:mb-4 px-4 rounded-xl"
                    >
                        Post
                    </button>
                    <h className="text-xs text-qul-gray md:mb-4">
                        Your post is 100% anonymous and is subect to being reported if innappropriate
                    </h>
                </div>
            </div>
        </form>
    </div>
    )
  );
}

export default Post;