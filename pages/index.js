import Link from 'next/link';
import { getPosts } from '../utils/mdx-utils';

import Footer from '../components/Footer';
import Header from '../components/Header';
import Layout, { GradientBackground } from '../components/Layout';
import ArrowIcon from '../components/ArrowIcon';
import { getGlobalData } from '../utils/global-data';
import SEO from '../components/SEO';

export default function Index({ posts, globalData }) {
  return (
    <Layout>
      <SEO title={globalData.name} description={globalData.blogTitle} />
      <Header name={globalData.name} />
      <main className="w-full">
        <h1 className="text-3xl lg:text-5xl text-center mb-12">
          {globalData.blogTitle}
        </h1>
        <p className='text-center'>
          We work out of my garage where I built a full service bike shop.
          We will do anything from a quick tune up to complete overhauls.
        </p>
        <div className="flex justify-center">
          <div className="md:first:rounded-t-lg md:last:rounded-b-lg mt-4 backdrop-blur-lg bg-white dark:bg-black dark:bg-opacity-30 bg-opacity-10 hover:bg-opacity-20 dark:hover:bg-opacity-50 transition border border-gray-800 dark:border-white border-opacity-10 dark:border-opacity-10 border-b-0 last:border-b hover:border-b hovered-sibling:border-t-0 py-6 lg:py-10 p-4">
            <h5 className="text-gray-900 dark:text-white text-xl leading-tight font-medium mb-2">Services</h5>
            <p className="text-gray-700 dark:text-white text-base mb-4">
              To view all the services we offer check out the link below.
            </p>
            <Link
              href="/bike-services"
              className="inline-block px-6 py-2.5 text-blue-500 leading-tight uppercase rounded shadow-md">
              <span className="text-blue-500 dark:text-blue-100 cursor-pointer">Bike Services</span>
            </Link>
          </div>
        </div>
      </main>
      <Footer copyrightText={globalData.footerText} />
    </Layout>
  );
}

export function getStaticProps() {
  const posts = getPosts();
  const globalData = getGlobalData();

  return { props: { posts, globalData } };
}
