import Banner from '../src/components/banner/banner';
import Layout from '../src/components/layout/layout';
import Store from '../src/components/store/store';

export default function Home() {
  return (
    <>
      <Layout>
        <Banner />
        <Store />
      </Layout>
    </>
  );
}
