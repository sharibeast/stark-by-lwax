import React from 'react';
import Product from './product';

const data = [
  {
    image: require('../../../public/assets/images/bg/bg1.jpg'),
    name: 'new bra',
  },
  {
    image: require('../../../public/assets/images/bg/bg2.jpg'),
    name: 'new bra',
  },
  {
    image: require('../../../public/assets/images/bg/bg3.jpg'),
    name: 'new bra',
  },
  {
    image: require('../../../public/assets/images/bg/bg4.jpg'),
    name: 'new bra',
  },
  {
    image: require('../../../public/assets/images/bg/bg5.jpg'),
    name: 'new bra',
  },
  {
    image: require('../../../public/assets/images/PNG/png1.png'),
  },
];

export default function Store() {
  return (
    <div className="p-2">
      <p className="mb-8 text-4xl font-semibold text-center ">Latest release</p>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
        {data.map((picha) => (
          <Product src={picha.image} />
        ))}
      </div>
    </div>
  );
}
