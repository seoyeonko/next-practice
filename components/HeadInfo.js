import React from 'react';
import Head from 'next/head';

const HeadInfo = ({ title, keyword, contents }) => {
  return (
    <Head>
      <title>My Blog | {title}</title>
      <meta keyword={keyword} />
      <meta contents={contents} />
    </Head>
  );
};

HeadInfo.defaultProps = {
  title: 'Home',
  keyword: 'Blog powered by Next.js',
  contents: 'practice Next.js',
};

export default HeadInfo;
