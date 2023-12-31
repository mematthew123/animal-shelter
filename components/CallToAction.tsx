import React from 'react';

export default function CallToAction() {
  return (
    <div className='mt-20  py-20 sm:py-24 lg:py-32 '>
      <div className=' relative  bg-gradient-to-r from-green-400 to-blue-500 text-white mt-20 md:mt-40 py-20 sm:py-24 lg:py-32 p-6 '>
        <div className='container mx-auto text-center  '>
          <h2 className='text-4xl font-bold mb-4'>Give Them a Forever Home</h2>
          <p className='text-xl mb-8 hidden md:block '>
            Join our mission to rescue and find loving homes for every animal in
            our care.
          </p>
          <div className='flex flex-col md:flex-row justify-center  gap-4 '>
            <a
              href='/dogs'
              aria-label='Adopt a dog'
              className='bg-white text-green-900 hover:bg-green-900 hover:text-white transition duration-300 py-2 px-6 rounded-full font-semibold text-lg'
            >
              Adopt
            </a>
            <a
              aria-label='Donate to the shelter'
              href='https://donate.stripe.com/test_aEUaHl5eH0bI3Re144'
              className='bg-white text-blue-600 hover:bg-blue-600 hover:text-white transition duration-300 py-2 px-6 rounded-full font-semibold text-lg'
            >
              Donate
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
