import React from 'react';
import Image from 'next/image';
import bg from '../../public/assets/images/banner1.png';
import Layout from '../layout/layout';

export default function product({ src }) {
  return (
    <div className="">
      <div className="">
        <Image src={bg} layout="" />
      </div>
      <div>
        <h1>STARK</h1>
        <p>new sports bra</p>
        <p>35,000/=</p>
      </div>
    </div>
  );
}
