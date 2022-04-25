import Head from 'next/head';
import Header from '../component/header';

export default function Home() {
  return (
    <>
      <Head>
        <title>SMAN 1 Margaasih</title>
        <meta name="description" content="aplikasi SMAN 1 Margaasih" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
    </>
  );
}
