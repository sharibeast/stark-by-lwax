import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ic from '../../public/assets/menu-outline.svg';
import { GrClose } from 'react-icons/gr';

export default function nav() {
  const [open, setOpen] = useState(false);

  const toggle = (params) => {
    setOpen((prev) => !prev);
  };

  return (
    <div className="flex justify-between pt-1">
      <div className="flex justify-between w-3/5">
        <div className="ml-2 md:hidden">
          <Image src={ic} onClick={toggle} height={40} width={40} />
        </div>
        <div className="ml-4 text-2xl font-semibold tracking-widest ">
          STARK
        </div>
      </div>
      <div className="hidden mr-8 space-x-8 md:block">
        <Link href="#">
          <a className="text-xl">Product</a>
        </Link>
        <Link href="#">
          <a className="text-xl">About</a>
        </Link>
        <Link href="#">
          <a className="text-xl">Store</a>
        </Link>
      </div>
      {/* mobile menu */}
      <Menu open={open}>
        <div className="relative w-full h-screen text-center bg-cozy-dark ">
          <div className="flex items-center justify-between">
            <h1 className="mb-10 ml-4 text-2xl font-semibold tracking-widest">
              STARK
            </h1>
            <GrClose
              aria-label="close"
              onClick={toggle}
              size={30}
              className="absolute cursor-pointer top-3 right-3"
            />
          </div>
          <Link href="#">
            <a className="block mb-5 text-3xl text-white cursor-pointer ">
              Store
            </a>
          </Link>
          <Link href="#">
            <a className="block mb-5 text-3xl text-white cursor-pointer">
              Gallery
            </a>
          </Link>
          <Link href="#">
            <a className="block mb-5 text-3xl text-white cursor-pointer">
              About
            </a>
          </Link>
          <Link href="#">
            <a className="block mb-5 text-3xl text-white cursor-pointer">
              Contact
            </a>
          </Link>
        </div>
      </Menu>
      {/* end of mobile menu */}
    </div>
  );
}

const style = {
  menu: {
    open: `h-full w-full `,
    close: `w-0 h-full`,
    default: `overflow-x-hidden md:overflow-hidden transition-all duration-700 fixed z-20 top-0 right-0`,
  },
};

function Menu({ children, open }) {
  return (
    <div
      className={`${style.menu.default}
       ${open ? style.menu.open : style.menu.close}`}
    >
      {children}
    </div>
  );
}
