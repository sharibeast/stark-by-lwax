import Head from 'next/head';
import Nav from '../src/components/nav';
import Banner from '../src/components/banner';

export default function Home() {
  return (
    <div>
      <Nav />
      {/* <NavN /> */}
      <Banner />
    </div>
  );
}
