import React from 'react';
import { useRef } from 'react';
import { useRouter } from 'next/router';

function XIcon() {
  const router = useRouter();
  const searchInputRef = useRef();
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 cursor-pointer text-gray-500 traslation duration-100 transform hover:scale-125 sm:mr-3 "
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    </div>
  );
}

export default XIcon;
