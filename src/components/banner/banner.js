import React from 'react';
import Image from 'next/image';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import Link from 'next/link';
import { Carousel } from 'react-responsive-carousel';

const carouselData = [
  {
    id: 1,

    image: require('../../../public/assets/images/bg/bg3.jpg'),
  },
  {
    id: 2,
    image: require('../../../public/assets/images/bg/bg2.jpg'),
  },
  {
    id: 3,
    image: require('../../../public/assets/images/bg/bg5.jpg'),
  },
];

export default function banner() {
  return (
    <>
      <div className="relative flex flex-col p-4 overflow-y-hidden h-4/5 sm:flex-row-reverse ">
        <div className="sm:w-1/2">
          <Carousel
            showArrows={false}
            showIndicators={false}
            showStatus={false}
            infiniteLoop={true}
            autoPlay={true}
            interval={3000}
          >
            {carouselData.map((pic) => (
              <div key={pic.id} className="bg-cozy-dark">
                <Image alt="picture of fitness cloth" src={pic.image} />
              </div>
            ))}
          </Carousel>
        </div>
        <div className="mt-8 sm:self-start sm:w-1/2">
          <div className="">
            <div className="">
              <h2 className="text-4xl sm:text-7xl">
                Look <span className="text-pinkish-dark">comfortable</span> and{' '}
                <span className="text-cozy-dark">look good</span>
              </h2>
              <p className="mt-12 mb-4 text-2xl tracking-wide sm:mt-12">
                STARK means strong and we think the best way to be strong is to
                perfect your working outfits too
              </p>
              <Link href="/store" prefetch={true}>
                <button class=" font-bold py-2 px-4 w-full rounded-sm sm:w-40  uppercase bg-cozy-dark ">
                  get starked
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
