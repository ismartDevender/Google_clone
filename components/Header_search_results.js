/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { useRouter } from 'next/router';
import { useRef } from 'react';
import XIcon from '../components/XIcon.js';
import Mic from '../components/Mic.js';
import styles from '../styles/Header.module.css';
import Search from './Search.js';
import { Avatar } from '@material-ui/core';
import HeaderOptions from '../components/HearderOptions.js';

function Header_search_results() {
  const router = useRouter();
  const searchInputRef = useRef(null);
  const search = (e) => {
    e.preventDefault();
    const term = searchInputRef.current.value;

    if (!term) return;

    router.push(`/search?term=${term}`);
  };
  return (
    <header className=" sticky top-0 bg-white">
      <div className="flex w-full p-6 items-center bg-white">
        <img
          className="w-[10%] h-[10%] cursor-pointer "
          src="google.png"
          alt=""
          onClick={() => router.push('/')}
        />
        <form className="flex flex-grow border px-6 py-3 ml-10 mr-5 border-gray-200 rounded-full shadow-lg max-w-3xl items-center">
          <input
            className="flex-grow w-full focus:outline-none"
            ref={searchInputRef}
            type="text"
          />
          <div onClick={() => (searchInputRef.current.value = '')}>
            <XIcon />
          </div>
          <div className="h-6 hidden sm:inline-flex text-blue-500 border-l-2 pl-4 border-gray-300">
            <Mic />
          </div>
          <div className="h-6 hidden sm:inline-flex text-blue-500 cursor-pointer pl-4">
            <Search />
            <button hidden type="submit" onClick={search}></button>
          </div>
        </form>
        <div className="ml-auto">
          <Avatar className="text-[100px]" src="user.jpeg" />
        </div>
      </div>
      {/* Header options */}
      <HeaderOptions />
    </header>
  );
}

export default Header_search_results;
