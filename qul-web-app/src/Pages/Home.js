import React from 'react';

function Home() {
  return (
    <div className="flex flex-col justify-around items-center flex-grow md:w-5/6 lg:w-full max-w-maxw bg-pink-2001 md:pt-20">

      {/* both are column on mobile and row on desktop */}
      <div className="flex flex-col md:flex-row flex-2 justify-center items-center bg-black1 ">
        <div className='p-5 bg-yellow-3001 '>
          <h1 className="text-2xl md:text-4xl font-extrabold font-custom mb-3 text-qul-red">We believe in transparency between you and your future landlord.</h1>
          <p className="text-xl text-qul-gray">Anonymously rate and review landlords in Kingston</p>
        </div>
        <img src="/flag.png" alt="Queens Flag" className='w-20 mt-14 md:mt-0' style={{ height: "140px", width: "130px" }} />
      </div>

      <div className="flex flex-col md:flex-row items-center flex-1 justify-center w-full px-14 md:px-0 bg-slate-5001">
        <button className="flex justify-center items-center bg-qul-red hover:bg-qul-red-light text-white font-bold h-14  w-60 py-2 px-4 mb-5 md:mr-12 rounded-xl">
          Post a Review
        </button>
        <button className="flex justify-center items-center border border-qul-red hover:bg-qul-red-light text-qul-red font-bold w-60 h-14 py-2 px-4 md:mb-5  rounded-xl">
          Read Reviews
        </button>
      </div>

      <div className="hidden md:flex flex-col flex-2 items-start justify-center w-full">
        <h2 className="text-2xl font-bold mb-4 text-qul-red ">Find Reviews</h2>
        <div className="relative w-full">
          <input className="pl-10 p-2 border bg-gray-100 rounded-3xl h-16 w-full" type="text" placeholder="Landlord, company name, property address..." />
          <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 h-6 w-6 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
      </div>

    </div>
  );
}

export default Home;