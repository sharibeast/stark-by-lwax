import React from 'react';
import Image from 'next/image';
import banner1 from '../../public/assets/images/banner1.png';

export default function banner() {
  return (
    <div className="flex-row-reverse h-screen md:flex">
      <div className="p-6 bg-cozy">
        <div className="bg-cozy-dark">
          <Image alt="picture of fitness cloth" src={banner1} />
        </div>
      </div>
      <div>
        <div className="">
          <div>
            <h2 className="text-5xl text-center">Elegance and comfort</h2>
            <p className="">
              lorem ipsum Lorem ipsum dolor sit amet, consectetur adipiscing
              elit, sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
