import React from 'react';
import Image from 'next/image';
import banner2 from '../../../public/assets/images/bg/banner.jpg';
import banner1 from '../../../public/assets/images/banner1.png';

export default function banner() {
  return (
    <>
      <div className="relative flex flex-col h-screen p-4 overflow-y-hidden sm:flex-row-reverse ">
        <div className="">
          <div className="rounded-lg bg-cozy-dark">
            <Image alt="picture of fitness cloth" src={banner1} layout="" />
          </div>
        </div>
        <div className="mt-8 sm:self-start">
          <div className="">
            <div className="">
              <h2 className="text-4xl sm:text-7xl">
                Look <span className="text-pinkish-dark">comfortable</span> and{' '}
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
    </>
  );
}