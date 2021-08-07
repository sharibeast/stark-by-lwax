import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ic from '../../public/assets/menu-outline.svg';

export default function nav() {
  return (
    <div className="flex justify-between pt-1">
      <div className="flex justify-between w-3/5">
        <div className="md:hidden~">
          <Image src={ic} height={40} width={40} />
        </div>
        <div className="text-2xl font-bold tracking-widest ">STARK</div>
      </div>

      <div className="hidden md:block">
        <Link href="#">
          <a>Product</a>
        </Link>
        <Link href="#">
          <a>About</a>
        </Link>
        <Link href="#">
          <a>Store</a>
        </Link>
      </div>
    </div>
  );
}
