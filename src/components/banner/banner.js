import React from 'react';
import Image from 'next/image';
import banner1 from '../../public/assets/images/banner1.png';
import banner3 from '../../../public/assets/images/banner1.png';

export default function banner() {
  return (
    <div className="flex flex-col h-screen p-4 sm:flex-row-reverse ">
      <div className="p-6 bg-cozy">
        <div className="bg-cozy-dark">
          <Image alt="picture of fitness cloth" src={banner1} layout="" />
        </div>
      </div>
      <div className="mt-8 sm:self-center">
        <div className="">
          <div className="">
            <h2 className="text-4xl sm:text-7xl">
              look <span className="text-pinkish-dark">comfortable</span> and{' '}
              <span className="text-cozy-dark">look good</span>
            </h2>
            <p className="mt-4 text-2xl tracking-wide sm:mt-12">
              If you want to look comfortable and look good during your
              workouts(Heavy weight lifting/ aerobics)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
