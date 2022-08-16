import React from 'react';
import Global from '../components/Global.js';

function Footer() {
  return (
    <footer className="fixed  bottom-0 grid w-full divide-y-[1px] divide-gray-300 bg-gray-100 text-sm text-gray-500  ">
      <div className="px-3 py-3">
        <p>India</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-flow-row-dense gap-y-4">
        <div className="flex justify-center item-center md:col-span-2 lg:col-span-1 lg:col-start-2">
          <Global /> Carbon neutral since 2007
        </div>
        <div className="flex justify-center space-x-8 whitespace-nowrap md:justify-self-start">
          <p>Advertising</p>
          <p>Business</p>
          <p>How Search Works</p>
        </div>
        <div className="flex justify-center space-x-8 whitespace-nowrap md:ml-auto">
          <p>Privacy</p>
          <p>Terms</p>
          <p>Seetings</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
