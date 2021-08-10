import Head from 'next/head';
import Nav from '../src/components/nav';
import Banner from '../src/components/banner';
import NavN from '../src/components/navnew';

export default function Home() {
  return (
    <div>
      <Nav />
      {/* <NavN /> */}
      <Banner />
    </div>
  );
}
