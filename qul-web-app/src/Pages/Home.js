import React from 'react';

function Home() {
  return (
    <div className="flex flex-col justify-around items-center h-screen">

      {/* both are column on mobile and row on desktop */}
      <div className="flex flex-col justify-center items-center h-2/3 ">
        <div className='p-5 '>
          <h1 className="text-2xl font-bold font-custom">We believe in transparency between you and your future landlord</h1>
          <p className="text-lg">Anonymously rate and review landlords in Kingston</p>
        </div>
        <img src="/flag.png" alt="Queens Flag" className='w-20 mt-20' style={{height: "140px", width: "130px"}} />
      </div>

      <div className="flex flex-col h-1/3 w-full px-10">
        <button className="flex justify-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mb-5 rounded-xl">
          Post a Review
        </button>
        <button className="flex justify-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 mb-5 px-4 rounded-xl">
          Read Reviews
        </button>
      </div>

    </div>
  );
}

export default Home;