import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <Head>
        <title>My Blog</title>
        <meta keyword="My blog powered by next js" />
        <meta contents="My blog powered by next js" />
      </Head>
      <h1>Welcome to My Blog</h1>
    </div>
  );
}
