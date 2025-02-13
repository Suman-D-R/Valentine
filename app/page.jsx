'use client';

import React, { useState } from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { Analytics } from '@vercel/analytics/react';

function page() {
  const [isTrue, setIsTrue] = useState(false);
  const [pleaseArray, setPlaceArray] = useState([]);

  return (
    <div className='flex justify-center items-center h-screen relative'>
      <DotLottieReact
        src={`lotties/${isTrue ? 'AnimationTwo' : 'AnimationOne'}.lottie`}
        loop
        autoplay
      />
      {isTrue && (
        <div className='absolute w-full h-full'>
          <DotLottieReact src='lotties/AnimationThree.lottie' loop autoplay />
        </div>
      )}
      {pleaseArray.length > 0 && (
        <div className='flex absolute top-[10%] justify-center items-center flex-wrap gap-4'>
          {pleaseArray.map((val, index) => (
            <div
              key={index}
              className='text-lg text-red-500 py-2 px-4 rounded-full bg-white border-2 border-red-500'
            >
              {val}
            </div>
          ))}
        </div>
      )}
      {!isTrue ? (
        <div className='absolute bottom-[30%] flex justify-center items-center flex-col gap-4'>
          <h1 className='text-3xl bg-red-500 text-white font-bold py-4 px-8 rounded-full '>
            Will You Be My Valentine?
          </h1>
          <div className='flex justify-center items-center gap-4 '>
            <div
              onClick={() => setPlaceArray((prv) => ['please', ...prv])}
              className='text-xl bg-orange-500 text-white font-bold py-2 px-6 cursor-pointer rounded-full'
            >
              No
            </div>
            <div
              onClick={() => {
                setIsTrue(true);
                setPlaceArray([]);
              }}
              className='text-xl bg-green-500 text-white font-bold py-2 px-6 cursor-pointer rounded-full'
            >
              Yes
            </div>
          </div>
        </div>
      ) : (
        <div className='absolute bottom-[30%] flex justify-center items-center flex-col gap-4'>
          <h1 className='text-3xl bg-white text-red-500 font-bold py-4 px-8 rounded-full border-2 border-red-500 '>
            Love You So Much
          </h1>
        </div>
      )}
    </div>
  );
}

export default page;
