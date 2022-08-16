import React from 'react';
import HeaderOption from '../components/HeaderOption.js';
import {
  MoreVertOutlined,
  SearchOutlined,
  LocationSearchingOutlined,
  ImageOutlined,
  PlayCircleFilledWhiteOutlined,
  NewspaperOutlined,
} from '@mui/icons-material';

function HearderOptions() {
  return (
    <div className="flex w-full text-gray-700 justify-evenly text-sm lg:text-base lg:justify-start lg:space-x-36 lg:pl-56 border-b-[1px]">
      {/* Left */}
      <div className="flex space-x-6">
        <HeaderOption Icon={SearchOutlined} title="All" selected />
        <HeaderOption Icon={ImageOutlined} title="Images" />
        <HeaderOption Icon={PlayCircleFilledWhiteOutlined} title="Videos" />
        <HeaderOption Icon={LocationSearchingOutlined} title="Maps" />
        <HeaderOption Icon={NewspaperOutlined} title="News" />
        <HeaderOption Icon={MoreVertOutlined} title="More" />
      </div>
      {/* Right */}
      <div className="flex space-x-4">
        <p className="link cursor-pointer hover:underline">Settings</p>
        <p className="link cursor-pointer hover:underline">Tools</p>
      </div>
    </div>
  );
}

export default HearderOptions;
