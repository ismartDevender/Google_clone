/* eslint-disable @next/next/no-img-element */
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Header from '../components/Header.js';
import Mic from '../components/Mic.js';
import Search from '../components/Search.js';
import Footer from '../components/Footer.js';
import { useRef } from 'react';
import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();
  const searchInputRef = useRef(null);
  const search = (e) => {
    e.preventDefault();
    const term = searchInputRef.current.value;

    if (!term) return;

    router.push(`/search?term=${term}`);
  };

  return (
    <div className="flex flex-col items-center justify-center ">
      <Head>
        <title>Google</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/google1.png" />
      </Head>

      {/* Header */}

      <Header />

      {/* Body */}

      <form className="flex justify-center items-center w-full h-auto">
        <div className="flex items-center flex-col justify-center mt-20 h-auto">
          <img className="w-[20%] h-[20%] " src="google.png" alt="" />
          <div className="flex items-center  w-[50vw]   p-2 bg-white hover:shadow-2xl rounded-3xl mt-5 border-2 border-gray-200 sm:max-w-xl">
            <Search />
            <input
              ref={searchInputRef}
              className="w-full  p-1 pl-5 outline-none text-xl"
              type="text"
              placeholder="Search"
            />
            <Mic />
          </div>
          <div className="flex flex-col w-1/2  justify-center  space-y-2 mt-8 sm:space-y-0 sm:flex-row sm:space-x-4 ">
            <button
              onClick={search}
              className="bg-[#f8f9fa] p-3 rounded-md ring-gray-200 text-sm text-gray-800 hover:ring-1 focus:outline-none active:ring-gray-300 hover:shadow-xl "
            >
              Google Search
            </button>
            <button
              onClick={search}
              className="bg-[#f8f9fa] p-3 rounded-md ring-gray-200 text-sm text-gray-800 hover:ring-1 focus:outline-none active:ring-gray-300 hover:shadow-xl "
            >
              {' '}
              Feeling Lucky
            </button>
          </div>
        </div>
      </form>

      {/* Footer */}
      <Footer />
    </div>
  );
}