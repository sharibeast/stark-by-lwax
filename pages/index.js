import Banner from '../src/components/banner/banner';
import Layout from '../src/components/layout/layout';
import Shop from '../src/components/store/shop';

export default function Home() {
  return (
    <>
      <Layout>
        <Banner />
        <Shop />
      </Layout>
    </>
  );
}
