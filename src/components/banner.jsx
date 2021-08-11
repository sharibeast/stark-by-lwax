import React from 'react';
import Image from 'next/image';
import banner1 from '../../public/assets/images/banner1.png';

export default function banner() {
  return (
    <div className="">
      <div className="p-6 bg-cozy">
        <div className="bg-cozy-dark">
          <Image alt="picture of fitness cloth" src={banner1} />
        </div>
      </div>
      <div>
        <div className="">
          <div className="">
            <h2 className="text-5xl ">
              look <span className="text-pinkish-dark">comfortable</span> and{' '}
              <span className="text-cozy-dark">look good</span>
            </h2>
            <p className="text-xl">
              If you want to look comfortable and look good during your
              workouts(Heavy weight lifting/ aerobics)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
