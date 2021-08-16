import React from 'react';
import Image from 'next/image';
import bg from '../../../public/assets/images/banner1.png';
import Logo from '../logo/logo';

export default function product({ src }) {
  return (
    <div className="">
      <div className="">
        <Image
          src={src}
          // layout="fill"
          className="object-cover w-full h-56 md:max-w-full sm:h-96"
          alt="picture"
        />
      </div>
      <div className="space-y-0">
        {/* <h1>STARK</h1> */}
        <Logo text=" font-semibold sm:text-xl" />
        <p className="font-sans text-xl  sm:text-xl sm:font-semibold">
          new sports bra
        </p>
        <p className="text-gray-400 sm:text-sm">Tsh 35,000/=</p>
      </div>
    </div>
  );
}
