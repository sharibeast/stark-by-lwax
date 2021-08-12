import Head from 'next/head';
import Nav from '../src/components/nav/nav';
import Banner from '../src/components/banner/banner';
import Store from './store';
import Layout from '../src/components/layout/layout';

export default function Home() {
  return (
    <>
      <Layout>
        <Banner />
      </Layout>
    </>
  );
}
